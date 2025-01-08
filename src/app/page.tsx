"use client";

import React, { useState, useEffect, useRef } from "react";
import { DragScene } from "@/components";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Globe2, Shield, Users } from 'lucide-react';


function EfficiencyAndSustainabilitySection() {
  const [activeTab, setActiveTab] = useState('efficiency');

  return (
    <section className="min-h-screen py-24 px-8 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-6xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Efficiency Meets Sustainability
        </motion.h2>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {['efficiency', 'sustainability', 'innovation'].map((tab) => (
              <button
                key={tab}
                type="button"
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === tab
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                } border border-gray-700 rounded-md focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-white transition-colors duration-300`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            {activeTab === 'efficiency' && (
              <>
                <motion.div 
                  className="bg-gray-800 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h3 className="text-2xl font-semibold">Energy Efficiency</h3>
                  </div>
                  <p className="text-gray-300">Our drones utilize advanced power management systems, maximizing flight time while minimizing energy consumption. With smart battery technology, we've achieved a 40% increase in operational efficiency.</p>
                </motion.div>
                
                <motion.div 
                  className="bg-gray-800 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <h3 className="text-2xl font-semibold">Aerodynamic Design</h3>
                  </div>
                  <p className="text-gray-300">Evion drones feature cutting-edge aerodynamic designs, reducing drag and improving overall performance. This results in longer flight times and reduced energy consumption.</p>
                </motion.div>
              </>
            )}

            {activeTab === 'sustainability' && (
              <>
                <motion.div 
                  className="bg-gray-800 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <h3 className="text-2xl font-semibold">Eco-Friendly Materials</h3>
                  </div>
                  <p className="text-gray-300">Evion drones are built using recycled and sustainable materials, reducing our carbon footprint without compromising on performance. We've achieved a 70% use of recycled materials in our latest models.</p>
                </motion.div>
                
                <motion.div 
                  className="bg-gray-800 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <h3 className="text-2xl font-semibold">Circular Economy</h3>
                  </div>
                  <p className="text-gray-300">We've implemented a comprehensive recycling program for our drones, ensuring that end-of-life products are properly dismantled and materials are reused in new production cycles.</p>
                </motion.div>
              </>
            )}

            {activeTab === 'innovation' && (
              <>
                <motion.div 
                  className="bg-gray-800 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold mb-4">AI-Powered Route Optimization</h3>
                  <p className="text-gray-300">Our drones leverage artificial intelligence to optimize flight paths in real-time, reducing energy consumption and improving delivery efficiency by up to 25%.</p>
                </motion.div>
                
                <motion.div 
                  className="bg-gray-800 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h3 className="text-2xl font-semibold mb-4">Noise Reduction Technology</h3>
                  <p className="text-gray-300">We've developed proprietary noise reduction technology that makes our drones 40% quieter than traditional models, minimizing noise pollution in urban environments.</p>
                </motion.div>
              </>
            )}
          </div>
          
          <div className="relative">
            <motion.div 
              className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.img
              src="/placeholder.svg?height=400&width=400"
              alt="Eco-friendly drone"
              className="relative z-10 w-full h-auto rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
        
        <motion.div 
          className="mt-16 bg-gray-800 p-8 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">Sustainability Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Carbon Footprint Reduction", value: "30%" },
              { label: "Energy Efficiency Improvement", value: "45%" },
              { label: "Recycled Materials Used", value: "70%" }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>


        <div className="mt-24">
          <h3 className="text-3xl font-semibold mb-8 text-center text-white">Environmental Impact Calculator</h3>
          <div className="bg-gray-800 p-8 rounded-lg">
            <p className="text-gray-300 mb-4">Estimate the environmental impact of switching to Evion drones:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="fleet-size" className="block text-sm font-medium text-gray-400 mb-2">Current Fleet Size</label>
                <input type="number" id="fleet-size" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter number of drones" />
              </div>
              <div>
                <label htmlFor="operation-hours" className="block text-sm font-medium text-gray-400 mb-2">Daily Operation Hours</label>
                <input type="number" id="operation-hours" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter hours per day" />
              </div>
            </div>
            <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Calculate Impact
            </button>
            <div className="mt-6 p-4 bg-gray-700 rounded-md">
              <p className="text-white">Estimated annual reduction:</p>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Carbon emissions: X tons</li>
                <li>Energy consumption: Y kWh</li>
                <li>Operational costs: Z%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const [showAutonomy, setShowAutonomy] = useState(false);
  const [showWeGotIt, setShowWeGotIt] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    document.body.style.overflow = introComplete ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [introComplete]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > window.innerHeight * 0.3) {
      setShowAutonomy(true);
    }
    if (latest > window.innerHeight * 0.6) {
      setShowWeGotIt(true);
    }
  });

  const handleIntroComplete = () => {
    setIntroComplete(true);
  };

  return (
    <div className="bg-black text-white">
      {/* Initial Section */}
      <section className="h-screen flex items-center justify-center">
        <DragScene onIntroComplete={handleIntroComplete} />
      </section>

      {/* Header Section */}

      <section className="h-screen text-center fade-in">
      <h1 className="text-7xl font-bold text-center mb-8"> Autonomy? We got it.</h1>
        <p className="text-3xl font-light max-w-xl mx-auto">
        Evion is a fully autonomous fleet drone system that features self-navigation to optimize performance and efficiency.
        </p>
      </section>

      {/* Stats Section */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-7xl mx-auto">
        {[
          {
            icon: "👆",
            title: "Touch ID.",
            description: "Unlock your Mac, sign in to apps, and make secure payments with your fingertip. The Secure Enclave keeps your fingerprint data safe.",
          },
          {
            icon: "🎯",
            title: "Find My.",
            description: "Locate your misplaced MacBook Pro and remotely lock or erase it if needed.",
          },
          {
            icon: "🔒",
            title: "FileVault.",
            description: "Encrypt and protect your files and data without having to think about it.",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="relative p-8 bg-black rounded-lg transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500" />
            <div className="text-4xl mb-6">{stat.icon}</div>
            <h3 className="text-2xl font-semibold mb-4">
              <span className="text-white">{stat.title.split('.')[0]}.</span>
              <span className="text-gray-500"> {stat.description}</span>
            </h3>
          </div>
        ))}
      </section>

{/* New Impact Section */}
<section className="min-h-screen py-24 px-8">
<div className="max-w-7xl mx-auto">
  <h1 className="text-7xl font-bold text-center mb-8">
    Designed to make<br />a difference.
  </h1>
  <p className="text-2xl text-gray-400 text-center max-w-4xl mx-auto mb-24">
    What matters to you matters to Evion, too. From implementing sustainable practices that minimize environmental impact. To privacy protections that give you complete control over your data. To creating innovative features that make drone technology accessible to all.
  </p>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
    <div className="space-y-6">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
        <Globe2 className="w-8 h-8 text-white" />
      </div>
      <div>
        <p className="text-2xl">
          <span className="text-white">Evion drones use </span>
          <span className="text-gray-400">sustainable materials, with </span>
          <span className="text-white">eco-friendly components </span>
          <span className="text-gray-400">in every unit.</span>
        </p>
      </div>
    </div>

    <div className="space-y-6">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center">
        <Shield className="w-8 h-8 text-white" />
      </div>
      <div>
        <p className="text-2xl">
          <span className="text-white">Privacy is a fundamental human right. </span>
          <span className="text-gray-400">Which is why we design our drones and services to protect it.</span>
        </p>
      </div>
    </div>

    <div className="space-y-6">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center">
        <Users className="w-8 h-8 text-white" />
      </div>
      <div>
        <p className="text-2xl">
          <span className="text-white">The best technology works for everyone. </span>
          <span className="text-gray-400">That's why our products and services are </span>
          <span className="text-white">inclusive by design.</span>
        </p>
      </div>
    </div>
  </div>
</div>
</section>

    {/* Solve it ALL Section */}
    <section className="h-screen text-center fade-in">
    <h2 className="text-4xl font-bold gradient-text text-glow">Evion aims to Solve it ALL</h2>
    </section>

    {/* Efficiency and Sustainability Section */}
    <section className="min-h-screen py-24 px-8">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-6xl font-bold gradient-text text-glow mb-16">
        Keeping it user centered
      </h2>
      
      <h3
        className="text-4xl font-light mb-24 opacity-0 transition-opacity duration-1000 ease-in-out"
        ref={(el) => {
          if (el) {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  el.style.opacity = '1';
                }
              },
              { threshold: 0.1 }
            );
            observer.observe(el);
          }
        }}
      >
        But what about the learning curve?
      </h3>

      <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
        <div className="bg-zinc-900/50 rounded-lg overflow-hidden">
          <img 
            src="public/vercel.svg" 
            alt="Default GIF placeholder"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="bg-zinc-900/50 p-8 rounded-lg">
          <div className="space-y-6">
            <div className="flex justify-between items-baseline">
              <h4 className="text-2xl font-medium">Performance</h4>
              <span className="text-5xl font-bold gradient-text">98%</span>
            </div>
            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full w-[98%] bg-gradient-to-r from-blue-500 to-green-400 rounded-full" />
            </div>
            
            <div className="flex justify-between items-baseline">
              <h4 className="text-2xl font-medium">Accuracy</h4>
              <span className="text-5xl font-bold gradient-text">95%</span>
            </div>
            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full w-[95%] bg-gradient-to-r from-blue-500 to-green-400 rounded-full" />
            </div>
            
            <div className="flex justify-between items-baseline">
              <h4 className="text-2xl font-medium">Efficiency</h4>
              <span className="text-5xl font-bold gradient-text">92%</span>
            </div>
            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full w-[92%] bg-gradient-to-r from-blue-500 to-green-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

    {/* Simple UI Section */}
    <section className="min-h-screen py-24 px-8 bg-zinc-900/30">
    <div className="max-w-7xl mx-auto text-center">
      <h2 
        className="text-6xl font-bold gradient-text text-glow mb-8 opacity-0 transition-opacity duration-1000 ease-in-out"
        ref={(el) => {
          if (el) {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  el.style.opacity = '1';
                }
              },
              { threshold: 0.1 }
            );
            observer.observe(el);
          }
        }}
      >
       But we have a simple, yet powerful UI
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-24">
        Our intuitive interface makes it easy to manage your drone fleet while providing powerful analytics and insights at your fingertips.
      </p>
    </div>
    </section>

    {/* Complex Analysis Section */}
    <section className="min-h-screen py-24 px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-5xl font-bold gradient-text text-glow">
            Let us handle the complex analysis
          </h2>
          <p className="text-xl text-gray-400">
            While you focus on what matters most - growing your business and achieving your goals.
          </p>
        </div>
        <div className="bg-zinc-900/50 rounded-lg overflow-hidden">
          <img 
            src="public/vercel.svg" 
            alt="Default image placeholder"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
    </section>

    {/* What You See Section */}
    <section className="min-h-screen py-24 px-8 bg-zinc-900/30">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-6xl font-bold gradient-text text-glow mb-16">
        Here's what you see
      </h2>
      <div className="bg-zinc-900/50 rounded-lg overflow-hidden">
        <img 
          src="public/vercel.svg" 
          alt="Default image placeholder"
          className="w-full h-[600px] object-cover"
        />
      </div>
    </div>
    </section>

    {/* Mission Section */}
    <section className="min-h-screen py-24 px-8">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-6xl font-bold gradient-text text-glow mb-8">
        Our Mission
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        At Evion, we're committed to revolutionizing drone technology through autonomous systems that are not only efficient but also environmentally conscious. Our mission is to create sustainable solutions that empower businesses while protecting our planet for future generations.
      </p>
    </div>
    </section>


    <EfficiencyAndSustainabilitySection /> 

      {/* Footer */}
      <footer className="bg-card py-8 text-center">
        <p className="text-sm">Contact us at <a href="mailto:support@evion.com" className="gradient-text">eviondrones@gmail.com</a></p>
        <p className="text-sm">© 2024 Evion. All rights reserved.</p>
      </footer>

    </div>
  );
}