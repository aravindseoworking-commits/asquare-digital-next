import CaseStudyCard from '@/components/CaseStudyCard';

export default function Portfolio() {
  const projects = [
    { title: 'BrandX e-commerce', summary: 'SEO + CRO for marketplace', img: '/banner.webp', slug: 'brandx-ecom' },
    { title: 'RetailCo Ads', summary: 'PPC + Remarketing', img: '/banner.webp', slug: 'retailco-ads' },
    { title: 'ShopNow Funnel', summary: 'Full-funnel performance', img: '/banner.webp', slug: 'shopnow-funnel' },
  ];

  return (
    <div className="container py-14">
      <h1 className="text-4xl font-bold text-[#0A66FF]">Portfolio</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {projects.map(p => <CaseStudyCard key={p.slug} {...p} />)}
      </div>
    </div>
  );
}
