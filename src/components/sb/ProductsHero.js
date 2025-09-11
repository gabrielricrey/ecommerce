export default function ProductsHero({ title, description }) {
  return (
    <section className="w-full py-8 pt-28">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">
          {title || "See our products"}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl text-left mb-8">
          {description || "Revamp your style with the latest designer trends in clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces."}
        </p>
      </div>
    </section>
  );
}
