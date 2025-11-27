import Link from 'next/link';

export default function CaseStudies() {
  const studies = [
    { title: 'E-Commerce SEO Boost', slug: 'ecom-seo', summary: 'Increased organic revenue 180% in 6 months.'},
    { title: 'PPC Lead Gen', slug: 'ppc-leads', summary: 'CPL dropped 45% with better creatives.'},
    { title: 'Performance Funnel', slug: 'performance-funnel', summary: 'Achieved 3x ROAS in 90 days.'}
  ];

  return (
    <div className="container py-14">
      <h1 className="text-4xl font-bold text-[#0A66FF]">Case Studies</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {studies.map(s => (
          <div key={s.slug} className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="text-gray-600 mt-2">{s.summary}</p>
            <div className="mt-4">
              <Link href={`/case-studies/${s.slug}`}><a className="text-primary">Read full case study →</a></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
