import type { ReactNode } from "react";

export function Browser({ children, url = "yourbusiness.com", className = "" }: { children: ReactNode; url?: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-border bg-paper shadow-lift ${className}`}>
      <div className="flex items-center gap-2 border-b border-border bg-ivory-deep/60 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-3 flex-1 truncate rounded-md bg-paper px-3 py-1 text-[10px] text-muted-foreground">{url}</span>
      </div>
      {children}
    </div>
  );
}

const Line = ({ w, dark }: { w: string; dark?: boolean }) => <div className={`h-1.5 rounded-full ${dark ? "bg-primary/70" : "bg-primary/15"}`} style={{ width: w }} />;

export function BusinessSite() {
  return (
    <div className="bg-ivory p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <span className="font-display text-xs font-bold text-primary">Atelier&nbsp;&amp;&nbsp;Co.</span>
        <div className="hidden gap-3 sm:flex">{[28, 34, 26].map((w) => <Line key={w} w={`${w}px`} />)}</div>
        <span className="rounded-full bg-primary px-3 py-1 text-[9px] font-semibold text-primary-foreground">Book a call</span>
      </div>
      <div className="mt-8 grid grid-cols-5 items-center gap-5">
        <div className="col-span-3">
          <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-sage">Established studio</p>
          <p className="mt-2 font-display text-xl font-extrabold leading-tight text-primary sm:text-2xl">Quality work,<br />thoughtfully made.</p>
          <div className="mt-3 space-y-1.5"><Line w="90%" /><Line w="70%" /></div>
          <div className="mt-4 flex gap-2">
            <span className="rounded-full bg-primary px-3 py-1.5 text-[9px] text-primary-foreground">Our services</span>
            <span className="rounded-full border border-primary/30 px-3 py-1.5 text-[9px] text-primary">Contact</span>
          </div>
        </div>
        <div className="col-span-2 aspect-[4/5] rounded-lg bg-gradient-to-br from-sage to-primary" />
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-md border border-border bg-paper p-2.5">
            <div className="h-5 w-5 rounded bg-accent" />
            <div className="mt-2 space-y-1"><Line w="70%" dark /><Line w="90%" /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PhoneSite() {
  return (
    <div className="w-36 overflow-hidden rounded-[1.6rem] border-[5px] border-forest-deep bg-ivory shadow-lift sm:w-40">
      <div className="mx-auto mt-1.5 h-1 w-10 rounded-full bg-primary/30" />
      <div className="p-3">
        <div className="flex justify-between"><span className="font-display text-[8px] font-bold text-primary">Atelier</span><span className="text-[8px] text-primary">≡</span></div>
        <div className="mt-3 aspect-square rounded-md bg-gradient-to-br from-sage to-primary" />
        <p className="mt-2 font-display text-[11px] font-extrabold leading-tight text-primary">Quality work, thoughtfully made.</p>
        <div className="mt-2 space-y-1"><Line w="90%" /><Line w="60%" /></div>
        <div className="mt-3 rounded-full bg-primary py-1.5 text-center text-[8px] text-primary-foreground">Book a call</div>
      </div>
    </div>
  );
}

export function CafeSite() {
  return (
    <div className="bg-forest-deep p-5 text-ivory">
      <div className="flex items-center justify-between text-[9px]"><span className="font-display font-bold italic">Morning Bloom Café</span><span className="opacity-70">Menu · Visit · Order</span></div>
      <div className="mt-6 text-center">
        <p className="text-[8px] uppercase tracking-[0.25em] text-sage">Coffee · Bakes · Brunch</p>
        <p className="mt-2 font-display text-2xl font-extrabold">Slow mornings,<br />good coffee.</p>
        <span className="mt-3 inline-block rounded-full bg-ivory px-3 py-1 text-[9px] font-semibold text-primary">View menu</span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {["Flat white", "Croissant", "Avo toast"].map((n) => (
          <div key={n} className="rounded-md bg-ivory/10 p-2">
            <div className="aspect-square rounded bg-sage/60" />
            <p className="mt-1.5 text-[8px]">{n}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PortfolioSite() {
  return (
    <div className="bg-paper p-5">
      <div className="flex items-center justify-between text-[9px] text-foreground"><span className="font-display font-bold">R. Mehra — Photographer</span><span className="text-muted-foreground">Work · About</span></div>
      <p className="mt-5 font-display text-2xl font-extrabold leading-none text-foreground">Selected<br /><span className="text-sage">work.</span></p>
      <div className="mt-4 grid grid-cols-3 grid-rows-2 gap-2">
        <div className="col-span-2 row-span-2 aspect-[4/3] rounded bg-gradient-to-tr from-primary to-sage" />
        <div className="rounded bg-ivory-deep" />
        <div className="rounded bg-accent" />
      </div>
    </div>
  );
}

export function MiniCard({ variant }: { variant: number }) {
  const blocks = [
    <><div className="h-8 rounded bg-primary/80" /><div className="mt-2 grid grid-cols-3 gap-1.5">{[0, 1, 2].map((i) => <div key={i} className="h-5 rounded bg-primary/15" />)}</div></>,
    <><div className="flex gap-1.5"><div className="h-14 w-1/2 rounded bg-sage/60" /><div className="flex-1 space-y-1.5 pt-1"><Line w="80%" dark /><Line w="60%" /><Line w="70%" /></div></div></>,
    <><div className="mx-auto w-3/4 space-y-1.5 text-center"><Line w="100%" dark /><Line w="70%" /></div><div className="mx-auto mt-3 h-4 w-16 rounded-full bg-primary" /></>,
    <><div className="grid grid-cols-3 gap-1.5">{[0, 1, 2, 3, 4, 5].map((i) => <div key={i} className={`h-6 rounded ${i % 2 ? "bg-sage/50" : "bg-primary/20"}`} />)}</div></>,
    <><div className="space-y-1.5"><Line w="50%" dark /><Line w="90%" /><Line w="80%" /></div><div className="mt-3 flex gap-1.5"><div className="h-6 flex-1 rounded bg-accent" /><div className="h-6 flex-1 rounded bg-primary/20" /></div></>,
    <div className="flex items-end justify-center gap-2"><div className="h-14 w-20 rounded border-2 border-primary/50" /><div className="h-10 w-8 rounded border-2 border-primary/50" /><div className="h-7 w-4 rounded border-2 border-sage" /></div>,
  ];
  return <div className="h-24 rounded-lg border border-border bg-ivory p-3 transition-transform duration-500 group-hover:-translate-y-1">{blocks[variant]}</div>;
}
