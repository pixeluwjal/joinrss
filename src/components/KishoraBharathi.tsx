import React from 'react';
import Image from 'next/image';
import { FaStar, FaMicrophone, FaGamepad, FaUsers, FaBullhorn, FaHandsHelping, FaRunning, FaBrain, FaHeart, FaSeedling, FaMedal, FaComments } from 'react-icons/fa';

const KishoraBharathi = React.forwardRef<HTMLElement, { id: string }>(({ id }, ref) => {
  return (
    <section
      ref={ref}
      id={id}
      className="relative py-16 md:py-24 px-4 bg-gradient-to-br from-white to-[#FFF0ED] overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#FFD9CF] rounded-full -translate-y-1/2 -translate-x-1/2 opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFE5DE] rounded-full translate-x-1/2 translate-y-1/2 opacity-50"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mb-12">
          <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6 md:mb-0 md:mr-6">
            <Image
              src="/kishor.webp"
              alt="Kishora Bharathi Icon"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-[#7c0f00] mb-3">
              Kishora Bharathi
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              A vibrant initiative designed for youth in the neighborhood.
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="flex flex-wrap justify-center gap-5 mb-16">
          <div className="bg-white p-5 rounded-2xl border border-[#7c0f00]/20 shadow-lg flex flex-col items-center text-center w-full sm:max-w-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 rounded-full bg-[#FFE5DE] flex items-center justify-center mb-4">
              <FaStar className="text-2xl text-[#7c0f00]" />
            </div>
            <h3 className="font-bold text-[#E65911] mb-2">Age Group</h3>
            <p className="text-gray-700">12-15 years</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#7c0f00]/20 shadow-lg flex flex-col items-center text-center w-full sm:max-w-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 rounded-full bg-[#FFE5DE] flex items-center justify-center mb-4">
              <FaMicrophone className="text-2xl text-[#7c0f00]" />
            </div>
            <h3 className="font-bold text-[#E65911] mb-2">Focus</h3>
            <p className="text-gray-700">Leadership Development</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#7c0f00]/20 shadow-lg flex flex-col items-center text-center w-full sm:max-w-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 rounded-full bg-[#FFE5DE] flex items-center justify-center mb-4">
              <FaGamepad className="text-2xl text-[#7c0f00]" />
            </div>
            <h3 className="font-bold text-[#E65911] mb-2">Activities</h3>
            <p className="text-gray-700">Skills & Values</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Benefits Section */}
          <div className="bg-white p-8 rounded-2xl border border-[#7c0f00]/20 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-[#E65911] mb-6 pb-3 border-b border-[#7c0f00]/30 flex items-center">
              <FaStar className="text-[#7c0f00] mr-3" />
              Benefits for Participants
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: <FaUsers className="text-[#7c0f00]" />, text: "Bonding with Peers" },
                { icon: <FaHeart className="text-[#7c0f00]" />, text: "Cultural Pride" },
                { icon: <FaHandsHelping className="text-[#7c0f00]" />, text: "Seva & Volunteering" },
                { icon: <FaGamepad className="text-[#7c0f00]" />, text: "Indian Games" },
                { icon: <FaMedal className="text-[#7c0f00]" />, text: "Leadership" },
                { icon: <FaBullhorn className="text-[#7c0f00]" />, text: "Public speaking" },
                { icon: <FaSeedling className="text-[#7c0f00]" />, text: "Learn from role models" },
                { icon: <FaBrain className="text-[#7c0f00]" />, text: "Discipline" },
                { icon: <FaHeart className="text-[#7c0f00]" />, text: "Patriotism" },
                { icon: <FaComments className="text-[#7c0f00]" />, text: "Broadminded Thinking" },
                { icon: <FaRunning className="text-[#7c0f00]" />, text: "Physical Fitness" },
                { icon: <FaBrain className="text-[#7c0f00]" />, text: "Wisdom & Reflection" },
              ].map((item, index) => (
                <div key={index} className="flex items-start p-3 rounded-lg bg-[#FFF7F5]">
                  <span className="text-lg mr-3 mt-0.5">{item.icon}</span>
                  <span className="text-gray-800">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Importance Section */}
          <div className="bg-gradient-to-br from-[#E65911] to-[#7c0f00] p-8 rounded-2xl shadow-lg text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 pb-3 border-b border-white/30">
              Importance of Kishora Bharathi
            </h3>
            <ul className="space-y-4">
              {[
                "A journey of character building, cultural awakening, and joyful learning",
                "Prepares youth to become confident, compassionate, and committed citizens",
                "Improves stamina and strength through Surya Namaskara and Yoga",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-5 h-5 bg-white rounded-full mt-1 mr-4 flex-shrink-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#7c0f00] rounded-full"></div>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#hero"
            className="inline-block bg-gradient-to-r from-[#7c0f00] to-[#E65911] text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Join Kishora Bharathi Today
          </a>
        </div>
      </div>
    </section>
  );
});

KishoraBharathi.displayName = 'KishoraBharathi';

export default KishoraBharathi;