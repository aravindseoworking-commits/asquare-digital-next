import TestimonialCard from '@/components/TestimonialCard';
export default function Testimonials() {
  const reviews = [
    { name: 'Rahul Kumar', role: 'Founder, BrandX', text: 'Great results in a short time — highly recommend.' },
    { name: 'Sangeetha', role: 'Marketing Head, RetailCo', text: 'Professional, fast and attentive.' },
    { name: 'Mark', role: 'CEO, ShopNow', text: 'Our lead quality improved drastically.' },
  ];

  return (
    <div className="container py-14">
      <h1 className="text-4xl font-bold text-[#0A66FF]">Testimonials</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {reviews.map((r,i) => <TestimonialCard key={i} {...r} />)}
      </div>
    </div>
  );
}
