import { motion } from "framer-motion";
import { Award, Users, Clock, Zap } from "lucide-react";

const stats = [
  { icon: Award, value: "150+", label: "Projects Completed" },
  { icon: Users, value: "80+", label: "Happy Clients" },
  { icon: Clock, value: "10K+", label: "Hours of Footage" },
  { icon: Zap, value: "48hr", label: "Turnaround Time" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              About Us
            </p>
            <h2 className="section-title mb-6">
              WE BRING <span className="text-gradient">VISIONS</span> TO LIFE
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Visual Arcade is a premier video editing studio dedicated to
              transforming your raw footage into compelling visual narratives.
              Our team of skilled editors combines technical expertise with
              creative vision to deliver content that resonates.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From corporate videos to cinematic productions, we approach every
              project with the same passion and attention to detail. We believe
              that great editing is invisible—it simply makes your story shine.
            </p>
            <a href="#contact" className="btn-primary">
              Work With Us
            </a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-8 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-display text-4xl text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
