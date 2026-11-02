import { Briefcase, FileText, GraduationCap, School } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/profile"

export function ExperienceSection() {
  const experiences = [
    {
      period: "Jan 2025 - Present",
      title: "Software Developer",
      organisation: "Tatva Wellness Pvt. Ltd. | Remote",
      description:
        "Developed OTP-based login and email verification with React.js and Firebase. Built reusable UI components with Tailwind CSS, integrated REST APIs for authentication workflows with backend teams, and took part in code reviews.",
      icon: Briefcase,
      iconColor: "bg-[#2F81F7]",
    },
    {
      period: "Sep 2025 - Dec 2025",
      title: "Frontend Developer Intern",
      organisation: "White Mirror Solution",
      icon: Briefcase,
      iconColor: "bg-[#6366F1]",
    },
    {
      period: "2022 - 2026",
      title: "B.Tech, Computer Science Engineering",
      organisation: "Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore",
      description: "CGPA: 7.8 / 10",
      icon: GraduationCap,
      iconColor: "bg-[#FF6B7A]",
    },
    {
      period: "2020 - 2022",
      title: "Class XII & Class X, MPBSE",
      organisation: "Amlaha Public Higher Secondary School",
      description: "Class XII (2022): 88%. Class X (2020): 96%.",
      icon: School,
      iconColor: "bg-[#FFC224]",
    },
  ]

  return (
    <section id="experience" className="bg-black py-16 md:py-24 scroll-mt-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              My experience <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">and education</span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              Real product work at Tatva Wellness, built on a Computer Science Engineering degree.
            </p>
            <Button
              asChild
              className="bg-white text-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
            >
              <a href={profile.resume} target="_blank" rel="noopener noreferrer">
                <FileText className="w-5 h-5" />
                See full resume
              </a>
            </Button>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white border-4 border-black rounded-3xl min-h-[220px] md:min-h-[240px]">
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div className="text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B]">
                    {exp.period}
                  </div>
                  <div
                    className={`${exp.iconColor} w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-black`}
                  >
                    <exp.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>

                <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xl md:text-[28px] leading-tight md:leading-[40px] font-bold text-[#0B0B0B] mb-1">
                    {exp.title}
                  </h3>
                  <div className="text-gray-600 text-sm md:text-base font-medium mb-2 md:mb-3">{exp.organisation}</div>
                  {exp.description && (
                    <p className="text-[#393939] text-base md:text-[20px] leading-relaxed md:leading-[32px]">
                      {exp.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
