import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-[42px] leading-[50px] md:text-[44px] md:leading-[56px] lg:text-[56px] lg:leading-[70px] font-bold">
            I'm{" "}
            <span className="whitespace-nowrap">
              <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block whitespace-normal">Ritik Chandravanshi</span>,
            </span>{" "}
            a Full Stack Developer from <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">Indore</span>
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            I build full-stack web applications with React.js, Node.js, Express.js and MongoDB, with a focus on
            responsive, component-driven interfaces.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 lg:gap-7 pt-4">
            <Button
              asChild
              className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[220px]"
            >
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Get in touch
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[220px]"
            >
              <a href="#projects">
                <FolderOpen className="w-5 h-5" />
                View projects
              </a>
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png"
              alt="Illustrated character avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
