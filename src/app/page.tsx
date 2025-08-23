'use client';

import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaFacebook, FaInstagram, FaYoutube,
  FaChild, FaUsers, FaMusic,
  FaLaptopCode, FaFemale, FaHeart,
  FaHistory, FaDove, FaHandsHelping,
  FaGamepad, FaMicrophone, FaStar,
  FaCalendarAlt, FaMapMarkerAlt, FaPhone,
  FaEnvelope, FaArrowRight, FaArrowDown, FaCommentDots
} from 'react-icons/fa';

// RegistrationForm component
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    locality: '',
    interests: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Define a validation state for interests
  const [interestsError, setInterestsError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const updatedInterests = checked
        ? [...prevData.interests, value]
        : prevData.interests.filter((interest) => interest !== value);
      
      // Update validation state
      setInterestsError(updatedInterests.length === 0);

      return {
        ...prevData,
        interests: updatedInterests,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Custom validation for interests
    if (formData.interests.length === 0) {
      setInterestsError(true);
      setSubmitMessage('Please select at least one Area of Interest.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    // **Replace this URL with your Google Apps Script Web App URL**
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbwdhSqh1Cw4pTK0tZMlhkVOXEBukgfzXAMGOAylwlgxTt-QqfgxHSvYJUrcjOEfo8bQ/exec';

    // Prepare data for Google Sheets
    const dataToSend = {
      name: formData.name,
      mobileNumber: formData.mobileNumber,
      email: formData.email,
      locality: formData.locality,
      interests: formData.interests.join(', '), // Join array to a string
    };

    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(dataToSend),
      });

      if (response.ok || response.type === 'opaque') {
        setSubmitMessage("Thank you for your interest! We have received your information.");
        setFormData({
          name: '',
          mobileNumber: '',
          email: '',
          locality: '',
          interests: [],
        });
        setInterestsError(false); // Reset error state on success
      } else {
        setSubmitMessage("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage("An error occurred. Please check your network connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const areaOfInterestOptions = [
    { label: 'Bala Bharathi (5-12 years)', value: 'bala-bharathi' },
    { label: 'Kishora Bharathi (12-16 years)', value: 'kishora-bharathi' },
    { label: 'Yuva (boys and girls of 18-28 years)', value: 'yuva' },
    { label: 'IT Milan (male working professionals)', value: 'it-milan' },
    { label: 'Sevika Samithi (female homemakers and professionals)', value: 'sevika-samithi' },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#7c0f00] mb-8 text-center">
        Register for Our Initiatives
      </h2>
      <p className="text-xl text-gray-700 mb-8 text-center">
        Fill out this form to get involved and learn more.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <motion.div variants={fadeIn}>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#E65911] focus:border-[#E65911]"
            required
          />
        </motion.div>

        {/* Mobile Number Field */}
        <motion.div variants={fadeIn}>
          <label htmlFor="mobileNumber" className="block text-lg font-medium text-gray-700">Mobile Number</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#E65911] focus:border-[#E65911]"
            required
          />
        </motion.div>

        {/* Email Field */}
        <motion.div variants={fadeIn}>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#E65911] focus:border-[#E65911]"
            required
          />
        </motion.div>

        {/* Locality Field */}
        <motion.div variants={fadeIn}>
          <label htmlFor="locality" className="block text-lg font-medium text-gray-700">Locality</label>
          <input
            type="text"
            id="locality"
            name="locality"
            value={formData.locality}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#E65911] focus:border-[#E65911]"
            required
          />
        </motion.div>

        {/* Area of Interest Checkboxes */}
        <motion.div variants={fadeIn}>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Area of Interest (select one or more)
          </label>
          <div className={`space-y-2 rounded-md p-4 transition-colors duration-300 ${interestsError ? 'bg-red-50 border-red-300' : 'bg-white border border-gray-200'}`}>
            {areaOfInterestOptions.map((option) => (
              <div key={option.value} className="flex items-center">
                <input
                  type="checkbox"
                  id={option.value}
                  name="interests"
                  value={option.value}
                  checked={formData.interests.includes(option.value)}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-[#7c0f00] border-gray-300 rounded focus:ring-[#E65911]"
                />
                <label htmlFor={option.value} className="ml-2 block text-sm text-gray-900">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
          <AnimatePresence>
            {interestsError && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 text-sm text-red-600 font-semibold"
              >
                Please select at least one area of interest.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
          className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-[#7c0f00] to-[#E65911] hover:from-[#5a0c00] hover:to-orange-600 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Register'} <FaArrowRight className="ml-2" />
        </motion.button>
      </form>

      <AnimatePresence>
        {submitMessage && (
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`mt-6 text-center font-semibold text-lg ${submitMessage.includes('Failed') || submitMessage.includes('error') ? 'text-red-600' : 'text-green-600'}`}
          >
            {submitMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main Home component
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('rss-overview');

  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
      });
    }
    setMenuOpen(false); // Close the menu after clicking
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 font-sans min-h-screen overflow-x-hidden">
      <Head>
        <title>RSS - Cultural Organization</title>
        <meta name="description" content="Learn about RSS and its various initiatives including Bala Bharathi, Kishora Bharathi, and more" />
      </Head>

      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="fixed top-0 left-0 w-full bg-[#7c0f00] shadow-2xl z-50"
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a
            href="#rss-overview"
            onClick={handleScroll}
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <div className="text-3xl font-bold text-[#E65911] bg-gradient-to-r from-[#E65911] to-orange-400 bg-clip-text text-transparent flex items-center">
              <Image
                src="/rss-logo.jpg"
                alt="RSS Logo"
                width={230}
                height={220}
                className="mr-2"
              />
            </div>
          </motion.a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4 font-semibold text-lg">
            {[
              { name: 'RSS Overview', icon: <FaHistory className="mr-2" /> },
              { name: 'Bala Bharathi', icon: <FaChild className="mr-2" /> },
              { name: 'Kishora Bharathi', icon: <FaUsers className="mr-2" /> },
              { name: 'Bhajan Sandhya', icon: <FaMusic className="mr-2" /> },
              { name: 'IT Milan', icon: <FaLaptopCode className="mr-2" /> },
              { name: 'Sevika Samithi', icon: <FaFemale className="mr-2" /> },
              { name: 'Register', icon: <FaEnvelope className="mr-2" /> }
            ].map((item, index) => {
              const id = item.name.toLowerCase().replace(/\s+/g, '-');
              return (
                <motion.li
                  key={index}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={`#${id}`}
                    onClick={handleScroll}
                    className={`px-3 py-2 rounded-lg transition-all duration-300 flex items-center ${activeSection === id ? 'bg-[#E65911] text-white shadow-lg' : 'text-white hover:text-[#E65911]'}`}
                  >
                    {item.icon}
                    {item.name}
                  </a>
                </motion.li>
              );
            })}
          </ul>

          {/* Mobile Hamburger */}
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="md:hidden"
          >
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none p-2 rounded-lg bg-[#E65911]/20 transition-all duration-300"
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </motion.div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#7c0f00] overflow-hidden"
            >
              <ul className="flex flex-col space-y-3 py-4 px-6">
                {[
                  { name: 'RSS Overview', icon: <FaHistory className="mr-3" /> },
                  { name: 'Bala Bharathi', icon: <FaChild className="mr-3" /> },
                  { name: 'Kishora Bharathi', icon: <FaUsers className="mr-3" /> },
                  { name: 'Bhajan Sandhya', icon: <FaMusic className="mr-3" /> },
                  { name: 'IT Milan', icon: <FaLaptopCode className="mr-3" /> },
                  { name: 'Sevika Samithi', icon: <FaFemale className="mr-3" /> },
                  { name: 'Register', icon: <FaEnvelope className="mr-3" /> }
                ].map((item, index) => {
                  const id = item.name.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <motion.li
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={`#${id}`}
                        onClick={handleScroll}
                        className={`block px-4 py-3 rounded-lg transition-all duration-300 flex items-center ${activeSection === id ? 'bg-[#E65911] text-white' : 'text-white hover:bg-[#E65911]/30'}`}
                      >
                        {item.icon}
                        {item.name}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <div className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ x: '-100%', y: '-100%' }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute left-1/4 top-0 w-96 h-96 bg-[#E65911]/10 rounded-full filter blur-3xl"
          ></motion.div>
          <motion.div
            initial={{ x: '100%', y: '100%' }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute right-1/4 bottom-0 w-96 h-96 bg-[#7c0f00]/10 rounded-full filter blur-3xl"
          ></motion.div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#7c0f00] to-[#E65911] bg-clip-text text-transparent"
          >
            Welcome to RSS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10"
          >
            Building character, fostering culture, and serving the nation through various initiatives
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#rss-overview"
              onClick={handleScroll}
              className="px-6 py-3 bg-gradient-to-r from-[#7c0f00] to-[#E65911] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
            >
              Explore Initiatives <FaArrowDown className="ml-2" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#bhajan-sandhya"
              onClick={handleScroll}
              className="px-6 py-3 border-2 border-[#E65911] text-[#7c0f00] rounded-lg font-semibold hover:bg-[#E65911] hover:text-white transition-all duration-300 flex items-center"
            >
              Join Activities <FaArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 space-y-32 pb-32">

        {/* RSS Overview Section */}
        <motion.section
          id="rss-overview"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="relative"
        >
          <div className="absolute -left-16 top-1/3 w-72 h-72 bg-[#E65911]/5 rounded-full filter blur-3xl -z-10"></div>
          <motion.div variants={fadeIn} className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="w-4 h-12 bg-[#E65911] rounded-full mr-4"></div>
              <h2 className="text-4xl font-extrabold text-[#7c0f00] flex items-center">
                <FaHistory className="mr-3 text-[#E65911]" /> RSS Overview
              </h2>
            </div>
            <p className="text-xl mb-6 leading-relaxed">Rashtriya Swayamsevak Sangh (RSS) is one of the world's largest voluntary organizations, dedicated to nurturing disciplined individuals and building a united, self-reliant, and culturally rooted nation.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={scaleIn} className="bg-gradient-to-br from-[#7c0f00]/5 to-[#E65911]/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-[#7c0f00] mb-4 flex items-center">
                  <FaDove className="mr-2 text-[#E65911]" /> Key Information
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                    <span><span className="font-semibold text-[#7c0f00]">Founded:</span> 1925 in Nagpur by Dr. Keshav Baliram Hedgewar</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                    <span><span className="font-semibold text-[#7c0f00]">Nature:</span> Voluntary, cultural, and nationalist organization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                    <span><span className="font-semibold text-[#7c0f00]">Core Activity:</span> Shakha - daily gatherings for physical and cultural activities</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={scaleIn} className="bg-gradient-to-br from-[#E65911]/5 to-[#7c0f00]/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-[#7c0f00] mb-4 flex items-center">
                  <FaHandsHelping className="mr-2 text-[#E65911]" /> Philosophy & Values
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                    <span>Promotes unity, selflessness, and devotion to Bharat Mata</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                    <span>Engages in social service, disaster relief, and cultural preservation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                    <span><span className="font-semibold text-[#7c0f00]">Motto:</span> "Seva Hi Param Dharma" (Service is the highest duty)</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Bala Bharathi Section */}
        <motion.section
          id="bala-bharathi"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="relative"
        >
          <div className="absolute -right-16 top-0 w-72 h-72 bg-[#7c0f00]/5 rounded-full filter blur-3xl -z-10"></div>
          <motion.div variants={fadeIn} className="bg-gradient-to-br from-white to-[#FFE5DE] p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100">
            <div className="flex items-center mb-8">
              <div className="w-4 h-12 bg-[#7c0f00] rounded-full mr-4"></div>
              <h2 className="text-4xl font-extrabold text-[#E65911] flex items-center">
                <FaChild className="mr-3 text-[#7c0f00]" /> Bala Bharathi
              </h2>
            </div>

            <p className="text-xl mb-6 leading-relaxed">Bala Bharathi is a weekly one-hour activity conducted in neighborhoods such as apartments and layouts.</p>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.div
                whileHover={{ y: -3 }}
                className="bg-white px-4 py-2 rounded-full border border-[#E65911]/30 shadow-sm flex items-center"
              >
                <FaStar className="text-[#E65911] mr-2" />
                <span className="font-semibold text-[#7c0f00]">Age Group:</span> 5-11 years
              </motion.div>
              <motion.div
                whileHover={{ y: -3 }}
                className="bg-white px-4 py-2 rounded-full border border-[#E65911]/30 shadow-sm flex items-center"
              >
                <FaHeart className="text-[#E65911] mr-2" />
                <span className="font-semibold text-[#7c0f00]">Focus:</span> Character Building
              </motion.div>
              <motion.div
                whileHover={{ y: -3 }}
                className="bg-white px-4 py-2 rounded-full border border-[#E65911]/30 shadow-sm flex items-center"
              >
                <FaGamepad className="text-[#E65911] mr-2" />
                <span className="font-semibold text-[#7c0f00]">Activities:</span> Games & Values
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#7c0f00] mb-4">Benefits for Participants</h3>
                <motion.ul variants={staggerChildren} className="space-y-3">
                  {['Positive Health', 'Family values', 'Concern for Society (Seva)', 'Patriotism', 'Environment Awareness', 'Cultural Roots'].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeIn}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-[#E65911] rounded-full mr-3"></div>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <motion.div variants={scaleIn} className="bg-white p-6 rounded-xl border border-[#E65911]/20">
                <h3 className="text-2xl font-semibold text-[#7c0f00] mb-4">Importance of Bala Bharathi</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                    <span>Nurtures the body, mind, and spirit of children</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                    <span>Engagement in physical exercises, yoga, games, and creative arts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                    <span>Develops communication, collaboration, and leadership skills</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                    <span>Strengthens parent-child relationships</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Kishora Bharathi Section */}
        <motion.section
          id="kishora-bharathi"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="relative"
        >
          <div className="absolute -left-16 bottom-0 w-72 h-72 bg-[#E65911]/5 rounded-full filter blur-3xl -z-10"></div>
          <motion.div variants={fadeIn} className="bg-gradient-to-br from-white to-[#FFE5DE] p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100">
            <div className="flex items-center mb-8">
              <div className="w-4 h-12 bg-[#E65911] rounded-full mr-4"></div>
              <h2 className="text-4xl font-extrabold text-[#7c0f00] flex items-center">
                <FaUsers className="mr-3 text-[#E65911]" /> Kishora Bharathi
              </h2>
            </div>

            <p className="text-xl mb-6 leading-relaxed">Kishora Bharathi is a vibrant initiative designed for youth in the neighborhood.</p>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.div
                whileHover={{ y: -3 }}
                className="bg-white px-4 py-2 rounded-full border border-[#7c0f00]/30 shadow-sm flex items-center"
              >
                <FaStar className="text-[#7c0f00] mr-2" />
                <span className="font-semibold text-[#E65911]">Age Group:</span> 12-15 years
              </motion.div>
              <motion.div
                whileHover={{ y: -3 }}
                className="bg-white px-4 py-2 rounded-full border border-[#7c0f00]/30 shadow-sm flex items-center"
              >
                <FaMicrophone className="text-[#7c0f00] mr-2" />
                <span className="font-semibold text-[#E65911]">Focus:</span> Leadership Development
              </motion.div>
              <motion.div
                whileHover={{ y: -3 }}
                className="bg-white px-4 py-2 rounded-full border border-[#7c0f00]/30 shadow-sm flex items-center"
              >
                <FaGamepad className="text-[#7c0f00] mr-2" />
                <span className="font-semibold text-[#E65911]">Activities:</span> Skills & Values
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#E65911] mb-4">Benefits for Participants</h3>
                <motion.div
                  variants={staggerChildren}
                  className="grid grid-cols-2 gap-3"
                >
                  {['Bonding with Peers', 'Cultural Pride', 'Seva & Volunteering', 'Indian Games', 'Leadership', 'Public speaking', 'Learn from role models', 'Discipline', 'Patriotism', 'Broadminded Thinking', 'Physical Fitness', 'Wisdom & Reflection'].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      whileHover={{ y: -3 }}
                      className="bg-white p-3 rounded-lg border border-[#7c0f00]/10 shadow-sm flex items-center"
                    >
                      <div className="w-2 h-2 bg-[#7c0f00] rounded-full mr-2"></div>
                      <span className="text-sm">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div variants={scaleIn} className="bg-white p-6 rounded-xl border border-[#7c0f00]/20">
                <h3 className="text-2xl font-semibold text-[#E65911] mb-4">Importance of Kishora Bharathi</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#7c0f00] rounded-full mt-2 mr-3"></div>
                    <span>A journey of character building, cultural awakening, and joyful learning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#7c0f00] rounded-full mt-2 mr-3"></div>
                    <span>Prepares youth to become confident, compassionate, and committed citizens</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#7c0f00] rounded-full mt-2 mr-3"></div>
                    <span>Improves stamina and strength through Surya Namaskara and Yoga</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Bhajan Sandhya Section */}
        <motion.section
          id="bhajan-sandhya"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="relative"
        >
          <div className="absolute -right-16 top-1/4 w-72 h-72 bg-[#7c0f00]/5 rounded-full filter blur-3xl -z-10"></div>
          <motion.div variants={fadeIn} className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="w-4 h-12 bg-[#E65911] rounded-full mr-4"></div>
              <h2 className="text-4xl font-extrabold text-[#7c0f00] flex items-center">
                <FaMusic className="mr-3 text-[#E65911]" /> Bhajan Sandhya
              </h2>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-[#7c0f00]/5 to-[#E65911]/5 p-6 rounded-xl mb-8 text-center"
            >
              <p className="text-xl mb-2 flex items-center justify-center">
                <FaCalendarAlt className="mr-2 text-[#7c0f00]" /> Every Saturday 6:00 PM to 6:30 PM
              </p>
              <p className="text-lg text-[#7c0f00] font-semibold flex items-center justify-center">
                <FaMapMarkerAlt className="mr-2 text-[#E65911]" /> Shri Shakti Ganapathi temple, Girinagar
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.div
                whileHover={{ y: -3 }}
                className="bg-white px-4 py-2 rounded-full border border-[#E65911]/30 shadow-sm flex items-center"
              >
                <FaUsers className="text-[#E65911] mr-2" />
                <span className="font-semibold text-[#7c0f00]">Age Group:</span> All ages welcome
              </motion.div>
              <motion.div
                whileHover={{ y: -3 }}
                className="bg-white px-4 py-2 rounded-full border border-[#E65911]/30 shadow-sm flex items-center"
              >
                <FaHeart className="text-[#E65911] mr-2" />
                <span className="font-semibold text-[#7c0f00]">Benefits:</span> Spiritual Growth
              </motion.div>
              <motion.div
                whileHover={{ y: -3 }}
                className="bg-white px-4 py-2 rounded-full border border-[#E65911]/30 shadow-sm flex items-center"
              >
                <FaMicrophone className="text-[#E65911] mr-2" />
                <span className="font-semibold text-[#7c0f00]">Focus:</span> Devotional Singing
              </motion.div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#7c0f00] mb-6 text-center">Importance of Bhajan Sandhya</h3>
              <motion.div
                variants={staggerChildren}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  { title: 'Calmness of Mind', desc: 'Singing or listening to bhajans soothes the heart and brings inner peace', icon: <FaHeart className="text-[#E65911] text-2xl mb-2" /> },
                  { title: 'Positive Vibrations', desc: 'Divine words and melodies create uplifting energy that purifies surroundings', icon: <FaStar className="text-[#E65911] text-2xl mb-2" /> },
                  { title: 'Emotional Balance', desc: 'Channel emotions into devotion, reducing anxiety and nurturing joy', icon: <FaDove className="text-[#E65911] text-2xl mb-2" /> },
                  { title: 'Spiritual Connection', desc: 'Deepens bond with the Divine, turning moments into spiritual experiences', icon: <FaHistory className="text-[#E65911] text-2xl mb-2" /> },
                  { title: 'Community Bonding', desc: 'Strengthens unity, harmony, and shared devotion through collective singing', icon: <FaUsers className="text-[#E65911] text-2xl mb-2" /> },
                  { title: 'Healthy Routine', desc: 'Cultivates discipline, optimism, and a sense of togetherness', icon: <FaCalendarAlt className="text-[#E65911] text-2xl mb-2" /> }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-b from-white to-[#FFE5DE] p-5 rounded-xl border border-[#E65911]/20 hover:shadow-md transition-all duration-300 text-center"
                  >
                    <div className="flex justify-center">{item.icon}</div>
                    <h4 className="font-bold text-lg text-[#7c0f00] mb-2">{item.title}</h4>
                    <p className="text-gray-700">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* IT Milan Section */}
        <motion.section
          id="it-milan"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="relative"
        >
          <div className="absolute -left-16 top-0 w-72 h-72 bg-[#E65911]/5 rounded-full filter blur-3xl -z-10"></div>
          <motion.div variants={fadeIn} className="bg-gradient-to-br from-white to-[#FFE5DE] p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100">
            <div className="flex items-center mb-8">
              <div className="w-4 h-12 bg-[#7c0f00] rounded-full mr-4"></div>
              <h2 className="text-4xl font-extrabold text-[#E65911] flex items-center">
                <FaLaptopCode className="mr-3 text-[#7c0f00]" /> IT Milan
              </h2>
            </div>
            <p className="text-xl mb-6 leading-relaxed">Shakha is the heart of RSS. Milan is a condensed form of Shakha, organized once a week for busy professionals.</p>

            <div>
              <h3 className="text-2xl font-semibold text-[#7c0f00] mb-6">Importance of Shakha in RSS</h3>
              <motion.div
                variants={staggerChildren}
                className="grid md:grid-cols-2 gap-6"
              >
                {[
                  { title: 'Foundation of Discipline & Character', desc: 'Trains swayamsevaks in punctuality, discipline, and self-restraint', icon: <FaDove className="text-[#E65911] text-xl mr-2" /> },
                  { title: 'Physical & Mental Development', desc: 'Promotes fitness, alertness, and teamwork through exercises and yoga', icon: <FaHeart className="text-[#E65911] text-xl mr-2" /> },
                  { title: 'Cultural & Moral Education', desc: 'Patriotic songs, bhajans, and discussions strengthen moral awareness', icon: <FaHistory className="text-[#E65911] text-xl mr-2" /> },
                  { title: 'Leadership & Team Spirit', desc: 'Learning leadership, cooperation, and community service through group activities', icon: <FaUsers className="text-[#E65911] text-xl mr-2" /> },
                  { title: 'National Unity & Social Bonding', desc: 'Brings together people from all sections of society, fostering brotherhood', icon: <FaHandsHelping className="text-[#E65911] text-xl mr-2" /> },
                  { title: 'Service Orientation', desc: 'Cultivates "Seva Parmo Dharma", preparing for social service and nation-building', icon: <FaStar className="text-[#E65911] text-xl mr-2" /> }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -3 }}
                    className="bg-white p-5 rounded-xl border border-[#7c0f00]/20 hover:shadow-md transition-all duration-300"
                  >
                    <h4 className="font-bold text-lg text-[#E65911] mb-2 flex items-center">
                      {item.icon}
                      {item.title}
                    </h4>
                    <p className="text-gray-700">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Sevika Samithi Section */}
        <motion.section
          id="sevika-samithi"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="relative"
        >
          <div className="absolute -right-16 bottom-0 w-72 h-72 bg-[#7c0f00]/5 rounded-full filter blur-3xl -z-10"></div>
          <motion.div variants={fadeIn} className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="w-4 h-12 bg-[#E65911] rounded-full mr-4"></div>
              <h2 className="text-4xl font-extrabold text-[#7c0f00] flex items-center">
                <FaFemale className="mr-3 text-[#E65911]" /> Sevika Samithi
              </h2>
            </div>
            <p className="text-xl mb-6 leading-relaxed">The Rashtreeya Sevika Samithi is the women's organization parallel to the RSS.</p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-gradient-to-br from-[#7c0f00]/5 to-[#E65911]/10 p-6 rounded-xl mb-6"
                >
                  <h3 className="text-xl font-semibold text-[#7c0f00] mb-4 flex items-center">
                    <FaHistory className="mr-2 text-[#E65911]" /> Key Information
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                      <span><span className="font-semibold">Founded:</span> 1936 in Wardha, Maharashtra by Lakshmi Bai Kelkar (Mausiji Kelkar)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                      <span><span className="font-semibold">Purpose:</span> Personality development, cultural education, and national service for women</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#E65911] rounded-full mt-2 mr-3"></div>
                      <span><span className="font-semibold">Motto:</span> "Sanskrit Stree, Samruddha Rashtriya" (Cultured Women, Prosperous Nation)</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <div>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-gradient-to-br from-[#E65911]/5 to-[#7c0f00]/10 p-6 rounded-xl"
                >
                  <h3 className="text-xl font-semibold text-[#7c0f00] mb-4 flex items-center">
                    <FaHandsHelping className="mr-2 text-[#E65911]" /> Activities & Philosophy
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#7c0f00] rounded-full mt-2 mr-3"></div>
                      <span>Emphasizes discipline, service, patriotism, and character-building with focus on women's leadership</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#7c0f00] rounded-full mt-2 mr-3"></div>
                      <span>Daily/weekly Shakhas with exercises, games, yoga, patriotic songs, and discussions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#7c0f00] rounded-full mt-2 mr-3"></div>
                      <span>Programs promoting social service, cultural awareness, women's empowerment, and community welfare</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#7c0f00] rounded-full mt-2 mr-3"></div>
                      <span>Inculcation of self-confidence, self-reliance, and devotion to the nation</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Registration Form Section */}
        <motion.section
          id="register"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="relative"
        >
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute -left-16 top-1/2 w-72 h-72 bg-[#E65911]/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -right-16 bottom-1/2 w-72 h-72 bg-[#7c0f00]/10 rounded-full filter blur-3xl"></div>
          </div>
          <RegistrationForm />
        </motion.section>

      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-12 bg-gradient-to-b from-[#7c0f00] to-[#5a0c00] text-white"
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[#E65911] mb-4 flex items-center">
                <Image
                  src="/rss-logo.jpg"
                  alt="RSS Logo"
                  width={300}
                  height={300}
                  className="mr-2"
                />
              </h3>
              <p className="mb-4">Building character, fostering culture, and serving the nation</p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ y: -3, scale: 1.1 }}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#E65911]/20 flex items-center justify-center hover:bg-[#E65911] transition-colors duration-300"
                >
                  <FaFacebook className="text-[#E65911] hover:text-white transition-colors duration-300" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, scale: 1.1 }}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#E65911]/20 flex items-center justify-center hover:bg-[#E65911] transition-colors duration-300"
                >
                  <FaInstagram className="text-[#E65911] hover:text-white transition-colors duration-300" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, scale: 1.1 }}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#E65911]/20 flex items-center justify-center hover:bg-[#E65911] transition-colors duration-300"
                >
                  <FaYoutube className="text-[#E65911] hover:text-white transition-colors duration-300" />
                </motion.a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['RSS Overview', 'Bala Bharathi', 'Kishora Bharathi', 'Bhajan Sandhya', 'IT Milan', 'Sevika Samithi', 'Register'].map((item, index) => {
                  const id = item.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a
                        href={`#${id}`}
                        onClick={handleScroll}
                        className="text-white/80 hover:text-[#E65911] transition-colors duration-300 flex items-center"
                      >
                        <FaArrowRight className="mr-2 text-sm" /> {item}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <motion.div
                whileHover={{ x: 5 }}
                className="mb-2 flex items-center"
              >
                <FaEnvelope className="mr-2 text-[#E65911]" />
                <span>Email: info@rssbro.org</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="mb-2 flex items-center"
              >
                <FaPhone className="mr-2 text-[#E65911]" />
                <span>Phone: +91 XXXXXXXXXX</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <FaMapMarkerAlt className="mr-2 text-[#E65911]" />
                <span>Address: Bengaluru, Karnataka</span>
              </motion.div>
            </div>
          </div>

          <div className="border-t border-[#E65911]/30 pt-8 text-center">
            <p>&copy; 2024 RSS Bro. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}