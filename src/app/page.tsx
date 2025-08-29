"use client";

import { useRef } from "react";
import Head from "next/head";
import {
  FaHistory,
  FaUsers,
  FaFemale,
  FaHeart,
  FaDove,
  FaHandsHelping,
  FaGamepad,
  FaMicrophone,
  FaStar,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "@/components/icons";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  const sectionRefs = {
    "hero": useRef<HTMLElement>(null),
    "rss-overview": useRef<HTMLElement>(null),
    "bala-bharathi": useRef<HTMLElement>(null),
    "kishora-bharathi": useRef<HTMLElement>(null),
    "bhajan-sandhya": useRef<HTMLElement>(null),
    "it-milan": useRef<HTMLElement>(null),
    "sevika-samithi": useRef<HTMLElement>(null),
  };
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const ref = sectionRefs[id];
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
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

      <Navbar sectionRefs={sectionRefs} />
      <section id="hero" ref={sectionRefs["hero"]}>
        <Hero handleScrollToSection={handleScrollToSection} />
      </section>

      <main className="container mx-auto px-6 space-y-32 pb-32">
        <Section
          ref={sectionRefs["rss-overview"]}
          id="rss-overview"
          title="RSS Overview"
          titleIcon={<FaHistory className="mr-3 text-[#E65911]" />}
          description="Rashtriya Swayamsevak Sangh (RSS) is one of the world's largest voluntary organizations, dedicated to nurturing disciplined individuals and building a united, self-reliant, and culturally rooted nation."
          titleBg="bg-[#E65911]"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#7c0f00]/5 to-[#E65911]/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#7c0f00] mb-4 flex items-center">
                <FaDove className="mr-2 text-[#E65911]" /> Key Information
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                  <span>
                    <span className="font-semibold text-[#7c0f00]">
                      Founded:
                    </span>{" "}
                    1925 in Nagpur by Dr. Keshav Baliram Hedgewar
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                  <span>
                    <span className="font-semibold text-[#7c0f00]">
                      Nature:
                    </span>{" "}
                    Voluntary, cultural, and nationalist organization
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                  <span>
                    <span className="font-semibold text-[#7c0f00]">
                      Core Activity:
                    </span>{" "}
                    Shakha - daily gatherings for physical and cultural
                    activities
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#E65911]/5 to-[#7c0f00]/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#7c0f00] mb-4 flex items-center">
                <FaHandsHelping className="mr-2 text-[#E65911]" /> Philosophy &
                Values
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                  <span>
                    Promotes unity, selflessness, and devotion to Bharat Mata
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                  <span>
                    Engages in social service, disaster relief, and cultural
                    preservation
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                  <span>
                    <span className="font-semibold text-[#7c0f00]">Motto:</span>{" "}
                    "Seva Hi Param Dharma" (Service is the highest duty)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Section
          ref={sectionRefs["bala-bharathi"]}
          id="bala-bharathi"
          title="Bala Bharathi"
          titleIcon={
            <Image
              src="/bala.webp"
              alt="Bala Bharathi Icon"
              width={72}
              height={72}
              className="mr-3"
            />
          }
          description="Bala Bharathi is a weekly one-hour activity conducted in neighborhoods such as apartments and layouts."
          bgColor="bg-gradient-to-br from-white to-[#FFE5DE]"
          borderColor="border-orange-100"
          titleColor="text-[#E65911]"
          titleBg="bg-[#7c0f00]"
        >
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-white px-4 py-2 rounded-full border border-[#E65911]/30 shadow-sm flex items-center">
              <FaStar className="text-[#E65911] mr-2" />
              <span className="font-semibold text-[#7c0f00]">
                Age Group:
              </span>{" "}
              5-11 years
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-[#E65911]/30 shadow-sm flex items-center">
              <FaHeart className="text-[#E65911] mr-2" />
              <span className="font-semibold text-[#7c0f00]">Focus:</span>{" "}
              Character Building
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-[#E65911]/30 shadow-sm flex items-center">
              <FaGamepad className="text-[#E65911] mr-2" />
              <span className="font-semibold text-[#7c0f00]">
                Activities:
              </span>{" "}
              Games & Values
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#7c0f00] mb-4">
                Benefits for Participants
              </h3>
              <ul className="space-y-3">
                {[
                  "Positive Health",
                  "Family values",
                  "Concern for Society (Seva)",
                  "Patriotism",
                  "Environment Awareness",
                  "Cultural Roots",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#E65911] rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E65911]/20">
              <h3 className="text-2xl font-semibold text-[#7c0f00] mb-4">
                Importance of Bala Bharathi
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                  <span>Nurtures the body, mind, and spirit of children</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                  <span>
                    Engagement in physical exercises, yoga, games, and creative
                    arts
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                  <span>
                    Develops communication, collaboration, and leadership skills
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                  <span>Strengthens parent-child relationships</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Section
          ref={sectionRefs["kishora-bharathi"]}
          id="kishora-bharathi"
          title="Kishora Bharathi"
          titleIcon={
            <Image
              src="/kishor.webp"
              alt="Kishora Bharathi Icon"
              width={72}
              height={72}
              className="mr-3"
            />
          }
          description="Kishora Bharathi is a vibrant initiative designed for youth in the neighborhood."
          bgColor="bg-gradient-to-br from-white to-[#FFE5DE]"
          borderColor="border-orange-100"
          titleColor="text-[#7c0f00]"
          titleBg="bg-[#E65911]"
        >
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-white px-4 py-2 rounded-full border border-[#7c0f00]/30 shadow-sm flex items-center">
              <FaStar className="text-[#7c0f00] mr-2" />
              <span className="font-semibold text-[#E65911]">
                Age Group:
              </span>{" "}
              12-15 years
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-[#7c0f00]/30 shadow-sm flex items-center">
              <FaMicrophone className="text-[#7c0f00] mr-2" />
              <span className="font-semibold text-[#E65911]">Focus:</span>{" "}
              Leadership Development
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-[#7c0f00]/30 shadow-sm flex items-center">
              <FaGamepad className="text-[#7c0f00] mr-2" />
              <span className="font-semibold text-[#E65911]">
                Activities:
              </span>{" "}
              Skills & Values
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#E65911] mb-4">
                Benefits for Participants
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Bonding with Peers",
                  "Cultural Pride",
                  "Seva & Volunteering",
                  "Indian Games",
                  "Leadership",
                  "Public speaking",
                  "Learn from role models",
                  "Discipline",
                  "Patriotism",
                  "Broadminded Thinking",
                  "Physical Fitness",
                  "Wisdom & Reflection",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-lg border border-[#7c0f00]/10 shadow-sm flex items-center"
                  >
                    <div className="w-2 h-2 bg-[#7c0f00] rounded-full mr-2"></div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#7c0f00]/20">
              <h3 className="text-2xl font-semibold text-[#E65911] mb-4">
                Importance of Kishora Bharathi
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#7c0f00] rounded-full mt-2 mr-3"></div>
                  <span>
                    A journey of character building, cultural awakening, and
                    joyful learning
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#7c0f00] rounded-full mt-2 mr-3"></div>
                  <span>
                    Prepares youth to become confident, compassionate, and
                    committed citizens
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#7c0f00] rounded-full mt-2 mr-3"></div>
                  <span>
                    Improves stamina and strength through Surya Namaskara and
                    Yoga
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Section
          ref={sectionRefs["bhajan-sandhya"]}
          id="bhajan-sandhya"
          title="Bhajan Sandhya"
          titleIcon={
            <Image
              src="/bhajan.png"
              alt="Bhajan Sandhya Icon"
              width={72}
              height={72}
              className="mr-3"
            />
          }
          description=""
          titleBg="bg-[#E65911]"
        >
          <div className="bg-gradient-to-r from-[#7c0f00]/5 to-[#E65911]/5 p-6 rounded-xl mb-8 text-center">
            <p className="text-xl mb-2 flex items-center justify-center">
              <FaCalendarAlt className="mr-2 text-[#7c0f00]" /> Every Saturday
              6:00 PM to 6:30 PM
            </p>
            <p className="text-lg text-[#7c0f00] font-semibold flex items-center justify-center">
              <FaMapMarkerAlt className="mr-2 text-[#E65911]" /> Shri Shakti
              Ganapathi temple, Girinagar
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-white px-4 py-2 rounded-full border border-[#E65911]/30 shadow-sm flex items-center">
              <FaUsers className="text-[#E65911] mr-2" />
              <span className="font-semibold text-[#7c0f0f]">
                Age Group:
              </span>{" "}
              All ages welcome
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-[#E65911]/30 shadow-sm flex items-center">
              <FaHeart className="text-[#E65911] mr-2" />
              <span className="font-semibold text-[#7c0f00]">
                Benefits:
              </span>{" "}
              Spiritual Growth
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-[#E65911]/30 shadow-sm flex items-center">
              <FaMicrophone className="text-[#E65911] mr-2" />
              <span className="font-semibold text-[#7c0f00]">Focus:</span>{" "}
              Devotional Singing
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#7c0f00] mb-6 text-center">
              Importance of Bhajan Sandhya
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Calmness of Mind",
                  desc: "Singing or listening to bhajans soothes the heart and brings inner peace",
                  icon: <FaHeart className="text-[#E65911] text-2xl mb-2" />,
                },
                {
                  title: "Positive Vibrations",
                  desc: "Divine words and melodies create uplifting energy that purifies surroundings",
                  icon: <FaStar className="text-[#E65911] text-2xl mb-2" />,
                },
                {
                  title: "Emotional Balance",
                  desc: "Channel emotions into devotion, reducing anxiety and nurturing joy",
                  icon: <FaDove className="text-[#E65911] text-2xl mb-2" />,
                },
                {
                  title: "Spiritual Connection",
                  desc: "Deepens bond with the Divine, turning moments into spiritual experiences",
                  icon: <FaHistory className="text-[#E65911] text-2xl mb-2" />,
                },
                {
                  title: "Community Bonding",
                  desc: "Strengthens unity, harmony, and shared devotion through collective singing",
                  icon: <FaUsers className="text-[#E65911] text-2xl mb-2" />,
                },
                {
                  title: "Healthy Routine",
                  desc: "Cultivates discipline, optimism, and a sense of togetherness",
                  icon: (
                    <FaCalendarAlt className="text-[#E65911] text-2xl mb-2" />
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-white to-[#FFE5DE] p-5 rounded-xl border border-[#E65911]/20 hover:shadow-md transition-all duration-300 text-center"
                >
                  <div className="flex justify-center">{item.icon}</div>
                  <h4 className="font-bold text-lg text-[#7c0f00] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section
          ref={sectionRefs["it-milan"]}
          id="it-milan"
          title="IT Milan"
          titleIcon={
            <Image
              src="/itm.webp"
              alt="IT Milan Icon"
              width={72}
              height={72}
              className="mr-3"
            />
          }
          description="Shakha is the heart of RSS. Milan is a condensed form of Shakha, organized once a week for busy professionals."
          bgColor="bg-gradient-to-br from-white to-[#FFE5DE]"
          borderColor="border-orange-100"
          titleColor="text-[#E65911]"
          titleBg="bg-[#7c0f00]"
        >
          <div>
            <h3 className="text-2xl font-semibold text-[#7c0f00] mb-6">
              Importance of Shakha in RSS
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Foundation of Discipline & Character",
                  desc: "Trains swayamsevaks in punctuality, discipline, and self-restraint",
                  icon: <FaDove className="text-[#E65911] text-xl mr-2" />,
                },
                {
                  title: "Physical & Mental Development",
                  desc: "Promotes fitness, alertness, and teamwork through exercises and yoga",
                  icon: <FaHeart className="text-[#E65911] text-xl mr-2" />,
                },
                {
                  title: "Cultural & Moral Education",
                  desc: "Patriotic songs, bhajans, and discussions strengthen moral awareness",
                  icon: <FaHistory className="text-[#E65911] text-xl mr-2" />,
                },
                {
                  title: "Leadership & Team Spirit",
                  desc: "Learning leadership, cooperation, and community service through group activities",
                  icon: <FaUsers className="text-[#E65911] text-xl mr-2" />,
                },
                {
                  title: "National Unity & Social Bonding",
                  desc: "Brings together people from all sections of society, fostering brotherhood",
                  icon: (
                    <FaHandsHelping className="text-[#E65911] text-xl mr-2" />
                  ),
                },
                {
                  title: "Service Orientation",
                  desc: 'Cultivates "Seva Parmo Dharma", preparing for social service and nation-building',
                  icon: <FaStar className="text-[#E65911] text-xl mr-2" />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl border border-[#7c0f00]/20 hover:shadow-md transition-all duration-300"
                >
                  <h4 className="font-bold text-lg text-[#E65911] mb-2 flex items-center">
                    {item.icon}
                    {item.title}
                  </h4>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section
          ref={sectionRefs["sevika-samithi"]}
          id="sevika-samithi"
          title="Sevika Samithi"
          titleIcon={<FaFemale className="mr-3 text-[#E65911]" />}
          description="The Rashtreeya Sevika Samithi is the women's organization parallel to the RSS."
          titleBg="bg-[#E65911]"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-gradient-to-br from-[#7c0f00]/5 to-[#E65911]/10 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-semibold text-[#7c0f00] mb-4 flex items-center">
                  <FaHistory className="mr-2 text-[#E65911]" /> Key Information
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                    <span>
                      <span className="font-semibold">Founded:</span> 1936 in
                      Wardha, Maharashtra by Lakshmi Bai Kelkar (Mausiji Kelkar)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                    <span>
                      <span className="font-semibold">Purpose:</span>{" "}
                      Personality development, cultural education, and national
                      service for women
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                    <span>
                      <span className="font-semibold">Motto:</span> "Sanskrit
                      Stree, Samruddha Rashtriya" (Cultured Women, Prosperous
                      Nation)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-[#E65911]/5 to-[#7c0f00]/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-[#7c0f00] mb-4 flex items-center">
                  <FaHandsHelping className="mr-2 text-[#E65911]" /> Activities
                  & Philosophy
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#7c0f00] rounded-full mt-2 mr-3"></div>
                    <span>
                      Emphasizes discipline, service, patriotism, and
                      character-building with focus on women's leadership
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#7c0f00] rounded-full mt-2 mr-3"></div>
                    <span>
                      Daily/weekly Shakhas with exercises, games, yoga,
                      patriotic songs, and discussions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#7c0f00] rounded-full mt-2 mr-3"></div>
                    <span>
                      Programs promoting social service, cultural awareness,
                      women's empowerment, and community welfare
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#7c0f00] rounded-full mt-2 mr-3"></div>
                    <span>
                      Inculcation of self-confidence, self-reliance, and
                      devotion to the nation
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
