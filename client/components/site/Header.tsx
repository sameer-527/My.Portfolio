import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = href.startsWith("#")
    ? location.pathname === "/"
    : location.pathname === href;
  return (
    <a href={href} className={cn("text-sm md:text-base text-foreground/70 hover:text-foreground transition-colors", isActive && "text-foreground")}>{children}</a>
  );
};

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-extrabold tracking-tight text-xl md:text-2xl">
          <span className="select-none">SAMEER</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#works">Works</NavLink>
          <NavLink href="#about">About</NavLink>
          <Link to="/contact" className="text-sm md:text-base text-foreground/70 hover:text-foreground transition-colors">Contact</Link>
        </nav>
        <button aria-label="Toggle menu" onClick={() => setOpen(v => !v)} className="md:hidden inline-flex items-center justify-center size-10 rounded-full border border-border">
          <div className={cn("relative w-5 h-3", open && "rotate-45")}> 
            <span className={cn("absolute inset-x-0 top-0 h-0.5 bg-foreground transition-all", open && "top-1.5")} />
            <span className={cn("absolute inset-x-0 bottom-0 h-0.5 bg-foreground transition-all", open && "opacity-0")} />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-4 flex flex-col gap-4">
            <a href="#works" onClick={() => setOpen(false)} className="text-base">Works</a>
            <a href="#about" onClick={() => setOpen(false)} className="text-base">About</a>
            <Link to="/contact" onClick={() => setOpen(false)} className="text-base">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
