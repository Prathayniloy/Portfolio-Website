import { motion } from "framer-motion";
import { Play } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const portfolioItems = [
  {
    image: portfolio1,
    title: "Brand Documentary",
    category: "Corporate",
  },
  {
    image: portfolio2,
    title: "Fashion Campaign",
    category: "Commercial",
  },
  {
    image: portfolio3,
    title: "City Nightscape",
    category: "Cinematic",
  },
  {
    image: portfolio4,
    title: "Behind The Scenes",
    category: "Production",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const PortfolioSection = () => {
  return (
    <section id="work" className="section-padding">
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
            Our Portfolio
          </p>
          <h2 className="section-title">
            FEATURED <span className="text-gradient">WORK</span>
          </h2>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="portfolio-item aspect-video group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 glow-effect">
                  <Play className="w-6 h-6 text-primary-foreground ml-1" />
                </div>
                <h3 className="font-display text-2xl tracking-wide text-foreground">
                  {item.title}
                </h3>
                <p className="text-primary uppercase tracking-widest text-sm">
                  {item.category}
                </p>
              </div>

              {/* Always visible label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent z-10">
                <p className="text-primary uppercase tracking-widest text-xs mb-1">
                  {item.category}
                </p>
                <h3 className="font-display text-xl tracking-wide text-foreground">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-outline">
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
