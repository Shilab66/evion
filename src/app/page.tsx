"use client";

import React, { useState, useEffect, useRef } from "react";
import { DragScene } from "@/components";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Globe2, Droplet, Beaker, Zap, Cpu, ArrowRight, Star, Wind, Timer, Wrench, Computer, ArrowBigLeftDash, ArrowBigRightDash, AudioWaveform, Youtube, Instagram, Mail } from 'lucide-react';
import { AnimatedHighlight } from '../components/animated-highlight.tsx'
import EnviormentalImpactCalulator from '../components/EnviormentalImpactCalulator.tsx'
import Stats from '../components/stats.tsx'
import Link from "next/link";


function EfficiencyAndSustainabilitySection() {
  const [activeTab, setActiveTab] = useState('efficiency');

  return (
    <section className="min-h-screen py-24 px-8 from-black to-zinc-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-6xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Efficiency Meets Simplicity
        </motion.h2>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {['efficiency', 'simplicity', 'innovation'].map((tab) => (
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
                  className="bg-gray-800 p-6 rounded-2xl"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="flex items-center mb-4">
                    <Zap className="h-6 w-6 text-green-400 mr-2" />
                    <h3 className="text-2xl font-semibold">Energy Efficiency</h3>
                  </div>
                  <p className="text-gray-300">
                    With smart battery technology and only one thrust system to power, EVION is able to minimize energy consumption, unlike other drones that power multiple rotors.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gray-800 p-6 rounded-2xl"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="flex items-center mb-4">
                    <Wind className="h-6 w-6 text-green-400 mr-2" />
                    <h3 className="text-2xl font-semibold">Aerodynamic Design</h3>
                  </div>
                  <p className="text-gray-300">
                    EVION drones feature cutting-edge aerodynamic designs, reducing drag and improving overall performance. This results in longer flight times and reduced energy consumption.
                  </p>
                </motion.div>
              </>
            )}

            {activeTab === 'simplicity' && (
              <>
                <motion.div
                  className="bg-gray-800 p-6 rounded-2xl"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="flex items-center mb-4">
                    <Wrench className="h-6 w-6 text-green-400 mr-2" />
                    <h3 className="text-2xl font-semibold">Build Quality</h3>
                  </div>
                  <p className="text-gray-300">
                    By using a fiberglass-carbon fiber composite, EVION heavily minimizes any excess weight while maintaining more strength than steel.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gray-800 p-6 rounded-2xl"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="flex items-center mb-4">
                    <Cpu className="h-6 w-6 text-green-400 mr-2" />
                    <h3 className="text-2xl font-semibold">AI-Powered Flight & Analysis</h3>
                  </div>
                  <p className="text-gray-300">
                  EVION’s AI-powered flight and analysis system enables fully autonomous drone operations, optimizing flight paths and performing real-time data collection. This intelligent system provides actionable insights, empowering farmers to make data-driven decisions with precision and simplicity.
                  </p>
                </motion.div>
              </>
            )}

            {activeTab === 'innovation' && (
              <>
              <motion.div
                className="bg-gray-800 p-6 rounded-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <ArrowBigRightDash className="h-6 w-6 text-green-400 mr-2" />
                  <h3 className="text-2xl font-semibold">Vectored EDF for VTOL</h3>
                </div>
                <p className="text-gray-300">
                EVION's use of a vectored Electric Ducted Fan (EDF) in VTOL drones introduces a groundbreaking innovation, enabling precise airflow control through adjustable exhaust vanes. This technology, unlike any other precision agriculture drone, provides 40+ minutes of flight time for its size, while also being twice as fast.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-800 p-6 rounded-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center mb-4">
                  <AudioWaveform className="h-6 w-6 text-green-400 mr-2" />
                  <h3 className="text-2xl font-semibold">Wave-Recharge System</h3>
                </div>
                <p className="text-gray-300">
                  EVION’s innovative wave-recharge system ensures perpetually autonomous drone operations by enabling drones to rotate between charging stations without human intervention. As one drone returns to recharge, another seamlessly takes its place, maximizing efficiency and minimizing downtime for continuous precision agriculture.
                </p>
              </motion.div>
            </>
            )}
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <motion.div
              className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />
            <motion.img
              src="../../break.gif?height=400&width=400"
              alt="Eco-friendly drone"
              className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>

        <EnviormentalImpactCalulator />
      </div>
    </section>
  );
}


export default function Home() {
  const [showAutonomy, setShowAutonomy] = useState(false);
  const [showWeGotIt, setShowWeGotIt] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > window.innerHeight * 0.3) {
      setShowAutonomy(true);
    }
    if (latest > window.innerHeight * 0.6) {
      setShowWeGotIt(true);
    }
  });

  return (
    <div className="bg-black text-white">
      {/* Initial Section */}
      <section className="h-screen flex items-center justify-center">
        <DragScene />
      </section>


      {/* description Section */}
      <section className="h-screen text-center fade-in mt-[80vh] mb-[-50vh]">
      <p className="text-3xl max-w-5xl mx-auto">
      <span className="text-gray-500 font-light">EVION is a </span>
    <span className="text-white font-medium">fleet-based drone system </span>
    <span className="text-gray-500 font-light">designed for </span>
    <span className="text-white font-medium">efficient and scalable precision agriculture.</span>
    <span className="text-gray-500 font-light">By utilizing a coordinated network of drones, EVION enhances </span>
    <span className="text-white font-medium">crop monitoring, data collection, and field analysis</span>
    <span className="text-gray-500 font-light">, making advanced agricultural technology </span>
    <span className="text-white font-medium">accessible and easy to use.</span>
    </p>
    </section>
      
      
      {/* Header Section */}
<section className="h-screen text-center fade-in mb-[-50vh]">
  <h1 className="text-7xl font-bold text-center mb-8">Autonomy? We got it.</h1>
  <p className="text-3xl max-w-5xl mx-auto">
    <span className="text-gray-500 font-light">EVION is </span>
    <span className="text-white font-medium">fully autonomous in its navigation, analysis, and charging/takeoff. </span>
    <span className="text-gray-500 font-light">
      With our perpetual “wave” recharge system, EVION effectively sends out replacement drones when one wave is charging, before repeating the cycle.
    </span>
  </p>
</section>

{/* Stats Section */}
<section className="min-h-screen grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-[5vh]">
  {[
    {
      icon: "2.5x",
      title: "Flight Time,",
      description: "when compared to multirotor drones of the same size on the market.",
    },
    {
      icon: "11x",
      title: "Faster,",
      description: "when compared to industry-leading Precision Agriculture multirotor drones available.",
    },
    {
      icon: "7x",
      title: "More Cost Effective",
      description: "per drone, when compared to industrial drones from companies like DJI and Parrot.",
    },
  ].map((stat, index) => (
    <div
      key={index}
      className="relative px-8 py-4 bg-black rounded-lg transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500" />
      <div className="text-6xl mb-6">{stat.icon}</div>
      <h3 className="text-2xl font-semibold mb-4">
        <span className="text-white">{stat.title}</span>
        <span className="text-gray-500"> {stat.description}</span>
      </h3>
    </div>
  ))}
</section>


{/* New Impact Section */}
<section id="impact" className="min-h-screen py-5 px-8">
<div className="max-w-7xl mx-auto">
  <h1 className="text-7xl font-bold text-center mb-8">
    Designed to make<br />a difference.
  </h1>
  <p className="text-2xl text-gray-400 text-center max-w-4xl mx-auto mb-24">
  We’re not just making farming more efficient, we’re tackling the significant environmental damage caused by resource overuse.
  </p>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
    <div className="space-y-6">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
        <Globe2 className="w-8 h-8 text-white" />
      </div>
      <div>
        <p className="text-xl">
          <span className="text-white">Fertilizer. </span>
          <span className="text-gray-400">Out of the </span>
          <span className="text-white">115 million tons of nitrogen fertilizer </span>
          <span className="text-gray-400">annually, </span>
          <span className="text-white">75 million tons run off </span>
          <span className="text-gray-400">into the environment as excess nitrogen. This pollutes water and creates massive algae blooms that</span>
          <span className="text-white"> kill any organisms.</span>
        </p>
      </div>
    </div>

    <div className="space-y-6">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center">
        <Droplet className="w-8 h-8 text-white" />
      </div>
      <div>
        <p className="text-xl">
          <span className="text-white">Water. </span>

          <span className="text-gray-400">Farmers use around </span>
          <span className="text-white">70% of the world's freshwater </span>
          <span className="text-gray-400">for agriculture, with roughly </span>
          <span className="text-white">40% of that water considered "wasted" </span>
          <span className="text-gray-400">due to poor irrigation & inefficient water management practices.</span>
          </p>
      </div>
    </div>

    <div className="space-y-6">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center">
        <Beaker className="w-8 h-8 text-white" />
      </div>
      <div>
        <p className="text-xl">
          <span className="text-white">Pesticide. </span>
          <span className="text-gray-400">Studies show that approximately </span>
          <span className="text-white">77% of farmers overuse pesticides. </span>
          <span className="text-gray-400">Pesticides enter ground and surface waters (streams, rivers) that people and wildlife use for drinking water, </span>
          <span className="text-white">harming aquatic life.</span>
        </p>
      </div>
    </div>
  </div>
</div>
</section>

    {/* Solve it ALL Section */}
    <section className="h-screen text-center fade-in mb-[-95vh]">
    <h2 className="text-4xl font-light text-white">
            EVION aims to <AnimatedHighlight> solve it all</AnimatedHighlight>
          </h2>
    </section>

    {/* Full Image */}
<section className="min-h-screen py-24 px-8 bg-zinc-900/30 mt-[-47vh]">
    <div className="max-w-7xl mx-auto text-center">
      <div className="bg-zinc-900/50 rounded-lg overflow-hidden">
        <img 
          src="../../new.jpeg" 
          alt="Default image placeholder"
          className="w-full h-[71vh] object-cover"
        />
      </div>
    </div>
    </section>

    {/* Efficiency and Sustainability Section */}
    <section className="min-h-screen py-24 px-8">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-6xl font-bold gradient-text mb-16">
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

    <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
        <div className="bg-zinc-900/50 rounded-lg overflow-hidden"> <img src="../../D.jpeg" alt="Default GIF placeholder" className="w-[200] h-[60vh] object-cover" /> </div> <div className="bg-zinc-900/50 p-8 rounded-lg"> <Stats/> </div>
        </div>
      </div>
    </div>

    </section>

    {/* Simple UI Section */}
    <section className="min-h-screen py-24 px-8 bg-zinc-900/30 mb-[-50vh]">
    <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-7xl font-bold mb-[3.5vh]">
          Don’t Worry,
      </h2>
      <h2 
        className="text-6xl font-bold gradient-text mb-8 opacity-0 transition-opacity duration-1000 ease-in-out"
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
       We have a simple, yet powerful UI
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
      Our application is built with simplicity at its core, presenting only the most essential data in an intuitive and seamless way. Experience unmatched efficiency and functionality, designed to streamline your workflow effortlessly.
      </p>
    </div>
    </section>

    {/* Complex Analysis Section */}
    <section className="min-h-screen py-24 px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-5xl font-bold gradient-text">
            Let us handle the complex analysis
          </h2>
          <p className="text-xl text-gray-400">
          You don’t need to be an expert to understand NDVI Technology. Let us handle the complex analysis and interpretation.
          </p>
        </div>
        <div className="bg-zinc-900/50 rounded-lg overflow-hidden">
          <img 
            src="../../F.jpg" 
            alt="Simulation"
            className="w-full h-[48vh] object-cover"
          />
        </div>
      </div>
    </div>
    </section>


    {/* What You See Section */}
    <section className="min-h-screen py-24 px-8 bg-zinc-900/30">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-6xl font-bold  mb-16 mt-[-24vh]">
        Here's what you see
      </h2>
      <div className="bg-zinc-900/50 rounded-lg overflow-hidden">
        <img 
          src="../../H.svg" 
          alt="Default image placeholder"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    </section>

    {/* Complex Analysis Section */}
<section className="min-h-screen py-24 px-8 mb-[-24vh]">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="bg-zinc-900/50 rounded-lg overflow-hidden">
        <video 
          src="../../dash.mov" 
          className="w-full h-[47vh] object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="space-y-6">
        <h2 className="text-5xl font-bold gradient-text">
          Advanced Settings Menu
        </h2>
        <p className="text-xl text-gray-400">
          Highly customizable menu where you can adjust complex drone settings and options such as flight paths or data prioritization to your own liking.
        </p>
      </div>
    </div>
  </div>
</section>



    <EfficiencyAndSustainabilitySection /> 

      {/* Footer */}
      <footer className="bg-card py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <Link href="https://www.instagram.com/eviondrones/" className="gradient-text hover:opacity-80 transition-opacity">
              <Instagram size={24} className="text-white" />
            </Link>
            <Link href="https://www.youtube.com/@eviondrones" className="gradient-text hover:opacity-80 transition-opacity">
              <Youtube size={24} className="text-white" />
            </Link>
            <Link href="mailto:eviondrones@gmail.com" className="gradient-text hover:opacity-80 transition-opacity">
              <Mail size={24} className="text-white" />
            </Link>
          </div>
          <div className="text-sm text-center">
            <p>Contact us at <a href="mailto:eviondrones@gmail.com" className="gradient-text hover:underline">eviondrones@gmail.com</a></p>
            <p className="mt-2">© 2024 EVION. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>

    </div>
  );
}