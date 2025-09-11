"use client";

import { usePathname } from "next/navigation";
import Footer from "../Footer";
import Header from "../Header";

export default function HeaderFooterWrapper({ children, data }) {
  const pathname = usePathname();
  const hideFooter = pathname.startsWith("/product-detail-page/");
  const darkStyleHeader = pathname.startsWith("/product-detail-page/");

  return (
    <div className="min-h-screen flex flex-col">
      <Header darkMode={darkStyleHeader} data={data} />
      <main className="flex-1">
        {children}
      </main>
      {!hideFooter && <Footer data={data} />}
    </div>
  );
}
