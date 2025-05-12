import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiPython, SiDjango, SiPostman, SiMysql, SiMongodb, SiPostgresql } from "react-icons/si";

const techStack = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "Python", icon: <SiPython className="text-blue-700" /> },
  { name: "Django", icon: <SiDjango className="text-green-900" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
  { name: "SQL", icon: <SiPostgresql className="text-blue-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
];

export default function TechStack() {
  return (
    <section className="bg-white py-24 sm:py-32 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-medium tracking-tight text-gray-900">
          Technologien, mit denen wir arbeiten
        </h2>
        
        <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
          Wir setzen auf moderne Technologien und Frameworks, um leistungsstarke, 
          skalierbare und wartbare Weblösungen zu bauen.
        </p>
        
        <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-5">
          {techStack.map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2.5 px-5 py-3 bg-white border border-gray-200 
                       text-gray-800 rounded-xl shadow-sm hover:shadow-md hover:border-blue-200 
                       hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-2xl">{tech.icon}</div>
              <span className="font-medium text-sm sm:text-base">{tech.name}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <a
            href="#kontakt"
            className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 
                    px-8 py-4 text-white text-sm font-medium shadow-lg hover:shadow-xl 
                    transition-shadow"
          >
            Ihre Anforderungen besprechen
          </a>
        </div>
      </div>
    </section>
  );
}