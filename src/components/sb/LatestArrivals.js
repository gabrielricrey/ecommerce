import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default async function LatestArrivals({ blok }) {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  if (error) {
    console.error("Error fetching products:", error);
    return <p>Failed to load products</p>;
  }

  return (
    <main
      {...storyblokEditable(blok)}
      className="w-full h-full flex flex-col bg-[#EFF2F6] justify-center items-center"
    >
      <h1 className="text-5xl font-bold mb-4">{blok.title}</h1>
      <p className="text-lg sm:text-xl text-center max-w-2xl mb-6">
        {blok.description}
      </p>

      <Link
        href={`/${blok.button_link.cached_url}`}
       className="border border-gray-800 rounded-md px-6 py-3 text-lg font-medium hover:bg-gray-200 transition">
        {blok.button_text}
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 mb-12 w-full max-w-6xl mx-auto">
        {products.map((product, index) => (
          <Link
            key={product.id}
            href={`/product-detail-page/${product.id}`}
            className={`relative rounded-md overflow-hidden shadow-md aspect-[368/521] transition-transform duration-300 hover:scale-105 ${
              index === 1 ? "-translate-y-9" : ""
            }`}
          >
            <Image
              src={product.image_url}
              alt={product.name}
              fill
              className="object-cover"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
