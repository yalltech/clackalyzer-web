# Clackalyzer — Product Specification
**Version 1.4.0 · Yall Tech Studios · iOS 17+**
*Document updated 2026-05-13*

---

## Table of Contents
1. [Product Overview](#1-product-overview)
2. [Target Users](#2-target-users)
3. [Platform & Technical Requirements](#3-platform--technical-requirements)
4. [App Architecture](#4-app-architecture)
5. [Navigation & Layout](#5-navigation--layout)
6. [Feature Specifications](#6-feature-specifications)
   - 6.1 Live Spectrum Analyzer
   - 6.2 Recording & Session Management
   - 6.3 Recording Library
   - 6.4 Settings
   - 6.5 Noise Calibration
   - 6.6 Frequency Filter
7. [Audio Processing Pipeline](#7-audio-processing-pipeline)
8. [Data Models](#8-data-models)
9. [Visual Design System](#9-visual-design-system)
10. [Permissions & Privacy](#10-permissions--privacy)
11. [Storage & Sync](#11-storage--sync)
12. [Known Constraints & Future Considerations](#12-known-constraints--future-considerations)

---

## 1. Product Overview

**Clackalyzer** is a professional-grade mechanical keyboard acoustic analysis tool for iPhone and iPad. It captures and visualises the frequency spectrum of keyboard sounds in real time, enabling enthusiasts, builders, and reviewers to objectively characterise switch acoustics, compare different keyboard builds, compensate for ambient noise, and share named spectrum snapshots.

### Core Value Propositions
| # | Value | Description |
|---|-------|-------------|
| 1 | **Real-time insight** | FFT-based spectrum analysis updates faster than the human eye at up to 8× overlap per FFT window |
| 2 | **Scientific accuracy** | Calibrated frequency axis, selectable FFT resolution (1024–16384), Hann-windowed analysis |
| 3 | **Build comparison** | Side-by-side multi-recording comparison to evaluate foams, plates, and switches |
| 4 | **Noise-subtracted baseline** | Ambient noise profiling can be enabled or bypassed, with live reduction stats shown in the header |
| 5 | **Portable lab** | Designed for phone-on-desk workflow — no external hardware required |

---

## 2. Target Users

### Primary
- **Mechanical keyboard enthusiasts** characterising switch sound profiles
- **Custom keyboard builders** validating modifications (foam, plate changes, gaskets)
- **Keyboard reviewers / content creators** producing objective acoustic comparisons

### Secondary
- **Switch vendors / manufacturers** QA-testing consistency across production batches
- **Audio hobbyists** exploring acoustic properties of any percussive sound source

---

## 3. Platform & Technical Requirements

| Property | Value |
|----------|-------|
| Platform | iOS 17.0+ |
| Devices | iPhone (all sizes) + iPad (all sizes) |
| Orientations | Portrait + Landscape (both devices) |
| Frameworks | SwiftUI, SwiftData, AVFoundation, Accelerate |
| Swift version | 5.9 |
| Xcode minimum | 15.0 |
| Bundle ID | `com.yalltech.Clackalyzer` |
| iCloud container | `iCloud.com.yalltech.Clackalyzer` |
| App group | `group.com.yalltech.Clackalyzer` |
| Background mode | `audio` (maintains tap when screen dims during long recordings) |

---

## 4. App Architecture

### Engine Layer
```
AVAudioEngine (input tap)
       │
       ▼
FFTProcessor          ← vDSP Hann-windowed FFT, circular ring buffer
       │
       ▼
NoiseCalibrator       ← per-bin floor subtraction
       │
       ▼
FrequencyFilter       ← lo/hi shelf filter in frequency domain
       │
       ▼
SpectrumEngine        ← @Observable, holds display state
   │   │   │
   │   │   └── RecordingSession  ← WAV capture, metadata, peak/RMS/click stats
   │   └────── Overlays (average, max-hold, waterfall, sliding peak decay)
   └────────── SwiftUI views (live binding via @Observable)
```

### Storage Layer
```
SwiftData (on-device)
  └── Recording           ← persistent sessions with FFT magnitudes

iCloud Documents        ← WAV files + PNG snapshots sync automatically
UserDefaults            ← noise calibration profile, display preferences
```

### Dependency summary
- **No third-party packages** — pure Apple SDK
- **No network requests** — fully offline; iCloud sync is transparent to the app layer

---

## 5. Navigation & Layout

### iPhone layout
Three-tab bottom navigation bar styled as mechanical keyboard keycaps:

| Tab | Keycap colour | Glyph | Content |
|-----|--------------|-------|---------|
| Library | Teal | Yin-yang symbol in the Default theme; themed alternates elsewhere | `LibraryView` |
| Frequency Monitor (centre, elevated) | Amber | Mini equaliser bars | `SpectrumView` |
| Settings | Red | Slider tracks | `SettingsView` |

### iPad layout
`NavigationSplitView` (.balanced style) with a persistent sidebar:
- **Sidebar sections:** Clackalyzer (Spectrum, Library) · App (Settings)
- **Detail pane:** swaps content without a tab bar

### Orientation handling
All views support portrait and landscape. `SpectrumView` reconfigures its layout automatically:
- **Portrait:** stacked header → chart card (55% height) → controls panel
- **Landscape:** side-by-side — header bar → full-width chart (58% height) → controls strip beneath

---

## 6. Feature Specifications

### 6.1 Live Spectrum Analyzer

**Screen:** `SpectrumView` (primary tab)

#### Header bar
- App logotype: **Clack** (bold) + **alyzer** (ultra-light teal)
- Subtitle: `MECHANICAL KEYBOARD SOUND ANALYZER`
- Recording status: elapsed time + session name shown when recording
- Live/Idle indicator pill (red dot + "LIVE" label)
- **Calibrate** button → opens `CalibrationSheet` to record a new noise profile
- **Noise profile button** (appears only when a profile has been recorded) — shows `−X.X dB` reduction when active; tapping toggles the profile on/off without re-calibrating

#### Spectrum chart card (`SpectrumChartCard`)
| Element | Detail |
|---------|--------|
| dB axis | Labelled in 10 dB steps from 0 down to –dBRange |
| Frequency axis | Log-scale 20 Hz–20 kHz; 21 labelled markers |
| Display modes | **Bars** (420 logarithmically-spaced bars) · **Line** (filled area curve) |
| Held-peak overlay | Amber spike + cap line above live bar |
| Peak decay animation | When peak hold expires, cap lines slide downward at constant 0.28 canvas-heights/s, fully opaque until the bottom 12% of the canvas where they fade out and exit cleanly |
| Average curve | EMA trail in amber (α = 0.05, ~20-frame constant) |
| Max-hold trace | White cumulative maximum line |
| Waterfall | 300×150 px spectrogram below chart, scrolls upward each frame |
| Cursor readout | Drag to show Hz + dBFS tooltip at any frequency |
| Pinch zoom | Compresses/expands visible frequency range |
| Double-tap | Resets zoom and releases peak hold |
| Action buttons | Graph settings overlay · Filter · Snapshot · Fullscreen |
| Fullscreen mode | `FullScreenSpectrumView` — tap to engage peak hold, drag for cursor |
| Graph settings overlay | Top-left info button toggles FFT, sample rate, view range, filter, display mode, smoothing, average, waterfall, hold, and slope readouts without covering the fullscreen button |

#### Controls panel (`ControlsPanel`)

**Recording window (always visible)**
- Record button (large) — opens session config on first tap; stops and saves on second tap
- Session name / elapsed timer / recording status
- Snapshot button (camera icon)
- Live / Idle status badge
- Live metrics row (recording only): Peak dBFS · RMS dBFS · Freq Peak · Click ms

**Graph View Options card (collapseable)**
Tapping the header expands/collapses with an animated chevron. Contains:

| Control | Description |
|---------|-------------|
| Average curve | Toggle — shows or hides the EMA average trace |
| Max hold trace | Toggle + reset button — shows or hides cumulative max; reset clears both max-hold and average |
| Peak hold | Toggle + inline time picker: Off · 1s · 5s · 10s · 15s · ∞ |
| Freq filter | Enable toggle with lo/hi summary; when enabled expands to show low-cut slider, high-cut slider (both update the graph in real time), preset buttons (Full Spectrum · 500 Hz & Up), and slope picker (12 / 24 / 48 dB/oct) |

#### Spectrum snapshot
- Tapping the snapshot button immediately **freezes all engine state** (magnitudes, peaks, hold flags, filter state, session metadata) into a `FrozenSnapshot` before presenting the naming dialog — the live graph continues running but the image is already captured
- Prompts for an optional screenshot name before rendering
- Renders 1400×800 px `SpectrumSnapshotView` from the frozen data — guaranteed to reflect the moment the button was pressed, not the moment the user dismissed the dialog
- Snapshot fully respects active frequency filter — x-axis is clipped to `[loHz, hiHz]`, all magnitude arrays have filter gain applied, out-of-band peaks are excluded
- Draws the screenshot name centered at the bottom of the graph area when supplied
- Saves PNG to Photos library
- If recording is active, also persists snapshot alongside recording in Documents

#### Easter egg
A horizontal swipe (left or right) anywhere in the empty zone between the Graph View Options card and the bottom navigation bar randomly cycles the app's visual theme and triggers a light haptic. No UI hint is shown.

---

### 6.2 Recording & Session Management

**Trigger:** Tap the Record button → `SessionConfigSheet`

#### Session config fields
| Field | Type | Notes |
|-------|------|-------|
| Session name | Text | Required for file naming |
| Board / keyboard | Text | e.g. "KBD67 Lite" |
| Plate material | Text | e.g. "Polycarbonate" |
| Switch | Text | e.g. "Gateron Yellow" |
| Foams | Multi-select chips | Case / PCB / Tape mod |
| Mic distance | Text | Default "20 cm" |
| Notes | Multi-line | Free text |
| Primary photo | Photo picker / camera | Stored as PNG in Documents |
| Calibrate first | Toggle | Shows `CalibrationSheet` before recording starts |
| Frequency filter | Preview in session sheet | Opens `FrequencyFilterSheet` inline |

The live input engine listens for audio session interruptions and route changes, then recovers the microphone tap after dictation, voice-to-text, or input device changes.

#### What is captured during recording
- **WAV file** — 32-bit float, mono, at configured sample rate (Documents folder)
- **Peak dBFS** — maximum instantaneous magnitude
- **RMS dBFS** — running average energy
- **Click ms** — time to first transient above 0.15 magnitude rise
- **Freq peak Hz** — most prominent frequency bin across recording
- **FFT magnitude array** — averaged per-bin magnitudes (serialised as `Data` in SwiftData)
- **Spectrum snapshots** — user-triggered PNGs saved during recording

#### Session state machine
```
idle ──[Tap Record]──▶ armed ──[Config confirmed]──▶ recording ──[Tap Stop]──▶ saving ──▶ idle
                                                                                 └──▶ SwiftData insert
                                                                                 └──▶ iCloud sync
```

---

### 6.3 Recording Library

**Screen:** `LibraryView`

#### Recording list
- Each row (`RecordingRow`) shows:
  - Session name + date
  - Switch name + board config
  - Peak dBFS · RMS dBFS · Freq peak · Click ms
  - Primary photo thumbnail (if set)
  - Foams / notes badge

#### Search & sort
| Control | Options |
|---------|---------|
| Search bar | Searches name + notes |
| Sort | Date (newest first) · Name · Peak level · File size |

#### Playback (`FullScreenWaveformView`)
- Waveform canvas (600-sample downsampled view)
- Play / pause toggle
- Loop toggle (seamless looping via `AVAudioPlayerNode`)
- Animated playhead
- Live metrics readout while playing

#### Recording actions
- **Share WAV** — shares the raw capture file
- **Share M4A** — converts and shares compressed version
- **Edit metadata** — `EditRecordingSheet` for all session fields + photo management
- **Delete** — removes SwiftData record + Documents files (with confirmation)

#### Screenshot gallery
Each session row exposes a horizontal scroll of its associated PNG snapshots. Tapping a thumbnail opens `FullScreenImagePreview` for paging through the set.

- **Trash section** — appears above the sessions list only when deleted screenshots exist; **collapsed by default** (header-only row)
  - Header: trash icon · "TRASH" label · count badge · info button · expand/collapse chevron
  - Tapping the header expands with animation to show a horizontal scroll of trash items
  - Each trash item shows a **compact placeholder card** (trash icon + days-remaining countdown) — no automatic image preview
  - A themed **Reveal** button below each card opens `FullScreenImagePreview` with the trash image; the preview includes **Restore** and **Delete Forever** action buttons
  - Restored screenshots return to their original session; permanently deleted items are removed from disk immediately
  - Auto-purge after 30 days (shown in the info sheet)

---

### 6.4 Settings

**Screen:** `SettingsView` (organised into cards)

A **Defaults** button in the header resets all settings to the keyboard-optimised values described below. A confirmation dialog reads "Press OK to return to suggested settings" before applying.

#### Audio Input
| Setting | Options |
|---------|---------|
| Input device | Picker showing all available AVAudioSession ports (built-in mic, headset, USB, Bluetooth) |

#### Audio
| Setting | Default | Options |
|---------|---------|---------|
| Sample rate | 48 kHz | 44.1 · 48 · 96 · 192 kHz |
| Bit depth | 24-bit | 16 · 24 · 32-bit |

#### Analysis
| Setting | Default | Options |
|---------|---------|---------|
| FFT size | 16384 | 1024 · 2048 · 4096 · 8192 · 16384 |
| Auto-normalize | Off | On / Off |

#### Display
| Setting | Default | Options |
|---------|---------|---------|
| Min frequency | 20 Hz | Text input |
| Max frequency | 20 000 Hz | Text input |

#### Spectrum Display
| Setting | Default | Options |
|---------|---------|---------|
| Display mode | Line | Bars · Line |
| dB range | 73 dB | 60 · 73 · 80 · 90 · 100 dB |
| Bin smoothing | Off | Off · Fine · Medium · Broad |
| Waterfall | Off | On / Off |
| Graph settings overlay | Off | On / Off |

> Average curve, max hold trace, peak hold, and frequency filter are controlled exclusively from the **Graph View Options** card in the spectrum view and are not duplicated in Settings.

#### Noise Calibration card
- Status badge: `Active` (teal) / `Bypassed` / `Not Set` (grey)
- **Calibrate** → `CalibrationSheet`
- **Clear Profile** → removes saved profile

#### Appearance
| Setting | Default | Options |
|---------|---------|---------|
| Theme | Default | Default · Dark · Light · Beige · Neon; menu shows a checkmark beside the selected theme |
| Colour scheme | System | System · Light · Dark |

#### Storage
- Recording count
- **Clear All Recordings** (confirmation required)

#### About
- App name · Version · Developer · Studio · Build · Bundle ID

---

### 6.5 Noise Calibration

**Sheet:** `CalibrationSheet`

#### Workflow
```
Ready ──[Tap Start]──▶ Sampling (5 seconds) ──[Auto-complete]──▶ Done ──[Auto-dismiss 1.5s]──▶ closed
                              │
                          [Tap Cancel] ──▶ dismiss (profile unchanged)
```

#### Algorithm (inside `NoiseCalibrator`)
1. Install audio tap; accumulate FFT magnitude frames for 5 seconds
2. Compute per-bin minimum across all frames (robust noise floor estimate)
3. Where minimum stayed at `Float.infinity`, fall back to frame-mean
4. Apply 3-tap smoothing: `[0.25, 0.5, 0.25]` per bin
5. Persist profile + bin count to `UserDefaults`
6. On next audio frame: `subtract(from:)` removes the saved per-bin floor while preserving a small residual floor
7. Publish live reduction in dB so the active profile button in the header can show how much signal was reduced

Profiles can be enabled or bypassed without deleting calibration data. Profile data is invalidated automatically when FFT size changes.

---

### 6.6 Frequency Filter

**Inline controls:** Live sliders and preset buttons in the **Graph View Options** card (no separate sheet required for normal use). A full `FrequencyFilterSheet` with a draggable spectrum preview remains accessible via the filter button on the chart card overlay.

#### Inline controls (Graph View Options card)
- Enable / disable toggle with current lo–hi summary (`200 Hz – 8 kHz`)
- Low cut slider (real-time graph update)
- High cut slider (real-time graph update)
- Preset buttons
- Slope picker: 12 / 24 / 48 dB/octave

#### Full sheet (`FrequencyFilterSheet`)
- **Two draggable handles** on a live spectrum preview (lo cut, hi cut)
- Fine-tune sliders for both cut points
- Slope selector: 12 / 24 / 48 dB/octave
- Enable / disable toggle
- Bandwidth readout in octaves

#### Presets
| Preset | Lo | Hi | Note |
|--------|----|----|------|
| Full Spectrum | 20 Hz | 20 kHz | — |
| 500 Hz & Up | 500 Hz | 20 kHz | Cuts low-frequency rumble |

#### Keyboard-optimised default
| Setting | Value | Rationale |
|---------|-------|-----------|
| Enabled | Yes | Active by default |
| Low cut | 200 Hz | Removes room rumble, HVAC, and foot traffic; all key sounds are above 200 Hz |
| High cut | 8 000 Hz | Captures all meaningful switch content (click, spring ping, stabiliser rattle) while rejecting irrelevant HF noise |
| Slope | 24 dB/oct | Good roll-off without excessive phase artefacts |

---

## 7. Audio Processing Pipeline

### FFT Processing (`FFTProcessor`)

```
AVAudioPCMBuffer (hardware format, ~4096 frame buffers)
        │
        ▼
Circular ring buffer (size = active FFT size, max 16384)
        │ write new samples; advance ringPos % n
        ▼
Hop trigger: newSamples ≥ n/8  (8× overlap)
        │
        ▼
Linearise ring → scratch[0…n-1]  (reorder oldest→newest)
        │
        ▼
Hann window × scratch   (vDSP_vmul)
        │
        ▼
Deinterleave → realp[0…n/2-1], imagp[0…n/2-1]
        │  (pack N real samples as N/2 complex for real-to-complex DFT)
        ▼
vDSP_DFT_Execute (FORWARD, N/2-point)
        │
        ▼
vDSP_zvabs → magnitudes[0…n/2-1]
        │
        ▼
Scale by 2/n  →  return magnitudes[0 …< n/2]
```

**Supported FFT sizes:** 1024 / 2048 / 4096 / 8192 / 16384 (default 16384)
**Frequency resolution:** `Fs / N`  (e.g. 48000 / 16384 ≈ 2.93 Hz/bin)
**Bin count:** `N/2`  (e.g. 8192 bins at FFT size 16384)
**Overlap:** 8× (hop = N/8, capped at 256 samples)

### Spectrum Display Pipeline

```
mags (FFT output)
  │
  ├── NoiseCalibrator.subtract()     per-bin floor removal
  ├── FrequencyFilter.applyFilter()  frequency-domain shelf gain
  ├── applyBinSmoothing()            optional log-domain bin averaging
  ├── Fast-attack / slow-decay       per-bin temporal envelope
  │     attack coeff 0.92, decay 0.35
  │
  ├── [main thread]
  │     magnitudes =  smoothed array (drives bar/line render)
  │     updateSecondaryDisplays():
  │       ├── averageMagnitudes  EMA α=0.05
  │       ├── maxHoldMagnitudes  cumulative max per bin
  │       └── waterfall pixel buffer  (300×150 RGBA, scrolling)
  │
  └── detect()  spectral peak detection
        threshold 0.15, window ±5 bins, min separation 80 Hz
        → up to 6 labeled peaks
```

### Recording Audio Path

```
AVAudioEngine tap (bufferSize 128)
        │
        ├── AVAudioFile.write()  async on write queue (WAV, 32-bit float)
        ├── peakDBFS tracking    max(abs(samples))
        ├── RMS accumulation     √(mean(samples²)) per buffer, running average
        ├── Click detection      rise > 0.15 in 2-frame delta → record ms
        └── FFT magnitude accum  per-frame average → stored in Recording.fftMagnitudes
```

---

## 8. Data Models

### `Recording` (SwiftData `@Model`)
| Property | Type | Description |
|----------|------|-------------|
| `id` | UUID | Primary key |
| `name` | String | Session label |
| `boardConfig` | String | Keyboard / case name |
| `plate` | String | Plate material |
| `switchName` | String | Switch model |
| `foams` | String | Comma-separated foam list |
| `notes` | String | Free text |
| `micDistance` | String | e.g. "20 cm" |
| `recordedAt` | Date | Capture timestamp |
| `wavFileName` | String | Filename in Documents |
| `peakDBFS` | Float | Peak level during recording |
| `rmsDBFS` | Float | Average RMS level |
| `clickMs` | Float | Time to first transient (ms) |
| `freqPeakHz` | Float | Dominant frequency |
| `loHz` | Float | Filter lo-cut at capture time |
| `hiHz` | Float | Filter hi-cut at capture time |
| `slopeDBoct` | Int | Filter slope at capture time |
| `fftMagnitudes` | Data | Serialised `[Float]` average spectrum |
| `primaryPhotoFileName` | String | PNG in Documents |
| `snapshotFileNames` | String | JSON-encoded PNG filename list, with legacy comma-separated fallback |

### `SpectrumEngine` (in-memory `@Observable`)
- Live FFT output, display overlays, peak-hold state, sliding peak decay state
- Display configuration mirrored from AppStorage on `onAppear`
- Single instance owned by `ContentView`, passed to `SpectrumView` + `SettingsView`

### `NoiseCalibrator` (in-memory `@Observable`, profile in UserDefaults)
- Keys: `ck.noiseCalibProfile` (raw Float bytes), `ck.noiseCalibBinCount` (Int), `ck.noiseCalibEnabled` (Bool)
- Runtime state tracks whether a profile exists, whether it is enabled, and the latest applied reduction in dB

---

## 9. Visual Design System

### Colour palette — Default

| Token | Hex | Usage |
|-------|-----|-------|
| `ckNavy` | `#000000` | App background, nav bar |
| `ckCardBg` | `#09090A` | Card / sheet background |
| `ckTeal` | `#F51713` | Primary action, labels, spectrum bars |
| `ckAmber` | `#FFFFFF` | Secondary, peak markers, waterfall |
| `ckRed` | `#F51713` | Destructive, recording indicator |
| `ckText` | `#FFFFFF` | Primary text |
| `ckGrid` | `#6B6B73` | Secondary text, grid lines |

Default theme uses a black UI base with white text and red graph/control accents.

### Alternate themes
| Theme | Background | Primary | Secondary | Character |
|-------|-----------|---------|-----------|-----------|
| **Default** | Black `#000000` | Red | White | Classic spectrum analyzer |
| **Dark** | Navy `#0D1B2A` | Teal | Amber | Dark pro studio |
| **Light** | Beige `#E2E2DC` | Orange-red | Grey | Bright / outdoor |
| **Beige** | Warm brown `#413C32` | Sage green | Dusty rose | Earthy retro |
| **Neon** | Deep purple `#0A071E` | Electric cyan | Hot magenta | Synthwave / RGB keyboard |

### Typography
- System font throughout (San Francisco)
- Monospaced for all numerical readouts (`design: .monospaced`)
- App logotype: `Text("Clack")` bold + `Text("alyzer")` ultraLight teal

### Navigation metaphor
Custom `MetropolisKeycap` canvas — each tab button renders as a keycap with:
- Drop shadow (offset y+8%)
- Key body fill at 55% opacity (unselected) or 100% (selected)
- Top-edge rim highlight
- Symbol cutout (SVG-style Canvas path)
- Default theme library tab uses a **yin-yang glyph**: layered Canvas fills — white base circle, themed half-circle overlay, two small semicircle fills, and two eye dots — rendered in white and the theme's cap color so the "dark" half blends with the keycap surface

---

## 10. Permissions & Privacy

| Permission | Purpose | Prompt text |
|-----------|---------|-------------|
| `NSMicrophoneUsageDescription` | Live analysis and recording | "Clackalyzer needs microphone access to analyze your keyboard sounds." |
| `NSCameraUsageDescription` | Session photo capture | "Clackalyzer uses the camera to add photos to your recordings." |
| `NSPhotoLibraryAddUsageDescription` | Save spectrum snapshots | "Clackalyzer saves spectrum snapshots to your photo library." |
| `NSPhotoLibraryUsageDescription` | Attach existing photos | "Clackalyzer reads photos you choose to attach to your recordings." |

**No network access.** No analytics. No advertising identifiers. No user accounts required.

---

## 11. Storage & Sync

| Data | Location | Sync |
|------|----------|------|
| SwiftData store (recordings, comparisons) | `~/Library/Application Support` | iCloud CloudDocuments |
| WAV audio files | `~/Documents/` | iCloud Drive |
| PNG snapshot files | `~/Documents/` | iCloud Drive |
| Noise calibration profile | `UserDefaults` | Not synced (device-specific) |
| Display preferences | `UserDefaults` / `AppStorage` | Not synced |
| iCloud container | `iCloud.com.yalltech.Clackalyzer` | CloudDocuments entitlement |

---

## 12. Known Constraints & Future Considerations

### Current constraints
| Area | Constraint |
|------|-----------|
| Recording sync | iCloud sync is enabled by entitlement but no explicit conflict-resolution UI exists |
| Background analysis | App requires foreground to maintain the audio tap (iOS limitation without a full audio session) |
| Simulator | Audio tap not available in simulator; `simTick` synthetic data runs at 30 fps instead |

### Potential future features
- **Export CSV** — per-bin magnitude data for external analysis
- **Frequency band annotations** — mark keyboard-specific resonance bands (case, plate, PCB)
- **Cloud sharing** — share recording bundles (WAV + snapshot + metadata) via link
- **Widget** — live peak dBFS or last-captured spectrum on Lock Screen / Home Screen
- **watchOS companion** — simple level meter on wrist during recording
- **Pitch detection** — identify fundamental note from switch click (relevant for linears with acoustic resonance)

---

*End of Clackalyzer Product Specification v1.4.0*
*YallTech Studios — support@clackalyzer.com*
