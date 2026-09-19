import { Button } from "@/components/ui/button";

const NAV_LINKS = ["Home", "Pricing", "About", "Contact"] as const;

export function Navbar() {
  return (
    <nav className="relative z-10 flex shrink-0 items-center justify-between px-6 py-5 font-body md:px-12 lg:px-20">
      <a
        href="/"
        className="text-xl font-semibold tracking-tight text-foreground"
      >
        ✦ Nexora
      </a>

      <div className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {link}
          </a>
        ))}
      </div>

      <Button className="rounded-full px-5 text-sm font-medium">
        Get started
      </Button>
    </nav>
  );
}
