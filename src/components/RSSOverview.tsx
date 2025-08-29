import React from 'react';
import { FaHistory, FaDove, FaHandsHelping, FaGlobe, FaUsers, FaHeart, FaFlag, FaMedal } from 'react-icons/fa';

const RSSOverview = React.forwardRef<HTMLElement, { id: string }>(({ id }, ref) => {
  return (
    <section
      ref={ref}
      id={id}
      className="relative py-16 md:py-24 px-4 bg-gradient-to-br from-white to-[#FFF0ED] overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFD9CF] rounded-full -translate-y-1/2 translate-x-1/2 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFE5DE] rounded-full -translate-x-1/2 translate-y-1/2 opacity-50"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#E65911] to-[#7c0f00] flex items-center justify-center mb-6">
            <FaHistory className="text-3xl md:text-4xl text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#7c0f00] mb-3">
            Overview
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Rashtriya Swayamsevak Sangh (RSS) is one of the world's largest voluntary organizations, dedicated to nurturing disciplined individuals and building a united, self-reliant, and culturally rooted nation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Key Information Card */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-[#E65911]/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#FFE5DE] flex items-center justify-center mr-4">
                <FaDove className="text-xl text-[#7c0f00]" />
              </div>
              <h3 className="text-2xl font-bold text-[#7c0f00]">Key Information</h3>
            </div>
            
            <div className="space-y-5">
              <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-[#7c0f00]/5 to-transparent">
                <div className="w-3 h-3 bg-[#E65911] rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-[#7c0f00]">Founded:</span> 1925 in Nagpur by Dr. Keshav Baliram Hedgewar
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-[#7c0f00]/5 to-transparent">
                <div className="w-3 h-3 bg-[#E65911] rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-[#7c0f00]">Nature:</span> Voluntary, cultural, and nationalist organization
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-[#7c0f00]/5 to-transparent">
                <div className="w-3 h-3 bg-[#E65911] rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-[#7c0f00]">Core Activity:</span> Shakha - daily gatherings for physical and cultural activities
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy & Values Card */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-[#E65911]/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#FFE5DE] flex items-center justify-center mr-4">
                <FaHandsHelping className="text-xl text-[#7c0f00]" />
              </div>
              <h3 className="text-2xl font-bold text-[#7c0f00]">Philosophy & Values</h3>
            </div>
            
            <div className="space-y-5">
              <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-[#E65911]/5 to-transparent">
                <div className="w-3 h-3 bg-[#7c0f00] rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                <div>
                  Promotes unity, selflessness, and devotion to Bharat Mata
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-[#E65911]/5 to-transparent">
                <div className="w-3 h-3 bg-[#7c0f00] rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                <div>
                  Engages in social service, disaster relief, and cultural preservation
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-[#E65911]/5 to-transparent">
                <div className="w-3 h-3 bg-[#7c0f00] rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-[#7c0f00]">Motto:</span> "Seva Hi Param Dharma" (Service is the highest duty)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#7c0f00] mb-10 text-center">Core Values of RSS</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaUsers className="text-2xl" />, title: "Unity", desc: "Bringing together people from all walks of life" },
              { icon: <FaHeart className="text-2xl" />, title: "Selflessness", desc: "Putting nation and community before self" },
              { icon: <FaFlag className="text-2xl" />, title: "Patriotism", desc: "Dedication to the service of the nation" },
              { icon: <FaMedal className="text-2xl" />, title: "Discipline", desc: "Building character through daily practice" },
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
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Join the RSS Movement</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            Become part of a nationwide network dedicated to character building, cultural preservation, and nation service
          </p>
          <a
            href="#hero"
            className="inline-block bg-white text-[#7c0f00] font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Learn More About RSS
          </a>
        </div>
      </div>
    </section>
  );
});

RSSOverview.displayName = 'RSSOverview';

export default RSSOverview;