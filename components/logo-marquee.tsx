export function LogoMarquee() {
  const items = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redux Toolkit",
    "JavaScript",
    "Tailwind CSS",
    "REST APIs",
    "Firebase",
    "Git",
  ]

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-16 -rotate-[5deg] mt-32 mb-16 min-w-[120vw] -mx-[10vw] left-0">
        <div className="flex w-max items-center gap-16 pr-16 animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <span key={index} className="text-white text-3xl md:text-4xl font-bold leading-[48px]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
