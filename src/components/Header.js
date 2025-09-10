"use client";


import Link from "next/link";
import { useState } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  Bars2Icon

} from "@heroicons/react/24/outline";
import { cn } from "@/utils/cn";

export default function Header({ data, darkMode }) {

  const [toggleMenu, setToggleMenu] = useState(false);
  const headerClasses = cn(
    "w-full fixed border-black border-b-1 border-opacity-50 flex items-center bg-[#EFF2F6] h-[60px]",
    { "bg-black text-white": darkMode }
  );
  const seachInputClasses = "outline-none";

  return (
    <header className={headerClasses}>
      <nav className="flex w-[1400px] mx-auto gap-10 px-5 items-center justify-between">
        <div className="w-full relative flex gap-10 items-center">
          <Link href={`/${data.logo[0].link.cached_url}`} className="font-bold text-lg">
            {data.logo[0].label}
          </Link>

          <div className={cn("fixed translate-x-full w-full flex flex-col md:relative md:flex-row md:justify-between md:translate-x-0", { "translate-x-0 h-dvh top-0 left-0 bg-[#EFF2F6] items-center justify-center": toggleMenu }, { "bg-black text-white": darkMode })}>
            <div className={cn("flex flex-col md:flex-row md:gap-5", { "items-center gap-2 mb-2": toggleMenu })}>

              <Link href={`/${data.header_links[0].link.cached_url}`} onClick={() => setToggleMenu(false)}>{data.header_links[0].name}</Link>
              <Link href={`/${data.header_links[1].link.cached_url}`} onClick={() => setToggleMenu(false)}>{data.header_links[1].name}</Link>
              <div className={cn("flex-1 flex gap-3 justify-start", { "absolute top-4 left-1/2 -translate-x-1/2": toggleMenu })}>
                <MagnifyingGlassIcon className="size-6" />
                <input
                  type="text"
                  className={seachInputClasses}
                  placeholder="Search"
                />
              </div>
            </div>
            <ShoppingBagIcon className="size-6 cursor-not-allowed" />
          </div>
        </div>
        <Bars2Icon className="size-6 md:hidden cursor-pointer z-100" onClick={() => setToggleMenu(!toggleMenu)} />
      </nav>
    </header>
  );
}
