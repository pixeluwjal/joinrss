'use client';

import { useRef } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RSSOverview from '@/components/RSSOverview';
import BalaBharathi from '@/components/BalaBharathi';
import KishoraBharathi from '@/components/KishoraBharathi';
import BhajanSandhya from '@/components/BhajanSandhya';
import ITMilan from '@/components/ITMilan';
import SevikaSamithi from '@/components/SevikaSamithi';
import Footer from '@/components/Footer';

export default function Home() {
  const sectionRefs = {
    'hero': useRef<HTMLElement>(null),
    'rss-overview': useRef<HTMLElement>(null),
    'bala-bharathi': useRef<HTMLElement>(null),
    'kishora-bharathi': useRef<HTMLElement>(null),
    'bhajan-sandhya': useRef<HTMLElement>(null),
    'it-milan': useRef<HTMLElement>(null),
    'sevika-samithi': useRef<HTMLElement>(null),
    'register': useRef<HTMLElement>(null),
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const ref = sectionRefs[id as keyof typeof sectionRefs];
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 font-sans min-h-screen overflow-x-hidden">
      <Head>
        <title>RSS - Cultural Organization</title>
        <meta
          name="description"
          content="Learn about RSS and its various initiatives including Bala Bharathi, Kishora Bharathi, and more"
        />
      </Head>

      {/* Pass the sectionRefs object to the Navbar component */}
      <Navbar sectionRefs={sectionRefs} />

      <main className="w-full pb-0"> {/* Removed all spacing */}
        <section id="hero" ref={sectionRefs['hero']} className="w-full">
          <Hero handleScrollToSection={handleScrollToSection} />
        </section>

        <section ref={sectionRefs['rss-overview']} id="rss-overview" className="w-full">
          <RSSOverview id="rss-overview" />
        </section>

        <section ref={sectionRefs['bala-bharathi']} id="bala-bharathi" className="w-full">
          <BalaBharathi id="bala-bharathi" />
        </section>

        <section ref={sectionRefs['kishora-bharathi']} id="kishora-bharathi" className="w-full">
          <KishoraBharathi id="kishora-bharathi" />
        </section>

        <section ref={sectionRefs['bhajan-sandhya']} id="bhajan-sandhya" className="w-full">
          <BhajanSandhya id="bhajan-sandhya" />
        </section>

        <section ref={sectionRefs['it-milan']} id="it-milan" className="w-full">
          <ITMilan id="it-milan" />
        </section>

        <section ref={sectionRefs['sevika-samithi']} id="sevika-samithi" className="w-full">
          <SevikaSamithi id="sevika-samithi" />
        </section>
      </main>

      <Footer handleScrollToSection={handleScrollToSection} />
    </div>
  );
}