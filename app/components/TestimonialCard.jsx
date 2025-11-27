export default function TestimonialCard({ name, role, text, avatar }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <p className="text-gray-700">“{text}”</p>
      <div className="flex items-center gap-3 mt-4">
        <img src={avatar || '/logo.png'} alt={name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </div>
    </div>
  );
}
