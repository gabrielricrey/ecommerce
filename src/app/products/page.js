import ProductFilters from "@/components/sb/ProductFilters";
import ProductGrid from "@/components/sb/ProductGrid";
import ProductsHero from "@/components/sb/ProductsHero";

/**
 * Products page - renders products with filters from database
 * @returns {Promise<JSX.Element>}
 */
export default async function Products({ searchParams }) {
  const selectedCategory = searchParams?.category || null;

  return (
    <div className="page bg-[#EFF2F6] min-h-screen">
      <ProductsHero 
        title="See our products"
        description="Revamp your style with the latest designer trends in clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces."
      />
      <ProductFilters selectedCategory={selectedCategory} />
      <ProductGrid category={selectedCategory} />
    </div>
  );
}