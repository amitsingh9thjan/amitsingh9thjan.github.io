import { Code, Palette, Smartphone, ShoppingCart, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { SiWordpress } from "react-icons/si";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies like React, Node.js, and Python.",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO Implementation",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centered design solutions that create engaging and intuitive digital experiences.",
      features: [
        "Wireframing & Prototyping",
        "User Research",
        "Design Systems",
      ],
    },
    {
      icon: SiWordpress,
      title: "WordPress Development",
      description:
        "Custom WordPress themes and plugins, e-commerce solutions, and content management systems.",
      features: ["Custom Themes", "Plugin Development", "WooCommerce Setup"],
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description:
        "Ensure your website looks and performs perfectly on all devices and screen sizes.",
      features: ["Responsive Design", "Touch Optimization", "Fast Loading"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description:
        "Complete online store development with payment integration and inventory management.",
      features: [
        "Payment Integration",
        "Inventory Management",
        "Order Tracking",
      ],
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description:
        "Ongoing website maintenance, updates, security monitoring, and technical support.",
      features: ["Regular Updates", "Security Monitoring", "Technical Support"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-neutral">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web development and design services tailored to your
            business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="text-2xl text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
