import { Instagram, Mail } from "lucide-react";
import Image from "next/image"; // Import the Image component
import Logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <Image
                src={Logo}
                alt="Jaire Logo"
                width={50}  // Adjusted to be smaller for footer
                height={50}
                className="object-contain transition-transform group-hover:rotate-12"
              />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/jaire.tattoo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="mailto:contato@jaire.art"
              className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">
            © {currentYear} Jaibe — Rio de Janeiro, BR
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;