import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

export default function Hero({ blok }) {
  return (
    <main
      {...storyblokEditable(blok)}
      className="w-full min-h-screen flex flex-col items-center justify-center bg-[#EFF2F6] px-4 py-12"
    >
      
      <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-center">
        {blok.slogan}
      </h1>

      <p className="text-lg sm:text-xl text-center max-w-2xl mb-6">
        {blok.slogan_undertext}
      </p>

      <button className="border border-gray-800 rounded-md px-6 py-3 text-lg font-medium hover:bg-gray-200 transition">
        {blok.button_text}
      </button>

      <div className="mt-10 w-full max-w-6xl">
        <Image
          src={blok.image.filename}
          alt="startpage welcoming Image"
          width={1114}
          height={521}
          className="w-full h-auto rounded-md shadow-md object-cover"
        />
      </div>
    </main>
  );
}
