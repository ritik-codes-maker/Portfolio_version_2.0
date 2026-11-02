import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      title: "React.js interfaces",
      description: "Reusable, component-driven UIs built with React.js, with application state managed through Redux Toolkit.",
      image: "/images/web-design.svg",
    },
    {
      title: "Responsive design",
      description: "Layouts built with Tailwind CSS, HTML5 and CSS3 that hold up across phones, tablets and desktops.",
      image: "/images/ui-ux-design.svg",
    },
    {
      title: "Authentication flows",
      description: "OTP-based login and email verification with Firebase, plus role-based access control using JWT.",
      image: "/images/user-research.svg",
    },
    {
      title: "REST API integration",
      description: "Connecting frontends to REST APIs alongside backend teams, with Node.js and Express.js experience of my own.",
      image: "/images/api-integration.svg",
    },
    {
      title: "Dashboards & charts",
      description: "Charting-based dashboards that turn raw data into clear insights, like spending patterns and budgets.",
      image: "/images/dashboard-charts.svg",
    },
  ]

  const skills = [
    { group: "Frontend", items: ["React.js", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS"] },
    { group: "Languages", items: ["JavaScript", "Java"] },
    { group: "Backend", items: ["Node.js", "Express.js", "REST API Development", "Web Services"] },
    { group: "Database", items: ["MongoDB (NoSQL)", "Firebase", "MySQL", "SQL Fundamentals"] },
    { group: "Core CS", items: ["Data Structures & Algorithms", "OOP", "DBMS", "Problem Solving"] },
    { group: "Tools & Practices", items: ["Git", "GitHub", "VS Code", "SDLC", "Agile Fundamentals"] },
  ]

  return (
    <section id="skills" className="bg-white py-16 md:py-24 scroll-mt-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              What I build <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">across the stack</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              From authentication flows to data dashboards, here is the kind of work I've done in my roles and
              full-stack projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 min-h-[480px] flex flex-col group"
              >
                <div className="mb-6 -mx-[3px] -mt-[3px] overflow-hidden rounded-t-[29px]">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={382}
                    height={328}
                    className="w-full h-auto rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="px-8 pb-8 flex-1 flex flex-col">
                  <h3 className="text-[28px] leading-[40px] font-bold mb-3 text-[#0B0B0B]">{service.title}</h3>
                  <p className="text-[18px] leading-[30px] font-medium text-[#393939]">{service.description}</p>
                </div>
              </div>
            ))}

            <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform min-h-[480px] relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-8">
                <Image
                  src="/images/get-in-touch.svg"
                  alt="Get in touch"
                  width={92}
                  height={92}
                  className="w-[92px] h-[92px]"
                />
              </div>
              <h3 className="text-[28px] leading-[40px] font-bold mb-4 text-[#0B0B0B]">Get in touch</h3>
              <p className="text-[18px] leading-[30px] font-medium text-[#393939] mb-8">
                Hiring a full stack developer? I'd love to contribute to end-to-end product development on your team.
              </p>
              <Button
                asChild
                className="bg-black text-white hover:bg-black/90 rounded-[16px] px-12 py-6 font-medium text-[18px] w-full max-w-[340px] h-[64px]"
              >
                <a href="#contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Get in touch
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-12 md:mt-16 bg-white border-[3px] border-black rounded-[32px] p-6 md:p-12">
            <h3 className="text-[28px] leading-[40px] font-bold mb-6 md:mb-8 text-[#0B0B0B]">Technical skills</h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {skills.map((skill) => (
                <div key={skill.group}>
                  <h4 className="text-lg font-bold mb-3 text-[#0B0B0B]">{skill.group}</h4>
                  <ul className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="border-2 border-black rounded-full px-3 py-1 text-sm font-medium text-[#0B0B0B]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
