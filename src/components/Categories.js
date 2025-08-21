export default function Categories({ categories, selected, setSelected }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
            selected === cat ? "bg-orange-500 text-white" : "bg-gray-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
