'use client';

import React, { RefObject } from 'react';

interface SectionProps {
  id: string;
  title: string;
  titleIcon: React.ReactNode;
  description: string;
  children: React.ReactNode;
  bgColor?: string;
  borderColor?: string;
  titleColor?: string;
  titleBg?: string;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(({
  id,
  title,
  titleIcon,
  description,
  children,
  bgColor = 'bg-white',
  borderColor = 'border-gray-100',
  titleColor = 'text-[#7c0f00]',
  titleBg = 'bg-[#E65911]',
}, ref) => {
  return (
    <section id={id} ref={ref} className="relative">
      <div className={`${bgColor} p-10 rounded-2xl shadow-xl border ${borderColor}`}>
        <div className="flex items-center mb-8">
          <div className={`w-4 h-12 ${titleBg} rounded-full mr-4`}></div>
          <h2 className={`text-4xl font-extrabold ${titleColor} flex items-center`}>
            {titleIcon} {title}
          </h2>
        </div>
        <p className="text-xl mb-6 leading-relaxed">{description}</p>
        {children}
      </div>
    </section>
  );
});

Section.displayName = 'Section';

export default Section;