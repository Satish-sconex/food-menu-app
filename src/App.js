import { useState } from "react";
import Categories from "./components/Categories";
import MenuList from "./components/MenuList";
import menuData from "./data/menuData";

function App() {
  const categories = ["All", ...new Set(menuData.map(i => i.category))];
  const [selected, setSelected] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = menuData.filter(item =>
    (selected === "All" || item.category === selected) &&
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div 
        className="py-10 text-center bg-cover bg-center" 
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <img src="/Logo.png" alt="Logo" className="mx-auto h-20 mb-4" />
        <div className="mt-4 flex justify-center">
          <input
            type="text"
            placeholder="Search for a dish..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-96 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="p-4">
        <Categories 
          categories={categories} 
          selected={selected} 
          setSelected={setSelected} 
        />
        <MenuList items={filtered} />
      </div>
    </div>
  );
}

export default App;
