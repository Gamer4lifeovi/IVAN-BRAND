"use client";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "@/lib/cart";

export default function Navbar() {
  const count = useCart(s => s.items.reduce((n, item) => n + item.quantity, 0));
  return <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f4f4f6]/90 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
      <Link href="/shop" aria-label="IVAN home"><BrandLogo className="w-[66px]"/></Link>
      <nav className="hidden items-center gap-7 text-[10px] font-black uppercase tracking-[.16em] md:flex">
        <Link href="/shop" className="hover:text-[#ff0055]">Shop</Link><a href="/shop#new" className="hover:text-[#ff0055]">New release</a><Link href="/custom-studio" className="hover:text-[#ff0055]">Custom studio</Link>
      </nav>
      <div className="flex items-center gap-2">
        <Link href="/custom-studio" aria-label="Contact IVAN" className="rounded-full p-2 transition hover:bg-black/5"><MessageCircle size={19}/></Link>
        <Link href="/shop#cart" aria-label="Shopping bag" className="relative rounded-full p-2 transition hover:bg-black/5"><ShoppingBag size={19}/>{count > 0 && <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ff0055] px-1 text-[9px] font-bold text-white">{count}</span>}</Link>
      </div>
    </div>
  </header>;
}
