import Link from "next/link";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { cn } from "@/utils/cn";

export default function Header({ data, darkMode }) {
  const headerClasses = cn(
    "w-full border-black border-b-1 border-opacity-50 flex justify-center items-center bg-[#EFF2F6] h-[60px]",
    { "bg-black text-white": darkMode }
  );
  const seachInputClasses = "outline-none";
  return (
    <header className={headerClasses}>
      <nav className="flex w-[1400px] gap-10 px-5 items-center justify-between">
        <div className="flex-1 flex gap-10 items-center">
          <Link href={`/${data.logo[0].link.cached_url}`} className="font-bold text-lg">
            {data.logo[0].label}
          </Link>
          <Link href={`/${data.header_links[0].cached_url}`}>{data.header_links[0].name}</Link>
          <Link href="#" className="cursor-not-allowed text-gray-400">{data.header_links[1].name}</Link>
          <div className="flex-1 flex gap-3 justify-start">
            <MagnifyingGlassIcon className="size-6" />
            <input
              type="text"
              className={seachInputClasses}
              placeholder="Search"
            />
          </div>
        </div>
        <ShoppingBagIcon className="size-6 cursor-not-allowed" />
      </nav>
    </header>
  );
}
