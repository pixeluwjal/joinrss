"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaHome, FaTimes, FaBars } from "react-icons/fa";

interface SectionRefs {
  [key: string]: React.RefObject<HTMLElement>;
}

interface NavbarProps {
  sectionRefs: SectionRefs;
}

const navItems = [
  { name: "Home", id: "hero", icon: <FaHome className="text-lg" /> },
  { name: "RSS Overview", id: "rss-overview" },
  { name: "Bala Bharathi", id: "bala-bharathi" },
  { name: "Kishora Bharathi", id: "kishora-bharathi" },
  { name: "Bhajan Sandhya", id: "bhajan-sandhya" },
  { name: "IT Milan", id: "it-milan" },
  { name: "Sevika Samithi", id: "sevika-samithi" },
];

const Navbar: React.FC<NavbarProps> = ({ sectionRefs }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const headerRef = useRef<HTMLElement>(null);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Find which section is currently in view
      for (const [id, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop;
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
      className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg z-50 border-b border-orange-100 transition-all duration-300"
    >
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("hero");
          }}
          className="flex items-center"
        >
          <Image
            src="/rss-logo.jpg"
            alt="RSS Logo"
            width={300}
            height={220}
            className="mr-2"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className={`px-4 py-2 rounded-xl transition-all duration-300 flex items-center font-medium text-slate-700 relative group
                  ${activeSection === item.id 
                    ? "text-orange-600 bg-orange-50 shadow-inner" 
                    : "hover:text-orange-500 hover:bg-orange-50/50"}`}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.name}
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-orange-500 rounded-t-full"></div>
                )}
                
                {/* Hover effect */}
                <span className={`absolute inset-0 rounded-xl bg-orange-500/10 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ${activeSection === item.id ? "opacity-100 scale-100" : ""}`}></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white focus:outline-none transition-all duration-300 hover:shadow-lg"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`lg:hidden bg-white/95 backdrop-blur-xl overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-96 border-t border-orange-100" : "max-h-0"}`}>
        <ul className="flex flex-col space-y-2 py-4 px-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className={`px-4 py-3 rounded-xl transition-all duration-300 flex items-center font-medium
                  ${activeSection === item.id 
                    ? "text-orange-600 bg-orange-50 shadow-inner" 
                    : "text-slate-700 hover:text-orange-500 hover:bg-orange-50/50"}`}
              >
                {item.icon && <span className="mr-3 text-lg">{item.icon}</span>}
                {item.name}
                
                {/* Active indicator for mobile */}
            
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Active section indicator for mobile (when scrolling) */}
    </header>
  );
};

export default Navbar;