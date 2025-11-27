export const metadata = {
  title: 'Contact | A Square Digital Marketing',
  description: 'Contact A Square Digital Marketing for SEO, PPC & Performance Marketing services.'
};

export default function Contact() {
  return (
    <div className="container py-14">
      <h1 className="text-4xl font-bold text-[#0A66FF]">Contact Us</h1>
      <p className="mt-3 text-gray-600">Ready to scale? Message us on WhatsApp or send an email.</p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold">Get in touch</h3>
          <p className="text-gray-600 mt-2">WhatsApp: +91 9865310319</p>
          <p className="text-gray-600">Email: hello@asquaredigitalmkt.com</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold">Send a message</h3>
          <form className="mt-4 space-y-3">
            <input className="w-full p-3 border rounded" placeholder="Your name" />
            <input className="w-full p-3 border rounded" placeholder="Email" />
            <input className="w-full p-3 border rounded" placeholder="Phone (WhatsApp)" />
            <textarea className="w-full p-3 border rounded" rows="4" placeholder="Tell us about your project"></textarea>
            <button type="button" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
