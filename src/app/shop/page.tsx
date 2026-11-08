"use client";
import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import { useCart } from "@/lib/cart";
import { ArrowUpRight, ShoppingBag } from "lucide-react";

const products = [
  { id: 1, name: "Monster Mode Trucker", category: "Custom Caps", price: 28000, tag: "1-OF-1 HAND PAINTED", art: "MONSTER / 01", color: "from-[#ff0055] via-[#ff8a00] to-[#09090d]" },
  { id: 2, name: "Anarchy Star Cap", category: "New Release", price: 32000, tag: "LIMITED DROP", art: "NO RULES", color: "from-[#00ff85] via-[#d5ff00] to-[#09090d]" },
  { id: 3, name: "Paint Riot Kicks", category: "Custom Kicks", price: 65000, tag: "CUSTOM PAIR", art: "PAINT RIOT", color: "from-[#b7a4ff] via-[#ff0055] to-[#09090d]" },
  { id: 4, name: "One of One — 004", category: "One-of-One Art", price: 45000, tag: "ONE OF ONE", art: "ODD BY DESIGN", color: "from-[#f4f4f6] via-[#00ff85] to-[#09090d]" },
  { id: 5, name: "Graffiti Panel Cap", category: "Custom Caps", price: 30000, tag: "HAND FINISHED", art: "TAG YOURSELF", color: "from-[#ff0055] via-[#7c3aed] to-[#09090d]" },
  { id: 6, name: "Street Creature Clogs", category: "Custom Kicks", price: 58000, tag: "CUSTOM ART", art: "CREATURE CLUB", color: "from-[#00aaff] via-[#00ff85] to-[#09090d]" }
];
const filters = ["All", "New Release", "Custom Caps", "Custom Kicks", "One-of-One Art"];
const money = (n: number) => `₦${n.toLocaleString("en-NG")}`;

export default function ShopPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<(typeof products)[number] | null>(null);
  const add = useCart(s => s.add);
  const items = useCart(s => s.items);
  const visible = useMemo(() => filter === "All" ? products : products.filter(p => p.category === filter), [filter]);
  return <main className="min-h-screen bg-[#f4f4f6] text-[#09090d]">
    <Navbar/>
    <section className="mx-auto max-w-7xl px-5 pb-16 pt-12 md:px-8 md:pt-20">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div><p className="mb-3 text-[10px] font-black uppercase tracking-[.3em] text-[#ff0055]">IVAN / The archive</p><h1 className="display-font text-7xl leading-[.8] md:text-9xl">THE<br/>DROPS<span className="text-[#ff0055]">.</span></h1></div>
        <p className="max-w-xs text-sm leading-6 text-black/55">Not mass produced. Not here to blend in. Find your piece or make something that is only yours.</p>
      </div>
      <div className="mt-12 flex flex-wrap gap-2 border-y border-black/15 py-4">
        {filters.map(f => <button key={f} onClick={() => setFilter(f)} className={`rounded-full border px-4 py-2 text-[9px] font-black uppercase tracking-[.12em] transition ${filter === f ? "border-[#09090d] bg-[#09090d] text-white" : "border-black/20 hover:border-[#ff0055]"}`}>{f}</button>)}
      </div>
      <div className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => <article key={p.id} className="group">
          <button onClick={() => setSelected(p)} className={`relative flex aspect-4/5 w-full items-center justify-center overflow-hidden bg-linear-to-br ${p.color} p-6 text-left`}>
            <span className="absolute left-4 top-4 text-[9px] font-black tracking-[.2em] text-white/80">{p.tag}</span>
            <span className="display-font -rotate-12 text-center text-5xl leading-[.8] text-white drop-shadow-[4px_4px_0_#09090d] transition duration-500 group-hover:-rotate-5 group-hover:scale-110 md:text-6xl">{p.art}</span>
            <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#f4f4f6] transition group-hover:bg-[#00ff85]"><ArrowUpRight size={20}/></span>
            <span className="absolute bottom-4 left-4 text-[9px] font-bold uppercase tracking-[.15em] text-white/80">ART PREVIEW / {String(i+1).padStart(2,"0")}</span>
          </button>
          <div className="flex items-start justify-between gap-3 pt-4"><div><p className="text-[9px] font-black uppercase tracking-[.2em] text-[#ff0055]">{p.category}</p><h2 className="mt-1 font-bold">{p.name}</h2></div><span className="text-sm font-black">{money(p.price)}</span></div>
          <button onClick={() => add({ id: p.id, name: p.name, price: p.price })} className="mt-3 flex w-full items-center justify-between border-b border-black/25 py-3 text-[10px] font-black uppercase tracking-[.18em] hover:border-[#ff0055]"><span>Add to bag</span><ShoppingBag size={15}/></button>
        </article>)}
      </div>
      <section id="cart" className="mt-24 border-t-2 border-black pt-8">
        <div className="flex items-center justify-between"><h2 className="display-font text-5xl">YOUR BAG</h2><span className="text-xs text-black/50">{items.length} product(s)</span></div>
        {items.length === 0 ? <p className="mt-5 text-sm text-black/50">Your bag is empty. Find something different.</p> : <div className="mt-5 space-y-3">{items.map(item => <div key={item.id} className="flex items-center justify-between border-b border-black/10 py-3 text-sm"><span>{item.name} × {item.quantity}</span><div className="flex gap-4"><b>{money(item.price * item.quantity)}</b><button onClick={() => useCart.getState().remove(item.id)} className="text-[#ff0055]">Remove</button></div></div>)}</div>}
        <p className="mt-5 text-[10px] text-black/45">Demo cart for the starter build. Connect checkout and payment verification before accepting live orders.</p>
      </section>
    </section>
    {selected && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setSelected(null)}><div onClick={e => e.stopPropagation()} className="grid w-full max-w-2xl overflow-hidden bg-[#f4f4f6] md:grid-cols-2"><div className={`flex min-h-64 items-center justify-center bg-linear-to-br ${selected.color}`}><span className="display-font text-5xl text-white">{selected.art}</span></div><div className="p-7"><button className="float-right text-xl" onClick={() => setSelected(null)}>×</button><p className="mt-8 text-[9px] font-black uppercase tracking-widest text-[#ff0055]">{selected.tag}</p><h3 className="display-font mt-2 text-4xl">{selected.name}</h3><p className="mt-4 text-xl font-black">{money(selected.price)}</p><p className="mt-4 text-sm leading-6 text-black/55">A statement piece from the IVAN archive. Product photography and full specifications can be added here.</p><button onClick={() => { add({ id: selected.id, name: selected.name, price: selected.price }); setSelected(null); }} className="mt-8 w-full bg-[#09090d] px-5 py-4 text-xs font-black tracking-widest text-white hover:bg-[#ff0055]">ADD TO BAG ↗</button></div></div></div>}
  </main>;
}
