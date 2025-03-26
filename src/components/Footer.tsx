
import React from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  Shield, 
  CreditCard,
  Globe,
  Landmark,
  ChevronRight
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-casino-darkblue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-casino-gold">LuxCasino</span>
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Experience the luxury of premium online casino gaming with our
              state-of-the-art platform designed for an immersive and secure
              gambling experience.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={18} />} />
              <SocialLink href="#" icon={<Twitter size={18} />} />
              <SocialLink href="#" icon={<Instagram size={18} />} />
              <SocialLink href="#" icon={<Youtube size={18} />} />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/games">Games</FooterLink>
              <FooterLink href="/promotions">Promotions</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/responsible-gaming">Responsible Gaming</FooterLink>
              <FooterLink href="/terms">Terms & Conditions</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/help">Help Center</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-300 text-sm">
                <MapPin size={18} className="text-casino-gold shrink-0 mt-1" />
                <span>123 Casino Avenue, Gaming District, LX 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 text-sm">
                <Phone size={18} className="text-casino-gold" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 text-sm">
                <Mail size={18} className="text-casino-gold" />
                <span>support@luxcasino.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <PaymentIcon icon={<CreditCard size={24} />} name="Credit Cards" />
              <PaymentIcon icon={<Landmark size={24} />} name="Bank Transfer" />
              <PaymentIcon icon={<Shield size={24} />} name="Secure Payments" />
              <PaymentIcon icon={<Globe size={24} />} name="Global Support" />
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-sm text-gray-400 mr-2">Language:</span>
              <select className="bg-gray-800 text-white text-sm rounded-md px-2 py-1 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-casino-gold">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="pt">Português</option>
              </select>
            </div>
          </div>

          <div className="text-center text-sm text-gray-400">
            <p className="mb-2">
              &copy; {year} LuxCasino. All rights reserved.
            </p>
            <p>
              Play responsibly. Gambling can be addictive. Please play responsibly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-casino-gold transition-colors duration-300"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link
      to={href}
      className="text-gray-300 hover:text-casino-gold transition-colors duration-200 flex items-center text-sm"
    >
      <ChevronRight size={14} className="mr-1" />
      {children}
    </Link>
  </li>
);

const PaymentIcon = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
  <div className="flex items-center space-x-1 text-gray-300">
    <div className="text-casino-gold">{icon}</div>
    <span className="text-xs">{name}</span>
  </div>
);

export default Footer;
