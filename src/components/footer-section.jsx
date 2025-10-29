import { Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import zoeverseLogo from "../assets/zoeverse-logo-png.png";
import { Link } from "react-router-dom";
export const Footer = () => {
  const footerLinks = {
    product: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#" },
      { label: "Testimonials", href: "#testimonials" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "Help Center", href: "/help" },
      { label: "Community", href: "/community" },
      { label: "Guides", href: "/guides" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "HIPAA Compliance", href: "/hipaa" },
    ],
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 group">
            <img 
            src={zoeverseLogo} 
            alt=""
            className="w-10 h-9" 
            />
            
            <span className="text-xl font-bold bg-linear-to-r from-[#e15258] via-[#feaf1c] to-[#77c243] bg-clip-text text-transparent">
              ZOEVERSE
            </span>
          </Link>

            <p className="text-muted-foreground mb-6 max-w-sm">
              Making healthcare accessible and transparent for everyone. Find, compare, and book quality healthcare near you.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([section, links], idx) => (
            <div key={idx}>
              <h3 className="font-semibold mb-4 capitalize">{section}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} HealthFinder. All rights reserved. HIPAA compliant and secure.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              Made with <Heart className="w-4 h-4 text-red-500" aria-hidden="true" /> for better healthcare
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
