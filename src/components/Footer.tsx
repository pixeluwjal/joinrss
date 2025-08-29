'use client';

import Image from 'next/image';
import { FaFacebook, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa';

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
  { name: 'Register', id: 'hero' } // Changed 'register' to 'hero'
];

const Footer: React.FC<FooterProps> = ({ handleScrollToSection }) => {
  return (
    <footer className="relative py-16 bg-gradient-to-b from-[#7c0f00] to-[#5a0c00] text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E65911] to-transparent opacity-30"></div>
      <div className="absolute top-10 right-10 w-40 h-40 bg-[#E65911] rounded-full opacity-10"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#E65911] rounded-full opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="mb-6">
              <Image
                src="/rss-logo.jpg"
                alt="RSS Logo"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="mb-6 text-white/80 leading-relaxed max-w-md">
              Building character, fostering culture, and serving the nation through dedicated programs and initiatives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 rounded-full bg-[#E65911]/20 flex items-center justify-center hover:bg-[#E65911] transition-all duration-300 transform hover:-translate-y-1 shadow-md">
                <FaFacebook className="text-xl text-white" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-[#E65911]/20 flex items-center justify-center hover:bg-[#E65911] transition-all duration-300 transform hover:-translate-y-1 shadow-md">
                <FaInstagram className="text-xl text-white" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-[#E65911]/20 flex items-center justify-center hover:bg-[#E65911] transition-all duration-300 transform hover:-translate-y-1 shadow-md">
                <FaYoutube className="text-xl text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 pb-2 border-b border-[#E65911]/30 inline-block">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.id}`}
                  onClick={(e) => handleScrollToSection(e, item.id)}
                  className="text-white/80 hover:text-[#E65911] transition-all duration-300 flex items-center group py-2"
                >
                  <span className="w-2 h-2 bg-[#E65911] rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 text-sm md:text-base">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#E65911]/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0 flex items-center">
            Made with <FaHeart className="text-[#E65911] mx-1" /> by RSS Volunteers
          </p>
          <p className="text-white/70 text-sm">&copy; 2025 RSS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;