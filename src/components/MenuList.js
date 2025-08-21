import MenuCard from "./MenuCard";

export default function MenuList({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {items.map(item => (
        <MenuCard key={item.id} {...item} />
      ))}
    </div>
  );
}
