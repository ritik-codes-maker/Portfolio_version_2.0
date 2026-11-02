import { Github, Gitlab, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { profile } from "@/lib/profile"

export function Footer() {
  const pages = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
  ]

  const socials = [
    { label: "GitHub", href: profile.github, icon: Github, color: "bg-[#2F81F7]" },
    { label: "LinkedIn", href: profile.linkedin, icon: Linkedin, color: "bg-[#2F81F7]" },
    { label: "GitLab", href: profile.gitlab, icon: Gitlab, color: "bg-[#FF6B7A]" },
  ]

  return (
    <footer id="contact" className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 relative">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full bg-white flex items-center justify-center flex-shrink-0 relative">
                <Image
                  src="/images/get-in-touch.svg"
                  alt="Get in touch"
                  width={92}
                  height={92}
                  className="w-14 h-14 md:w-[92px] md:h-[92px]"
                />
              </div>

              <div className="w-full flex-1 bg-white border-4 border-black rounded-3xl py-4 px-4 md:py-6 md:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-black">Let's build something together</h3>
                </div>

                <Button
                  asChild
                  className="bg-black text-white hover:bg-black/90 rounded-[10px] px-6 md:px-10 py-4 text-sm md:text-base font-semibold h-auto w-full md:w-auto"
                >
                  <a href={`mailto:${profile.email}`}>
                    <Mail className="w-5 h-5" />
                    Email me
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                  RC
                </div>
                <span className="text-lg md:text-xl font-bold">{profile.name}</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {profile.role} building web applications with the MERN stack.
              </p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center hover:opacity-80 transition-opacity`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Pages</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {pages.map((page) => (
                  <li key={page.href}>
                    <a href={page.href} className="hover:text-white transition-colors">
                      {page.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={profile.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors break-all">
                    {profile.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                    {profile.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  {profile.location}
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 {profile.name}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
