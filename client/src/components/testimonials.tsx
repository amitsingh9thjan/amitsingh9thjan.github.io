import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "E-commerce Store Owner",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      rating: 5,
      text: "Alex delivered exactly what we needed - a modern, fast website that converted visitors into customers. His attention to detail and communication throughout the project was exceptional.",
    },
    {
      name: "Michael Rodriguez",
      role: "Restaurant Owner",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      rating: 5,
      text: "Working with Alex was a pleasure. He understood our vision and created a website that perfectly represents our brand. The project was completed on time and within budget.",
    },
    {
      name: "Emily Johnson",
      role: "Tech Startup Founder",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      rating: 5,
      text: "Alex's technical expertise and creative approach helped us launch our SaaS platform successfully. The dashboard he created is both beautiful and highly functional.",
    },
    {
      name: "David Kim",
      role: "Marketing Consultant",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      rating: 5,
      text: "I highly recommend Alex for any web development project. His WordPress expertise helped us create a professional site that's easy to manage and update.",
    },
    {
      name: "Lisa Thompson",
      role: "Creative Agency Owner",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      rating: 5,
      text: "Alex transformed our outdated website into a modern, mobile-friendly platform that significantly improved our online presence and customer engagement.",
    },
    {
      name: "James Wilson",
      role: "Photographer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      rating: 5,
      text: "Professional, reliable, and talented. Alex delivered a stunning portfolio website that has helped me attract new clients and showcase my work effectively.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What my clients say about working with me and the results we've
            achieved together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral p-8 rounded-xl"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-muted-foreground font-medium">
                  {testimonial.rating}.0
                </span>
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-secondary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
