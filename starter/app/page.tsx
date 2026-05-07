type Item = {
  id: number;
  name: string;
  category: string;
  price: number;
  in_stock: boolean;
};

const mockItems: Item[] = [
  { id: 1, name: "Fernwood Sectional", category: "Seating", price: 2499, in_stock: true },
  { id: 2, name: "Knotted Oak Coffee Table", category: "Tables", price: 849, in_stock: true },
  { id: 3, name: "Garrison Bookshelf", category: "Storage", price: 629, in_stock: false },
  { id: 4, name: "The Long Table", category: "Tables", price: 1199, in_stock: true },
  { id: 5, name: "Pivot Desk Chair", category: "Seating", price: 449, in_stock: true },
  { id: 6, name: "Ember Side Table", category: "Tables", price: 299, in_stock: true },
  { id: 7, name: "Stacked Nightstand", category: "Storage", price: 389, in_stock: false },
  { id: 8, name: "Canvas Floor Lamp", category: "Lighting", price: 219, in_stock: true },
];

export default function Home() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-8">All Furniture</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-stone-200 rounded-lg p-6"
          >
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">
              {item.category}
            </p>
            <h3 className="text-lg font-medium mb-3">{item.name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">
                ${item.price.toLocaleString()}
              </span>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  item.in_stock
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-stone-100 text-stone-400"
                }`}
              >
                {item.in_stock ? "In stock" : "Out of stock"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
