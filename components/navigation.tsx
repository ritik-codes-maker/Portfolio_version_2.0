import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/profile"

export function Navigation() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
  ]

  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-3xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <a
          href="#home"
          aria-label={profile.name}
          className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
        >
          RC
        </a>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button asChild className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0">
          <a href="#contact" aria-label="Contact">
            <Mail className="w-10 h-10" strokeWidth={2.5} />
          </a>
        </Button>
      </nav>
    </div>
  )
}
