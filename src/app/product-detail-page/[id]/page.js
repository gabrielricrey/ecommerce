import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

export default async function ProductDetailPage({ params }) {
  let { id } = await params;
  id = Number(id);

  const { data: product, error } = await supabase
    .rpc("get_product_detail", { p_id: id })
    .single();

  if (error || !product) {
    return (
      <section className="h-[100vh] bg-[#EFF2F6] flex justify-center items-center">
        <h1>Product not found</h1>
      </section>);
  }


  return (
    <section className="h-[100vh] bg-[#EFF2F6] flex justify-center items-center">
      <div className="flex flex-col items-center md:flex-row w-full md:items-start">
        <div className="relative flex-1 flex items-center justify-center h-[500px] overflow-hidden rounded-md">
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="flex-1 flex flex-col h-[400px]">
          <div className="mx-5">
            <h2 className="text-4xl font-bold mb-2">{product.name}</h2>
            <p className="mb-5">€{product.price}</p>
            <p className="mb-2">{product.description}</p>
          </div>
          <div className="mt-auto mx-5">
            <div className="mb-2">
              <p className="text-gray-500 mb-2">Color</p>
              <div className="flex gap-1">
                {product.colors.map((color, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-1 cursor-pointer"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="mb-5">
              <p className="text-gray-500 mb-2">Size</p>
              <div className="flex gap-1">
                {product.sizes.map((size, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 border-1 cursor-not-allowed hover:bg-white flex justify-center items-center"
                  >
                    {size.toUpperCase()}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <a className="underline text-sm mb-2">Size & fit guide</a>
              <p className="text-sm text-gray-500">Height of model: </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
