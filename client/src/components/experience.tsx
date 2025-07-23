import { Briefcase, Code, Laptop, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      icon: Briefcase,
      title: "Senior Freelance Developer",
      company: "Upwork & Direct Clients",
      period: "2021 - Present",
      description:
        "Leading complex web development projects, specializing in React applications and WordPress solutions. Maintained 5-star rating with 30+ clients.",
      type: "work",
    },
    {
      icon: Code,
      title: "Full Stack Developer",
      company: "TechStart Solutions",
      period: "2019 - 2021",
      description:
        "Developed and maintained multiple client websites and web applications. Led frontend development using modern JavaScript frameworks.",
      type: "work",
    },
    {
      icon: Laptop,
      title: "Junior Web Developer",
      company: "Digital Agency Pro",
      period: "2018 - 2019",
      description:
        "Started my professional journey building responsive websites and learning modern development practices. Focused on frontend technologies and user experience.",
      type: "work",
    },
    {
      icon: GraduationCap,
      title: "Computer Science Degree",
      company: "State University",
      period: "2014 - 2018",
      description:
        "Bachelor's degree in Computer Science with focus on web technologies, software engineering, and user interface design.",
      type: "education",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-neutral">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and continuous learning in web development
            and design.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-0.5 bg-primary"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`absolute left-0 md:left-1/2 md:-ml-4 w-8 h-8 ${
                      exp.type === "education" ? "bg-accent" : "bg-primary"
                    } rounded-full border-4 border-white shadow-lg flex items-center justify-center`}
                  >
                    <exp.icon className="text-white h-4 w-4" />
                  </div>
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      index % 2 === 1 ? "md:pl-8" : "md:pr-8"
                    }`}
                  >
                    <div className="bg-background p-6 rounded-xl shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-secondary">
                          {exp.title}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-primary font-semibold mb-3">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
