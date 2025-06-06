"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: 'easeOut' }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.0, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen bg-white">
      <motion.img 
        src="/Logomark.png" 
        alt="Logomark" 
        className="h-10 mt-4 ml-4 w-auto"
        initial="hidden"
        animate="visible"
        variants={fadeInScale}
      />
      
      <motion.header 
        className="fixed w-full top-0 z-50 p-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <nav className="max-w-md mx-auto p-2 flex justify-between shadow-lg items-center bg-white backdrop-blur-md border-0 border-blue-400">
          <motion.button 
            onClick={() => scrollToSection('hero')}
            className="text-2xl oswald font-black text-blue-500 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/LogoNav.png" draggable="false" alt="Logo" className='h-10 w-auto' />
          </motion.button>
          
          <motion.button 
            onClick={() => scrollToSection('about')}
            className="relative text-gray-800 bluehover:text-blue-400 font-thin transition-colors duration-300 group"
            whileHover={{ scale: 1.05 }}
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </motion.button>
          
          <motion.button 
            onClick={() => scrollToSection('operations')}
            className="relative text-gray-800 bluehover:text-blue-400 font-thin transition-colors duration-300 group"
            whileHover={{ scale: 1.05 }}
          >
            Operations
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </motion.button>
          
          <motion.button 
            onClick={() => scrollToSection('action')}
            className="relative text-gray-800 bluehover:text-blue-400 font-thin transition-colors duration-300 group"
            whileHover={{ scale: 1.05 }}
          >
            Action
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </motion.button>
          
          <motion.button 
            onClick={() => scrollToSection('contact')}
            className="relative text-gray-800 bluehover:text-blue-400 pr-4 font-thin transition-colors duration-300 group"
            whileHover={{ scale: 1.05 }}
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </motion.button>
          
          <button 
            className="md:hidden text-blue-600" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </nav>
        
        {mobileMenuOpen && (
          <motion.div 
            className="absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-md border border-white/20 px-6 py-4 shadow-lg md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-100 bluehover:text-blue-400 font-thin transition-colors duration-300">About</button>
              <button onClick={() => scrollToSection('operations')} className="text-left text-gray-100 bluehover:text-blue-400 font-thin transition-colors duration-300">Operations</button>
              <button onClick={() => scrollToSection('action')} className="text-left text-gray-100 bluehover:text-blue-400 font-thin transition-colors duration-300">Action</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-100 bluehover:text-blue-400 font-thin transition-colors duration-300">Contact</button>
            </div>
          </motion.div>
        )}
      </motion.header>

      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br text-black relative overflow-hidden">
        <div className="absolute inset-0"></div>
        <div className="absolute inset-0">
          <div className="w-96 h-96 bg-blue-300/20 blur-3xl absolute top-20 -left-48 animate-pulse"></div>
          <div className="w-80 h-80 bg-white/10 blur-3xl absolute bottom-20 -right-40 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl flex items-center justify-center flex-col mx-auto px-6">
          
          <motion.h1 
            className="text-5xl md:text-6xl pixelify font-black pt-4 mb-6 leading-tight hero-title"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Empowering Communities Through Technology
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl font-light mb-12 opacity-90"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          >
            A non-profit aiming to bridge the digital divide and unlock new opportunities for underserved communities.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.6 }}
          >
            <motion.button 
              onClick={() => scrollToSection('about')}
              className="bg-blue-300 text-slate-800 px-8 py-4 font-bold text-lg hover:bg-blue-400 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-black text-black px-8 py-4 font-bold text-lg hover:bg-white bluehover:text-blue-400 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Involved
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute inset-x-0 bottom-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <img 
            src="/HeroEffect.png" 
            alt="Hero Effect"
            className="w-full object-cover"
            draggable="false"
          />
        </motion.div>
      </section>

      <motion.section 
        id="about" 
        className="min-h-[500px] py-20 bg-gradient-to-b from-blue-300 to-blue-200 border-2 rounded-[4rem] text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex flex-col">
          <div className="flex flex-col md:flex-row items-start max-w-7xl gap-12 flex-grow">
            <motion.div 
              className="max-w-4xl font-thin flex-1"
              variants={textVariants}
            >
              <motion.h2 
                className="text-5xl font-bold text-black pixelify mb-6 flex items-center gap-8"
                variants={textVariants}
              >
                Our Mission
                <motion.img 
                  src="/shootingstar.svg" 
                  alt="Shooting Star" 
                  draggable="false" 
                  className="h-16 w-16 border bg-white border-black select-none"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.h2>
              
              <motion.p 
                className="text-xl leading-relaxed text-black mb-8"
                variants={textVariants}
              >
                At Tech 4 All, our mission is to bridge the digital divide by providing equitable access to technology, digital literacy, and opportunity for underserved communities. We believe that in today&apos;s world, access to technology isn&apos;t a luxury—it&apos;s a lifeline.
              </motion.p>
              
              <motion.p 
                className="text-xl leading-relaxed text-black"
                variants={textVariants}
              >
                Whether it&apos;s a student needing technology for school, healthcare, work, or for personal use, we&apos;re here to empower every individual with the tools they need to thrive. Through community partnerships, tech donations, and fundraising, we aim to create a more connected, inclusive, and empowered future where no one is left behind.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="flex-1 flex justify-center md:justify-end relative"
              variants={fadeInScale}
            >
              <img
                src="/mission.png"
                alt="Our Mission"
                draggable="false"
                className="h-[30rem] object-cover"
              />
              
              <motion.span 
                className="bob flex items-center gap-2 bg-white border border-black shadow-lg w-auto h-auto px-3 py-2 absolute top-8 right-58 md:top-18 md:right-70 z-10 whitespace-nowrap"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <img src="/collect.svg" alt="Collect Icon" draggable="false" className="h-5 w-5" />
                Collect
              </motion.span>

              <motion.span 
                className="bob3 flex items-center gap-2 bg-white border border-black shadow-lg w-auto h-auto px-3 py-2 absolute top-32 right-8 md:top-40 md:right-12 z-10 whitespace-nowrap"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.1 }}
              >
                <img src="/donate.svg" alt="Donate Icon" draggable="false" className="h-5 w-5" />
                Donate
              </motion.span>

              <motion.span 
                className="bob2 flex items-center gap-2 bg-white border border-black shadow-lg w-auto h-auto px-3 py-2 absolute bottom-8 right-58 md:bottom-18 md:right-60 z-10 whitespace-nowrap"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                whileHover={{ scale: 1.1 }}
              >
                <img src="/connect.svg" alt="Connect Icon" draggable="false" className="h-5 w-5" />
                Connect
              </motion.span>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="operations" 
        className="py-20 bg-blue-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={textVariants}
          >
            <h2 className="text-5xl font-bold pixelify text-blue-600 mb-6">How We Change Lives</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Collection</h3>
              <p className="text-gray-700 mb-6">We collect unused or gently-used technology from offices, institutions, and community members. By giving this tech a second life, we help create new opportunities for those in need.</p>
              <div className="overflow-hidden bg-blue-100 bg-opacity-10 hover:bg-opacity-0 transition duration-300">
                <img src="/sk_collection.png" alt="Collection" className="w-full object-cover" />
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="w-16 h-16 bg-blue-300 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Fundraising</h3>
              <p className="text-gray-700 mb-6">We raise funds through community support and partnerships. These contributions allow us to purchase, repair, prepare, and distribute devices to those who need them most.</p>
              <div className="overflow-hidden bg-blue-400 bg-opacity-10 hover:bg-opacity-0 transition duration-300">
                <img src="/sk_fundraising.png" alt="Fundraising" className="w-full bg-blue-300 object-cover" />
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Distribution</h3>
              <p className="text-gray-700 mb-6">We assess, clean, and repair devices to ensure they&apos;re ready for use. We work with charities, local groups, and schools to reach under-resourced communities.</p>
              <div className="overflow-hidden bg-blue-100 bg-opacity-10 hover:bg-opacity-0 transition duration-300">
                <img src="/sk_distribution.png" alt="Distribution" className="w-full object-cover" />
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="w-16 h-16 bg-blue-300 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Follow-up</h3>
              <p className="text-gray-700 mb-6">After distribution, we stay in touch to offer ongoing support and help resolve any issues. We ensure the technology is working well and being used effectively.</p>
              <div className="overflow-hidden bg-blue-100 bg-opacity-10 hover:bg-opacity-0 transition duration-300">
                <img src="/sk_followup.png" alt="Follow-up" className="w-full object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        id="action" 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={textVariants}
          >
            <h2 className="text-5xl font-bold pixelify text-blue-600 mb-6">How You Can Help</h2>
            <div className="w-24 h-1 bg-blue-300 mx-auto mb-8"></div>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            <motion.div 
              className="text-center group"
              variants={cardVariants}
            >
              <motion.div 
                className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <span className="text-4xl font-black text-white">1</span>
              </motion.div>
              <h3 className="text-3xl font-bold text-blue-600 mb-4">Donate</h3>
              <p className="text-gray-700 mb-6">Help us bridge the digital divide with your support. You can make a difference through monetary donations or by contributing gently used tech like laptops, tablets, or phones.</p>
              <motion.button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-8 py-3 font-bold hover:bg-blue-800 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Donate Now
              </motion.button>
            </motion.div>

            <motion.div 
              className="text-center group"
              variants={cardVariants}
            >
              <motion.div 
                className="w-24 h-24 bg-gradient-to-br from-blue-300 to-blue-400 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.2, rotate: -5 }}
              >
                <span className="text-4xl font-black text-blue-800">2</span>
              </motion.div>
              <h3 className="text-3xl font-bold text-blue-600 mb-4">Volunteer</h3>
              <p className="text-gray-700 mb-6">Be part of the hands-on impact! Volunteers help us gather, repair, and distribute donated tech to those in need. Whether you&apos;re tech-savvy or just passionate about helping others.</p>
              <motion.button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-300 text-blue-800 px-8 py-3 font-bold hover:bg-blue-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Volunteer
              </motion.button>
            </motion.div>

            <motion.div 
              className="text-center group"
              variants={cardVariants}
            >
              <motion.div 
                className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <span className="text-4xl font-black text-white">3</span>
              </motion.div>
              <h3 className="text-3xl font-bold text-blue-600 mb-4">Support</h3>
              <p className="text-gray-700 mb-6">Not ready to donate or volunteer? You can still make a huge difference by spreading the word. Follow us on social media, share our mission, and help raise awareness.</p>
              <motion.button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-8 py-3 font-bold hover:bg-blue-800 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Share
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.div 
        id="contact" 
        className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={textVariants}
          >
            <h2 className="text-5xl font-bold pixelify mb-6">Connect With Us</h2>
            <div className="w-24 h-1 bg-blue-300 mx-auto mb-10"></div>
          </motion.div>
          
          <motion.div 
            className="grid lg:grid-cols-2 gap-12"
            variants={staggerContainer}
          >
            <motion.div variants={cardVariants}>
              <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
              <p className="text-xl opacity-90 pb-8 max-w-3xl mx-auto">
                Whether you have gently used devices to donate, want to make a financial contribution, are interested in volunteering your time and expertise, or have any questions, we&apos;d love to hear from you.
              </p>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" placeholder="First name*" className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/70 focus:bg-white/20 focus:border-blue-300 transition-all duration-300" />
                  <input type="text" placeholder="Last name*" className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/70 focus:bg-white/20 focus:border-blue-300 transition-all duration-300" />
                </div>
                <input type="email" placeholder="Email*" className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/70 focus:bg-white/20 focus:border-blue-300 transition-all duration-300" />
                <input type="tel" placeholder="Phone" className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/70 focus:bg-white/20 focus:border-blue-300 transition-all duration-300" />
                <input type="text" placeholder="Title*" className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/70 focus:bg-white/20 focus:border-blue-300 transition-all duration-300" />
                <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/70 focus:bg-white/20 focus:border-blue-300 transition-all duration-300 resize-none"></textarea>
                <motion.button 
                  className="bg-blue-300 text-blue-800 px-8 py-3 font-bold hover:bg-blue-400 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div variants={cardVariants}>
              <h3 className="text-3xl font-bold mb-8">Support The Cause</h3>
              <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20">
                <h4 className="text-2xl font-bold mb-6">Leave a one-time donation</h4>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="First name" className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/70 focus:bg-white/20 focus:border-blue-300 transition-all duration-300" />
                    <input type="text" placeholder="Last name" className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/70 focus:bg-white/20 focus:border-blue-300 transition-all duration-300" />
                  </div>
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/70 focus:bg-white/20 focus:border-blue-300 transition-all duration-300" />
                  <input type="text" placeholder="Donate in the name of:" className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/70 focus:bg-white/20 focus:border-blue-300 transition-all duration-300" />
                  <input type="text" placeholder="How did you hear about us?" className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/70 focus:bg-white/20 focus:border-blue-300 transition-all duration-300" />
                  <motion.button 
                    className="w-full bg-blue-300 text-blue-800 px-8 py-3 font-bold hover:bg-blue-400 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Donate Now
                  </motion.button>
                </div>
      
                <p className="text-sm opacity-70 mt-4">
                  Every donation helps put devices, connectivity, and training into the hands of people who need them most. Whether it&apos;s $10 or $1,000, every dollar moves us closer to digital equity.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.footer 
        className="bg-blue-800 text-white py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            <motion.div 
              className="mb-4 md:mb-0"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-4">
                <img src="/LogoFooter.png" alt="Tech 4 All Logo" className="h-8 w-auto" />
                <p className="text-2xl font-bold oswald">TECH 4 ALL</p>
              </div>
              <p className="opacity-70">200 S Mapleton Drive</p>
            </motion.div>

            <motion.div 
              className="flex space-x-6 text-sm opacity-70"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.button 
                className="hover:text-blue-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
              </motion.button>
              <motion.button 
                className="hover:text-blue-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Accessibility Statement
              </motion.button>
            </motion.div>
          </div>

          <motion.div 
            className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-70"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>© 2024 Tech 4 All. Empowering communities through technology.</p>
          </motion.div>
        </div>
      </motion.footer>

    </div>
  );
}