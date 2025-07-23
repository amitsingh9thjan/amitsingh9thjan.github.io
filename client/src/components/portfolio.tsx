import { Button } from "@/components/ui/button";
import { Eye, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Modern online store with custom checkout and inventory management",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tech: ["React", "Node.js", "Stripe"],
    },
    {
      title: "Corporate Website",
      description:
        "Professional business website with CMS and analytics integration",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tech: ["WordPress", "PHP", "SEO"],
    },
    {
      title: "Mobile App Design",
      description:
        "UI/UX design for productivity app with user research and testing",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tech: ["Figma", "UI/UX", "Prototyping"],
    },
    {
      title: "Restaurant Website",
      description:
        "Full-featured restaurant site with online reservations and menu",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tech: ["Vue.js", "Laravel", "MySQL"],
    },
    {
      title: "SaaS Dashboard",
      description:
        "Analytics dashboard with real-time data and interactive charts",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tech: ["React", "D3.js", "API"],
    },
    {
      title: "Creative Portfolio",
      description:
        "Stunning portfolio website for photographer with gallery system",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tech: ["JavaScript", "CSS3", "Animation"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Featured Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of recent projects showcasing my skills and expertise
            across different industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <ExternalLink className="h-8 w-8 mx-auto mb-2" />
                    <p className="font-semibold">View Project</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() =>
              window.open("https://www.upwork.com/freelancers/~alexjohnson", "_blank")
            }
          >
            <Eye className="mr-2 h-4 w-4" />
            View All Projects on Upwork
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
