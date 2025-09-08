import { storyblokEditable } from "@storyblok/react/rsc";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import Image from "next/image";

export default async function ProductGrid({ blok }) {
  // Fetch products from Supabase
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .limit(8);

  if (error) {
    console.error('Error fetching products:', error);
    return <div>Error loading products</div>;
  }

  return (
    <section 
      {...storyblokEditable(blok)}
      className="w-full bg-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <p className="text-sm font-semibold">${product.price || "99"}</p>
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
