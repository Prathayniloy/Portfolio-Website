import { motion } from "framer-motion";
import { Instagram, Youtube, Twitter, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#home" className="inline-block mb-4">
              <span className="font-display text-3xl tracking-wider">
                <span className="text-primary">VISUAL</span>
                <span className="text-foreground">ARCADE</span>
              </span>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Professional video editing services that transform your vision
              into captivating visual stories. Let's create something
              extraordinary together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg tracking-wider mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {["Home", "Services", "Work", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg tracking-wider mb-4">
              SERVICES
            </h4>
            <ul className="space-y-3">
              {[
                "Video Editing",
                "Color Grading",
                "Motion Graphics",
                "Sound Design",
                "VFX",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Visual Arcade. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
