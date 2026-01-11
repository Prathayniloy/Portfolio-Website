import { motion } from "framer-motion";
import {
  Film,
  Palette,
  Sparkles,
  Music,
  MonitorPlay,
  Wand2,
} from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Video Editing",
    description:
      "Professional editing for commercials, films, documentaries, and social media content with seamless storytelling.",
  },
  {
    icon: Palette,
    title: "Color Grading",
    description:
      "Cinematic color correction and grading to establish mood, enhance visuals, and create stunning imagery.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description:
      "Eye-catching animations, titles, lower thirds, and visual effects that bring your content to life.",
  },
  {
    icon: Music,
    title: "Sound Design",
    description:
      "Audio mixing, music selection, and sound effects to create an immersive viewing experience.",
  },
  {
    icon: MonitorPlay,
    title: "Format Optimization",
    description:
      "Expert formatting for any platform—YouTube, Instagram, TikTok, broadcast, and cinema standards.",
  },
  {
    icon: Wand2,
    title: "VFX & Compositing",
    description:
      "Advanced visual effects, green screen work, and compositing to achieve the impossible.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            What We Do
          </p>
          <h2 className="section-title">
            OUR <span className="text-gradient">SERVICES</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="service-card"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl tracking-wide mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
