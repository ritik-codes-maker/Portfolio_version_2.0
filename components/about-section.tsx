import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { profile } from "@/lib/profile"

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-32 scroll-mt-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg aspect-square border-[4px] border-black rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image src="/images/about-me.svg" alt="About me illustration" fill className="object-cover" />
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Who's behind <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">the code?</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Hello, my name is Ritik and I'm a Full Stack Developer passionate about building modern, scalable, and user-focused web applications. I specialize in the MERN stack, transforming ideas into seamless digital experiences through clean code, intuitive interfaces, and efficient backend solutions. I enjoy solving complex problems, exploring new technologies, and creating products that combine functionality with exceptional user experience.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Hands-on industry experience</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Software Developer at Tatva Wellness since January 2025, building authentication flows and
                  reusable React.js components.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">250+ DSA problems solved</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  A strong foundation in Data Structures & Algorithms, OOP and DBMS, practised in Java.
                </p>
              </div>
            </div>
          </div>

          <Button
            asChild
            className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
          >
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              See my GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
