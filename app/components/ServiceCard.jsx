export default function ServiceCard({ title, img, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#f0f6ff] mb-4">
        <img src={img} alt={title} className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
