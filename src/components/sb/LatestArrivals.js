import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

export default function LatestArrivals({ blok }) {
  return (
    <main
      {...storyblokEditable(blok)}
      className="w-full h-full flex flex-col bg-[#EFF2F6] justify-center items-center"
    >
      <h1 className="text-5xl font-bold mb-4">{blok.title}</h1>
      <p className="text-lg sm:text-xl text-center max-w-2xl mb-6">{blok.description}</p>
      <button className="border border-gray-800 rounded-md px-6 py-3 text-lg font-medium hover:bg-gray-200 transition">
        {blok.button_text}
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 w-full max-w-6xl mx-auto">
        <div className="relative rounded-md overflow-hidden shadow-md aspect-[368/521] transition-transform duration-300 hover:scale-105">
            <Image
            src={blok.image_1.filename}
            alt="panel 1"
            fill
            className="object-cover"
            />
        </div>

    <div className="relative rounded-md overflow-hidden shadow-md aspect-[368/521] -translate-y-6 transition-transform duration-300 hover:scale-105">
        <Image
        src={blok.image_2.filename}
        alt="panel 2"
        fill
        className="object-cover"
        />
    </div>

    <div className="relative rounded-md overflow-hidden shadow-md aspect-[368/521] transition-transform duration-300 hover:scale-105">
        <Image
        src={blok.image_3.filename}
        alt="panel 3"
        fill
        className="object-cover"
        />
    </div>
</div>

    </main>
  );
}