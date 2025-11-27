import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white/60 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/">
          <a className="flex items-center gap-3">
            <Image src="/logo.png" alt="A Square Digital Marketing" width={46} height={46} />
            <div>
              <div className="text-lg font-bold text-[#0A66FF]">A Square</div>
              <div className="text-xs -mt-1">Digital Marketing</div>
            </div>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/"><a>Home</a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/services"><a>Services</a></Link>
          <Link href="/portfolio"><a>Portfolio</a></Link>
          <Link href="/case-studies"><a>Case Studies</a></Link>
          <Link href="/contact"><a className="btn-primary">Contact</a></Link>
        </div>

        {/* Mobile menu (simple) */}
        <div className="md:hidden">
          <Link href="/contact"><a className="btn-primary text-sm">Contact</a></Link>
        </div>
      </div>
    </nav>
  );
}
