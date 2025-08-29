"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaHome, FaTimes, FaBars, FaUsers, FaFemale } from "react-icons/fa";

interface SectionRefs {
  [key: string]: React.RefObject<HTMLElement>;
}

interface NavbarProps {
  sectionRefs: SectionRefs;
}

const navItems = [
  { name: "Home", id: "hero", icon: <FaHome className="text-lg" /> },
  { name: "RSS Overview", id: "rss-overview", icon: <FaUsers className="text-lg" /> },
  { 
    name: "Bala Bharathi", 
    id: "bala-bharathi", 
    icon: <Image src="/bala.webp" alt="Bala Bharathi Icon" width={24} height={24} className="h-6 w-6 object-contain" /> 
  },
  { 
    name: "Kishora Bharathi", 
    id: "kishora-bharathi", 
    icon: <Image src="/kishor.webp" alt="Kishora Bharathi Icon" width={24} height={24} className="h-6 w-6 object-contain" /> 
  },
  { 
    name: "Bhajan Sandhya", 
    id: "bhajan-sandhya", 
    icon: <Image src="/bhajan.png" alt="Bhajan Sandhya Icon" width={24} height={24} className="h-6 w-6 object-contain" /> 
  },
  { 
    name: "IT Milan", 
    id: "it-milan", 
    icon: <Image src="/itm.webp" alt="IT Milan Icon" width={24} height={24} className="h-6 w-6 object-contain" /> 
  },
  { name: "Sevika Samithi", id: "sevika-samithi", icon: <FaFemale className="text-lg" /> },
];

const Navbar: React.FC<NavbarProps> = ({ sectionRefs }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll to update active section and navbar style
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Update navbar background on scroll
      setScrolled(scrollPosition > 50);
      
      // Find which section is currently in view
      for (const [id, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop - 100;
          const sectionHeight = ref.current.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = (id: string) => {
    const ref = sectionRefs[id];
    const navbarHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
    
    if (ref && ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  return (
    <header 
      ref={headerRef} 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-orange-100" 
          : "bg-white/95 backdrop-blur-xl"
      }`}
    >
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("hero");
          }}
          className="flex items-center transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/rss-logo.jpg"
            alt="RSS Logo"
            width={120} // Reduced width
            height={45} // Reduced height to maintain aspect ratio
            className="h-10 w-auto object-contain" // Slightly smaller Tailwind classes
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className={`px-4 py-2 rounded-xl transition-all duration-300 flex items-center font-medium relative group
                  ${activeSection === item.id 
                    ? "text-white bg-gradient-to-r from-[#7c0f00] to-[#E65911] shadow-lg" 
                    : "text-slate-700 hover:text-[#E65911] hover:bg-orange-50/80"}`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
                
                {/* Hover effect */}
                <span className={`absolute inset-0 rounded-xl bg-gradient-to-r from-[#7c0f00]/10 to-[#E65911]/10 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ${activeSection === item.id ? "opacity-100 scale-100" : ""}`}></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-3 rounded-xl transition-all duration-300 ${
              menuOpen 
                ? "bg-gradient-to-r from-[#7c0f00] to-[#E65911] text-white" 
                : "bg-white/90 backdrop-blur-sm text-[#7c0f00] shadow-md"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation - FIXED HEIGHT ISSUE */}
      <div 
        ref={mobileMenuRef}
        className={`lg:hidden bg-white/98 backdrop-blur-xl overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen 
            ? "max-h-screen border-t border-orange-100 shadow-xl" 
            : "max-h-0"
        }`}
      >
        <div className="py-4 px-4 max-h-[70vh] overflow-y-auto">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                  className={`px-4 py-4 rounded-xl transition-all duration-300 flex items-center font-medium
                    ${activeSection === item.id 
                      ? "text-white bg-gradient-to-r from-[#7c0f00] to-[#E65911] shadow-inner" 
                      : "text-slate-700 hover:text-[#E65911] hover:bg-orange-50/50"}`}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  <span className="flex-1">{item.name}</span>
                  
                  {/* Active indicator for mobile */}
                  {activeSection === item.id && (
                    <div className="ml-2 w-2 h-2 bg-white rounded-full"></div>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Progress bar indicator */}
      <div className="w-full h-1 bg-gray-100 absolute bottom-0">
        <div 
          className="h-full bg-gradient-to-r from-[#7c0f00] to-[#E65911] transition-all duration-300"
          style={{
            width: `${(navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length * 100}%`
          }}
        ></div>
      </div>
    </header>
  );
};

export default Navbar;