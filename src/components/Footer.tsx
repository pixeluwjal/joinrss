'use client';

import Image from 'next/image';
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight } from './icons';

interface FooterProps {
  handleScrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const navItems = [
  { name: 'RSS Overview', id: 'rss-overview' },
  { name: 'Bala Bharathi', id: 'bala-bharathi' },
  { name: 'Kishora Bharathi', id: 'kishora-bharathi' },
  { name: 'Bhajan Sandhya', id: 'bhajan-sandhya' },
  { name: 'IT Milan', id: 'it-milan' },
  { name: 'Sevika Samithi', id: 'sevika-samithi' },
  { name: 'Register', id: 'register' }
];

const Footer: React.FC<FooterProps> = ({ handleScrollToSection }) => {
  return (
    <footer className="py-12 bg-gradient-to-b from-[#7c0f00] to-[#5a0c00] text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#E65911] mb-4 flex items-center">
              <Image
                src="/rss-logo.jpg"
                alt="RSS Logo"
                width={300}
                height={300}
                className="mr-2"
              />
            </h3>
            <p className="mb-4">Building character, fostering culture, and serving the nation</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#E65911]/20 flex items-center justify-center hover:bg-[#E65911] transition-colors duration-300">
                <FaFacebook className="text-[#E65911] hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#E65911]/20 flex items-center justify-center hover:bg-[#E65911] transition-colors duration-300">
                <FaInstagram className="text-[#E65911] hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#E65911]/20 flex items-center justify-center hover:bg-[#E65911] transition-colors duration-300">
                <FaYoutube className="text-[#E65911] hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleScrollToSection(e, item.id)}
                    className="text-white/80 hover:text-[#E65911] transition-colors duration-300 flex items-center"
                  >
                    <FaArrowRight className="mr-2 text-sm" /> {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="mb-2 flex items-center">
              <FaEnvelope className="mr-2 text-[#E65911]" />
              <span>Email: info@rss.org</span>
            </div>
            <div className="mb-2 flex items-center">
              <FaPhone className="mr-2 text-[#E65911]" />
              <span>Phone: +91 093437 44988</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-[#E65911]" />
              <span>Address: Bengaluru, Karnataka</span>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E65911]/30 pt-8 text-center">
          <p>&copy; 2025 RSS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;