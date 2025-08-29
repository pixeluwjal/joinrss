import React from 'react';
import { FaFemale, FaHistory, FaHandsHelping, FaCalendarAlt, FaUsers, FaHeart, FaGlobe, FaMedal, FaSeedling, FaStar } from 'react-icons/fa';

const SevikaSamithi = React.forwardRef<HTMLElement, { id: string }>(({ id }, ref) => {
  return (
    <section
      ref={ref}
      id={id}
      className="relative py-16 md:py-24 px-4 bg-gradient-to-br from-[#fef7f5] to-[#ffece5] overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFD9CF] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FFE5DE] rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#E65911] to-[#7c0f00] flex items-center justify-center mb-6">
            <FaFemale className="text-3xl md:text-4xl text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#7c0f00] mb-3">
            Sevika Samithi
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            The Rashtreeya Sevika Samithi is the women's organization parallel to the RSS.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Key Information Card */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-[#E65911]/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#FFE5DE] flex items-center justify-center mr-4">
                <FaHistory className="text-xl text-[#7c0f00]" />
              </div>
              <h3 className="text-2xl font-bold text-[#7c0f00]">Key Information</h3>
            </div>
            
            <div className="space-y-5">
              <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-[#7c0f00]/5 to-transparent">
                <div className="w-3 h-3 bg-[#E65911] rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-[#7c0f00]">Founded:</span> 1936 in
                  Wardha, Maharashtra by Lakshmi Bai Kelkar (Mausiji Kelkar)
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-[#7c0f00]/5 to-transparent">
                <div className="w-3 h-3 bg-[#E65911] rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-[#7c0f00]">Purpose:</span>{" "}
                  Personality development, cultural education, and national
                  service for women
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-[#7c0f00]/5 to-transparent">
                <div className="w-3 h-3 bg-[#E65911] rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-[#7c0f00]">Motto:</span> "Sanskrit
                  Stree, Samruddha Rashtriya" (Cultured Women, Prosperous
                  Nation)
                </div>
              </div>
            </div>
          </div>

          {/* Activities & Philosophy Card */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-[#E65911]/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#FFE5DE] flex items-center justify-center mr-4">
                <FaHandsHelping className="text-xl text-[#7c0f00]" />
              </div>
              <h3 className="text-2xl font-bold text-[#7c0f00]">Activities & Philosophy</h3>
            </div>
            
            <div className="space-y-5">
              <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-[#E65911]/5 to-transparent">
                <div className="w-3 h-3 bg-[#7c0f00] rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                <div>
                  Emphasizes discipline, service, patriotism, and
                  character-building with focus on women's leadership
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-[#E65911]/5 to-transparent">
                <div className="w-3 h-3 bg-[#7c0f00] rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                <div>
                  Daily/weekly Shakhas with exercises, games, yoga,
                  patriotic songs, and discussions
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-[#E65911]/5 to-transparent">
                <div className="w-3 h-3 bg-[#7c0f00] rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                <div>
                  Programs promoting social service, cultural awareness,
                  women's empowerment, and community welfare
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-[#E65911]/5 to-transparent">
                <div className="w-3 h-3 bg-[#7c0f00] rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                <div>
                  Inculcation of self-confidence, self-reliance, and
                  devotion to the nation
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#7c0f00] mb-10 text-center">Core Values & Impact</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaUsers className="text-2xl" />, title: "Women Empowerment", desc: "Building confident female leaders" },
              { icon: <FaHeart className="text-2xl" />, title: "Cultural Preservation", desc: "Promoting Indian traditions" },
              { icon: <FaGlobe className="text-2xl" />, title: "Social Service", desc: "Community welfare initiatives" },
              { icon: <FaMedal className="text-2xl" />, title: "National Pride", desc: "Fostering patriotism" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-5 rounded-xl border border-[#E65911]/20 shadow-md text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-[#FFE5DE] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FFD9CF] transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="font-bold text-[#7c0f00] mb-2">{item.title}</h4>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#7c0f00] to-[#E65911] p-8 md:p-10 rounded-2xl shadow-lg text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Join the Movement</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            Become part of a nationwide network of women dedicated to personal growth and national service
          </p>
          <a href="#hero" className="inline-block bg-white text-[#7c0f00] font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            Join Sevika Samithi
          </a>
        </div>
      </div>
    </section>
  );
});

SevikaSamithi.displayName = 'SevikaSamithi';

export default SevikaSamithi;