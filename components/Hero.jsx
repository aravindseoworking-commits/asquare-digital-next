import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-white py-14">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A66FF] leading-tight">
            Grow with <span className="text-black">A Square Digital Marketing</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Result-driven SEO, PPC, Lead Generation and Performance Marketing that scales your business.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="/contact" className="btn-primary">Get Free Consultation</a>
            <a href="/case-studies" className="px-4 py-2 rounded-md border">View Case Studies</a>
          </div>
        </div>

        <div className="relative">
          <Image src="/banner.webp" alt="A Square Digital Marketing" width={1200} height={450} className="rounded-xl shadow-lg" priority />
        </div>
      </div>
    </section>
  );
}
