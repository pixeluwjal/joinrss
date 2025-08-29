'use client';

import { FaArrowRight, FaArrowDown, FaUsers, FaHandsHelping, FaHeart } from 'react-icons/fa';
import RegistrationForm from './RegistrationForm';

interface HeroProps {
  handleScrollToSection: (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => void;
}

const Hero: React.FC<HeroProps> = ({ handleScrollToSection }) => {
  return (
    <div className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden bg-gradient-to-br from-[#fef7f5] to-[#ffece5] min-h-screen flex items-center">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNFNjU5MTEiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMTUiLz48L2c+PC9zdmc+')]"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#FFD9CF] rounded-full opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#FFE5DE] rounded-full opacity-60"></div>

      {/* Main Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              <span className="bg-gradient-to-r from-[#7c0f00] to-[#E65911] bg-clip-text text-transparent">
                Welcome to RSS
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#7c0f00] mb-6 max-w-2xl mx-auto lg:mx-0">
              The Path to National Rejuvenation
            </h2>

            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Building character, fostering culture, and serving the nation through various initiatives. 
              Our mission is to unite communities and empower individuals to contribute positively to society.
            </p>

            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              We focus on community development, cultural preservation, and social service, 
              creating a strong foundation for future generations.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#rss-overview"
                onClick={(e) => handleScrollToSection(e, 'rss-overview')}
                className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#7c0f00] to-[#E65911] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
              >
                Explore Initiatives{' '}
                <FaArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href="#bhajan-sandhya"
                onClick={(e) => handleScrollToSection(e, 'bhajan-sandhya')}
                className="px-6 py-3 md:px-8 md:py-4 border-2 border-[#E65911] text-[#7c0f00] rounded-xl font-semibold hover:bg-[#E65911] hover:text-white transition-all duration-300 flex items-center justify-center group"
              >
                Join Activities{' '}
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Stats/Highlights Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0">
              <div className="bg-white p-4 rounded-xl shadow-md border border-[#E65911]/20">
                <div className="text-2xl md:text-3xl font-bold text-[#7c0f00] flex items-center justify-center">
                  50+
                </div>
                <div className="text-sm text-gray-600 flex items-center justify-center">
                  <FaHandsHelping className="mr-1 text-[#E65911]" /> Initiatives
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md border border-[#E65911]/20">
                <div className="text-2xl md:text-3xl font-bold text-[#7c0f00] flex items-center justify-center">
                  1000+
                </div>
                <div className="text-sm text-gray-600 flex items-center justify-center">
                  <FaUsers className="mr-1 text-[#E65911]" /> Members
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Registration Form */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-[#E65911]/20">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;