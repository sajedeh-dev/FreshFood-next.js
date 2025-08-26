// components/MenuSection.jsx
import Image from "next/image";
import Link from "next/link";

export default function MenuSection() {
  return (
    <div className="max-w-6xl mx-auto flex gap-8 py-10">
      {/* Sidebar - Categories */}
      <aside className="w-1/4 flex flex-col gap-4">
        <button className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-red-100">
          🍔 <span>Burger</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-2 rounded-full bg-red-500 text-white">
          🍕 <span>Pizza</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-red-100">
          🧁 <span>Cupcake</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-red-100">
          🍜 <span>Ramen</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-red-100">
          🍦 <span>Ice Cream</span>
        </button>
      </aside>

      {/* Main Content */}
      <section className="w-3/4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold leading-snug">
            Menu That Always <br /> Makes You Fall In Love
          </h2>

          <div className="flex gap-3">
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
              ⬅
            </button>
            <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600">
              ➡
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <Image
              src="/images/pizza.jpg"
              alt="Italian Pizza"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Italian Pizza</h3>
              <p className="text-yellow-600 font-bold text-xl">$7.49</p>
              <Link
                href="/order"
                className="mt-3 inline-block text-sm text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Order Now →
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <Image
              src="/images/pasta.jpg"
              alt="Sausage Pizza"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Sausage Pizza</h3>
              <p className="text-yellow-600 font-bold text-xl">$6.59</p>
              <Link
                href="/order"
                className="mt-3 inline-block text-sm text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Order Now →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
