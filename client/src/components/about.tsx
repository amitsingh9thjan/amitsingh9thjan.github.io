import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "UI/UX Design",
    "WordPress",
  ];

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate web developer with a keen eye for design and a commitment
            to delivering exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-secondary mb-6">My Story</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I started my journey in web development 5 years ago, driven by a
              passion for creating digital solutions that make a real impact.
              Since then, I've worked with startups, small businesses, and
              enterprises, helping them establish their online presence and
              achieve their goals.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              My approach combines technical expertise with creative
              problem-solving, ensuring that every project not only looks great
              but also performs exceptionally well. I believe in clear
              communication, meeting deadlines, and going above and beyond
              client expectations.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-neutral rounded-xl"
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                onClick={() => {
                  // In a real application, this would link to an actual resume file
                  window.open("/resume.pdf", "_blank");
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
