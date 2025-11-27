import Link from 'next/link';

export default function CaseStudyCard({ title, summary, img, slug }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
      <img src={img} alt={title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{summary}</p>
        <div className="mt-4">
          <Link href={`/case-studies/${slug}`}><a className="text-primary font-semibold">View Case Study →</a></Link>
        </div>
      </div>
    </div>
  );
}
