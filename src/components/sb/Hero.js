import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

export default function Hero({ blok }) {
  return (
    <main
      {...storyblokEditable(blok)}
      className="w-full h-full flex flex-col bg-[#EFF2F6] justify-center items-center"
    >
      <h1 className="text-5xl font-bold mb-4">{blok.slogan}</h1>
      <p className="text-lg text-center max-w-2xl">{blok.slogan_undertext}</p>
      <button className="border-1">{blok.button_text}</button>
      <Image 
      src={blok.image.filename}
      alt="startpage welcoming Image"
      width={1114}
      height={521}
      />
    </main>
  );
}
