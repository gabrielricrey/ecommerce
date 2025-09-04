import { storyblokEditable } from "@storyblok/react";

export default function Hero({ blok }) {
  return (
    <main
      {...storyblokEditable(blok)}
      className="w-full h-full flex flex-col bg-[#EFF2F6] justify-center items-center"
    >
      <h1 className="text-5xl font-bold mb-4">{blok.slogan}</h1>
      <p className="text-lg text-center max-w-2xl">{blok.slogan_undertext}</p>
      <button className="border-1">{blok.button_text}</button>
      <img src={blok.image.filename}></img>
    </main>
  );
}
