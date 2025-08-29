'use client';

import { FaArrowRight, FaArrowDown } from './icons';
import RegistrationForm from './RegistrationForm';

interface HeroProps {
  handleScrollToSection: (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => void;
}

const Hero: React.FC<HeroProps> = ({ handleScrollToSection }) => {
  return (
    <div className="relative pt-28 pb-20 md:pb-24 overflow-hidden bg-gradient-to-br from-slate-50 to-amber-50 min-h-screen flex items-center justify-center">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNFNjU5MTEiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMTUuMSIvPjwvZz48L3N2Zz4=')]"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-[#7c0f00]/10 to-[#E65911]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-b from-[#7c0f00]/15 to-[#E65911]/15 rounded-full blur-3xl"></div>

      {/* Main Container */}
      <div className="w-full px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          {/* Left Column: Hero Content */}
          <div className="text-center md:text-left flex flex-col justify-start space-y-12">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight bg-gradient-to-r from-[#7c0f00] to-[#E65911] bg-clip-text text-transparent drop-shadow-lg">
              Welcome to <span className="block mt-2">RSS</span>
            </h1>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-800 leading-tight max-w-2xl mx-auto md:mx-0">
              The Path to National Rejuvenation
            </h3>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto md:mx-0 drop-shadow-sm">
              Building character, fostering culture, and serving the nation
              through various initiatives. Our mission is to unite communities
              and empower individuals to contribute positively to society.
            </p>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto md:mx-0">
              We focus on community development, cultural preservation, and
              social service, creating a strong foundation for future
              generations.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 my-10">
              <a
                href="#rss-overview"
                onClick={(e) => handleScrollToSection(e, 'rss-overview')}
                className="px-8 py-4 bg-gradient-to-r from-[#7c0f00] to-[#E65911] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
              >
                Explore Initiatives{' '}
                <FaArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href="#bhajan-sandhya"
                onClick={(e) => handleScrollToSection(e, 'bhajan-sandhya')}
                className="px-8 py-4 border-2 border-[#E65911] text-[#7c0f00] rounded-xl font-semibold hover:bg-[#E65911] hover:text-white transition-all duration-300 flex items-center justify-center group"
              >
                Join Activities{' '}
                <FaArrowRight className="ml-2 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Stats/Highlights Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-xl mx-auto md:mx-0 pt-6">
              <div className="bg-white/80 backdrop-blur-md rounded-lg p-6 shadow-md border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-[#7c0f00]">
                  50+
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  Initiatives
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-lg p-6 shadow-md border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-[#7c0f00]">
                  1000+
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  Members
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-lg p-6 shadow-md border border-white/20 col-span-2 md:col-span-1">
                <div className="text-3xl md:text-4xl font-bold text-[#7c0f00]">
                  25+
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  Communities Served
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Registration Form with divider */}
          <div className="relative">
            {/* Divider for large screens */}
            <div className="hidden md:block absolute -left-6 top-0 h-full w-px bg-gradient-to-b from-[#7c0f00]/20 to-[#E65911]/20"></div>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;