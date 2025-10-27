export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-8 flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-between text-sm text-foreground/70">
        <p>© {new Date().getFullYear()} Mohammed Sameer Ahmed. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="tel:+917702586415" className="hover:text-foreground">+91 77025 86415</a>
          <a href="mailto:mohammedsameers766@gmail.com" className="hover:text-foreground">mohammedsameers766@gmail.com</a>
          <a href="/#works" className="hover:text-foreground">Portfolio</a>
        </div>
      </div>
    </footer>
  );
}
