import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

export default function FullWidthImage({ blok }) {
  return (
    <main
      {...storyblokEditable(blok)}
      className="w-full min-h-screen flex flex-col items-center justify-center bg-[#EFF2F6]"
    >

<div className="w-full h-80 relative">
  <Image
    src={blok.image.filename}
    alt="startpage welcoming Image"
    fill
    className="object-cover"
  />
</div>
    </main>
  );
}