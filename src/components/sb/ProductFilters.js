import { storyblokEditable } from "@storyblok/react/rsc";

export default function ProductFilters({ blok }) {
  const categories = blok.categories || [
    { name: "Sweaters", active: true },
    { name: "Tops", active: false },
    { name: "Jackets", active: false },
    { name: "Hats", active: false }
  ];

  return (
    <div 
      {...storyblokEditable(blok)}
      className="w-full  py-4 mb-8"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-4 justify-start">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 text-sm font-medium transition-colors rounded-none ${
                category.active
                  ? 'bg-black text-white'
                  : 'bg-white text-black border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
