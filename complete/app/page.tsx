type Item = {
  id: number;
  name: string;
  category: string;
  price: number;
  in_stock: boolean;
};

async function getItems(): Promise<Item[]> {
  const base = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
  const res = await fetch(`${base}/api/items`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch items from Hazel Home API");
  return res.json();
}

export default async function Home() {
  const items = await getItems();

  return (
    <>
      <h2 className="text-2xl font-semibold mb-8">All Furniture</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
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
