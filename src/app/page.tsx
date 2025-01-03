"use client";

import React, { useState, useEffect, useRef } from "react";
import { DragScene } from "@/components";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Globe2, Shield, Users } from 'lucide-react';

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
      <section className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <motion.h1
              className="text-6xl font-bold gradient-text text-glow"
              initial={{ opacity: 0 }}
              animate={{ opacity: showAutonomy ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              Autonomy?
            </motion.h1>
            <motion.h1
              className="text-6xl font-bold gradient-text text-glow"
              initial={{ opacity: 0 }}
              animate={{ opacity: showWeGotIt ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              We got it.
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="h-screen flex items-center justify-center text-center fade-in">
        <p className="text-2xl font-light max-w-2xl mx-auto">
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

{/* Designed to Make a Difference Section */}
<section className="h-screen text-center fade-in">
<h2 className="text-4xl font-bold gradient-text text-glow mb-4">Designed To Make a Difference</h2>
<p className="text-3xl font-light max-w-xl mx-auto">
  Evion's innovative technology ensures reliability and sustainability in all our operations.
</p>
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
        Efficiency and Sustainability
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
      <h2 className="text-6xl font-bold gradient-text text-glow mb-8">
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

      {/* Footer */}
      <footer className="bg-card py-8 text-center">
        <p className="text-sm">Contact us at <a href="mailto:support@evion.com" className="gradient-text">eviondrones@gmail.com</a></p>
        <p className="text-sm">© 2024 Evion. All rights reserved.</p>
      </footer>
    </div>
  );
}










