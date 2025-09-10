import { storyblokEditable } from "@storyblok/react";


export default function FullWidthImage({ blok }) {
  return (
    <main
      {...storyblokEditable(blok)}
      className="w-full min-h-screen flex flex-col items-center justify-center bg-[#EFF2F6]"
    >

      <div
        className="w-full h-80 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${blok.image.filename})` }}
      />
    </main>
  );
}