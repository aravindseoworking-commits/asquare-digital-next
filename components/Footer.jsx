import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white mt-16 border-t">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-[#0A66FF]">A Square Digital Marketing</h3>
          <p className="mt-2 text-gray-600">Result-driven SEO, PPC and performance marketing agency.</p>
        </div>

        <div>
          <h4 className="font-semibold">Services</h4>
          <ul className="mt-2 text-gray-600 space-y-1">
            <li><Link href="/services">SEO</Link></li>
            <li><Link href="/services">PPC</Link></li>
            <li><Link href="/services">Lead Gen</Link></li>
            <li><Link href="/services">Performance Marketing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-2 text-gray-600">WhatsApp: +91 9865310319</p>
          <p className="text-gray-600">Email: hello@asquaredigitalmkt.com</p>
          <div className="flex items-center gap-3 mt-3">
            <Link href="#"><a aria-label="LinkedIn" className="text-gray-600">LinkedIn</a></Link>
            <Link href="#"><a aria-label="Instagram" className="text-gray-600">Instagram</a></Link>
            <Link href="#"><a aria-label="Facebook" className="text-gray-600">Facebook</a></Link>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 text-sm text-gray-500">© {new Date().getFullYear()} A Square Digital Marketing. All rights reserved.</div>
      </div>
    </footer>
  );
}
