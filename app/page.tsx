import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-2xl md:text-3xl text-ck-grid mb-8">
          Clack, Clack, Thocc, <em>Analyze.</em>
        </p>
        <Image
          src="/images/IMG_2096.png"
          alt="Clackalyzer screenshot"
          width={400}
          height={800}
          className="mx-auto rounded-xl mb-8"
        />
        <p className="text-xl text-ck-grid/60">Coming Soon.</p>
      </div>
    </div>
  )
}
