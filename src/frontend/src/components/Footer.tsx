import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Zap } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-white">AV Online Services</p>
                <p className="text-xs text-white/70">Internet & Xerox Shop</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Your trusted partner for printing, Xerox, lamination, and online
              services. Serving students and the local community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-ocid="nav.link"
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white/60 shrink-0" />
                <a
                  href="tel:9490337907"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  9490337907
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-white/60 shrink-0 mt-0.5" />
                <span className="text-sm text-white/80">
                  Near Bus Stand, Hyderabad, Telangana, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-white/60 shrink-0" />
                <a
                  href="mailto:avonlineservices@gmail.com"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  avonlineservices@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {year} AV Online Services. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
