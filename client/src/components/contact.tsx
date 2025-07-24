import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Clock,
  CalendarCheck,
  Handshake,
  Shield,
  Github,
  Twitter,
} from "lucide-react";
import { SiUpwork, SiLinkedin, SiDribbble } from "react-icons/si";
import { motion } from "framer-motion";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "amitsingh9thjan@gmail.com",
      href: "mailto:amitsingh9thjan@gmail.com",
    },
    {
      icon: Github,
      title: "Github",
      value: "amitsingh9thjan",
      href: "https://github.com/amitsingh9thjan",
    },
    {
      icon: SiUpwork,
      title: "Upwork Profile",
      value: "/freelancers/~01ddf3e5b98d338342",
      href: "https://www.upwork.com/freelancers/~01ddf3e5b98d338342",
    },
    {
      icon: SiLinkedin,
      title: "LinkedIn",
      value: "/in/amit-singh-9thjan",
      href: "https://www.linkedin.com/in/amit-singh-9thjan/",
    },
  ];

  const guarantees = [
    {
      icon: Clock,
      text: "Response within 2 hours during business hours",
    },
    {
      icon: CalendarCheck,
      text: "Free consultation call to discuss your project",
    },
    {
      icon: Handshake,
      text: "Transparent pricing with no hidden fees",
    },
    {
      icon: Shield,
      text: "100% satisfaction guarantee",
    },
  ];

  const services = [
    "Full-stack web development projects",
    "WordPress website development",
    "UI/UX design and consultation",
    "Website maintenance and optimization",
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/alexjohnsondev",
      label: "GitHub",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/alexjohnsondev",
      label: "Twitter",
    },
    {
      icon: SiDribbble,
      href: "https://dribbble.com/alexjohnsondev",
      label: "Dribbble",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your project? Get in touch and let's discuss how I
            can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <info.icon className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{info.title}</h4>
                    <a
                      href={info.href}
                      className="text-gray-300 hover:text-white transition-colors"
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

         
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Response Guarantee</h3>
              <div className="space-y-4 mb-8">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center">
                    <guarantee.icon className="text-accent mr-3 h-5 w-5" />
                    <span>{guarantee.text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/20">
                <h4 className="font-semibold mb-4">Currently Available For:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  {services.map((service, index) => (
                    <li key={index}>• {service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
       
      </div>
    </section>
  );
}
