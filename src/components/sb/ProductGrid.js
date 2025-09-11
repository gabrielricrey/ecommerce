import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import Image from "next/image";

export default async function ProductGrid({ category = null, limit = 12 }) {
  // Build query based on category filter
  let query = supabase
    .from('products')
    .select('*')
    .limit(limit);

  // Add category filter if specified
  if (category) {
    // Try different possible field names for category
    query = query.eq('category_id', category);
  }

  const { data: products, error } = await query;

  if (error) {
    console.error('Error fetching products:', error);
    return <div>Error loading products: {error.message}</div>;
  }


  if (!products || products.length === 0) {
    return (
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p>No products found</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-12">
          {products?.map((product) => (
            <Link 
              key={product.id} 
              href={`/product-detail-page/${product.id}`}
              className="group cursor-pointer"
            >
              <div className="relative bg-gray-200 aspect-square mb-3 overflow-hidden">
                <Image
                  src={product.image_url || '/placeholder-product.jpg'}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-sm mb-1">{product.name || "Men's Winter Jacket"}</h3>
                  <p className="text-sm font-semibold">€{product.price || "99"}</p>
                </div>
                <span className="text-xs text-gray-500 mt-1">M</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
