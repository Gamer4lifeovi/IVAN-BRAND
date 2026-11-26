"use client";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "@/lib/cart";

export default function Navbar() {
  const count = useCart(s => s.items.reduce((n, item) => n + item.quantity, 0));
  return <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f4f4f6]/90 backdrop-blur-xl">
    <div className="relative mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-5 py-3 md:px-8">
      <nav className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[.12em] sm:gap-5 md:gap-7 md:text-[10px]">
        <Link href="/shop" className="hover:text-[#ff0055]">Shop</Link>
        <a href="/shop#new" className="hidden hover:text-[#ff0055] sm:inline">New release</a>
        <Link href="/custom-studio" className="hidden hover:text-[#ff0055] md:inline">Custom studio</Link>
      </nav>
      <Link href="/shop" aria-label="IVAN home" className="justify-self-center">
        <BrandLogo className="w-[66px] md:w-[82px]" />
      </Link>
      <div className="flex items-center justify-self-end gap-1 sm:gap-2">
        <Link href="/custom-studio" aria-label="Contact IVAN" className="rounded-full p-2 transition hover:bg-black/5"><MessageCircle size={19}/></Link>
        <Link href="/shop#cart" aria-label="Shopping bag" className="relative rounded-full p-2 transition hover:bg-black/5"><ShoppingBag size={19}/>{count > 0 && <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ff0055] px-1 text-[9px] font-bold text-white">{count}</span>}</Link>
      </div>
    </div>
  </header>;
}
