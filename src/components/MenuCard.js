export default function MenuCard({ name, desc, price }) {
  const handleClick = () => {
    const phoneNumber = "919010170365"; // ✅ replace with your WhatsApp number (without +)
    const message = `I want to order ${name}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); // opens WhatsApp in new tab
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white p-4 rounded-xl shadow-md flex justify-between items-start cursor-pointer hover:shadow-lg transition"
    >
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-500 text-sm">{desc}</p>
      </div>
      <span className="text-orange-500 font-semibold">₹ {price}</span>
    </div>
  );
}
