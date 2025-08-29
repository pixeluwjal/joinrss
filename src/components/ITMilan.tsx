import React from 'react';
import Image from 'next/image';
import { FaDove, FaHeart, FaHistory, FaUsers, FaHandsHelping, FaStar, FaClock, FaBrain, FaMedal, FaHandshake, FaGlobe } from 'react-icons/fa';

const ITMilan = React.forwardRef<HTMLElement, { id: string }>(({ id }, ref) => {
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
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mb-12">
          <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6 md:mb-0 md:mr-6">
            <Image
              src="/itm.webp"
              alt="IT Milan Icon"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-[#E65911] mb-3">
              IT Milan
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              Shakha is the heart of RSS. Milan is a condensed form of Shakha, organized once a week for busy professionals.
            </p>
          </div>
        </div>

        {/* Section Title */}
        <div className="mb-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-[#7c0f00] mb-4 relative inline-block">
            Importance of Shakha in RSS
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#7c0f00] to-[#E65911] mt-2 rounded-full"></div>
          </h3>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Foundation of Discipline & Character",
              desc: "Trains swayamsevaks in punctuality, discipline, and self-restraint",
              icon: <FaClock className="text-3xl text-[#7c0f00]" />,
              bg: "bg-gradient-to-br from-white to-[#FFE5DE]",
            },
            {
              title: "Physical & Mental Development",
              desc: "Promotes fitness, alertness, and teamwork through exercises and yoga",
              icon: <FaHeart className="text-3xl text-[#7c0f00]" />,
              bg: "bg-gradient-to-br from-white to-[#FFE5DE]",
            },
            {
              title: "Cultural & Moral Education",
              desc: "Patriotic songs, bhajans, and discussions strengthen moral awareness",
              icon: <FaBrain className="text-3xl text-[#7c0f00]" />,
              bg: "bg-gradient-to-br from-white to-[#FFE5DE]",
            },
            {
              title: "Leadership & Team Spirit",
              desc: "Learning leadership, cooperation, and community service through group activities",
              icon: <FaMedal className="text-3xl text-[#7c0f00]" />,
              bg: "bg-gradient-to-br from-white to-[#FFE5DE]",
            },
            {
              title: "National Unity & Social Bonding",
              desc: "Brings together people from all sections of society, fostering brotherhood",
              icon: <FaHandshake className="text-3xl text-[#7c0f00]" />,
              bg: "bg-gradient-to-br from-white to-[#FFE5DE]",
            },
            {
              title: "Service Orientation",
              desc: 'Cultivates "Seva Parmo Dharma", preparing for social service and nation-building',
              icon: <FaGlobe className="text-3xl text-[#7c0f00]" />,
              bg: "bg-gradient-to-br from-white to-[#FFE5DE]",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`${item.bg} p-6 rounded-2xl border border-[#E65911]/20 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1`}
            >
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 rounded-full bg-[#FFE5DE] flex items-center justify-center mb-4 group-hover:bg-[#FFD9CF] transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="font-bold text-xl text-[#7c0f00] mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-700 flex-grow">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-r from-[#7c0f00] to-[#E65911] p-8 md:p-10 rounded-2xl shadow-lg text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Weekly Schedule</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Every Sunday: 7:00 AM - 8:30 AM</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Location: Local Community Ground</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Open to all professionals</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-3">Benefits for IT Professionals</h4>
              <p className="opacity-90">
                Join like-minded professionals to develop leadership skills, network with peers, and contribute to nation-building while maintaining your busy work schedule.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a
            href="#hero"
            className="inline-block bg-gradient-to-r from-[#E65911] to-[#7c0f00] text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Join IT Milan Today
          </a>
        </div>
      </div>
    </section>
  );
});

ITMilan.displayName = 'ITMilan';

export default ITMilan;