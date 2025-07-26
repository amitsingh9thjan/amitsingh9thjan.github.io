import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Star, CheckCircle, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const fadeInUpDelay = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.2 },
  };

  return (
    <section
      id="hero"
      className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-neutral via-background to-blue-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
              Professional{" "}
              <span className="text-primary">Web Developer</span>
              /{" "}
              <span className="text-primary">AI & Automation Expert | n8n, Make.com, GPT-4, Claude, API Integration</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              I create modern, responsive websites and digital solutions that
              help businesses grow. With 5+ years of experience, I deliver
              high-quality projects on time and within budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() =>
                  window.open("https://www.upwork.com/freelancers/~alexjohnson", "_blank")
                }
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Upwork Profile
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => {
                  const element = document.getElementById("portfolio");
                  if (element) {
                    const offsetTop = element.offsetTop - 80;
                    window.scrollTo({
                      top: offsetTop,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                <Eye className="mr-2 h-4 w-4" />
                View My Work
              </Button>
            </div>
            <motion.div
              {...fadeInUpDelay}
              className="flex items-center mt-8 space-x-6"
            >
              <div className="flex items-center text-accent">
                <Star className="mr-1 h-4 w-4 fill-current" />
                <span className="font-semibold">5.0 Rating</span>
              </div>
              <div className="flex items-center text-accent">
                <CheckCircle className="mr-1 h-4 w-4" />
                <span className="font-semibold">50+ Projects</span>
              </div>
              <div className="flex items-center text-accent">
                <Users className="mr-1 h-4 w-4" />
                <span className="font-semibold">30+ Clients</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            {...fadeInUpDelay}
            className="lg:text-center"
          >
            <img
              src="/images/amitsingh.png"
              alt="Amit Singh"
              className="w-80 h-80 rounded-full mx-auto shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
