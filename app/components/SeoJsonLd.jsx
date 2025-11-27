export default function SeoJsonLd({ data }) {
  // data is raw JSON-LD object or array
  const json = JSON.stringify(data);
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}
