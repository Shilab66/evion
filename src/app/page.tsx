"use client";

import React, { useState, useEffect } from "react";
import { DragScene } from "@/components";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const { scrollYProgress } = useScroll();
  const autonomyOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const weGotItOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  useEffect(() => {
    document.body.style.overflow = introComplete ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [introComplete]);

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
              style={{ opacity: autonomyOpacity }}
            >
              Autonomy?
            </motion.h1>
            <motion.h1 
              className="text-6xl font-bold gradient-text text-glow"
              style={{ opacity: weGotItOpacity }}
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
        <p className="text-lg font-light max-w-xl mx-auto">
          Evion's innovative technology ensures reliability and sustainability in all our operations.
        </p>
      </section>

      {/* Features Section */}
      <section className="h-screen grid grid-cols-1 md:grid-cols-3 gap-6 p-8 text-center fade-in">
        {["Efficiency", "Precision", "Scalability"].map((feature, index) => (
          <div key={index}>
            <div className="text-4xl">✨</div>
            <h3 className="text-xl font-semibold mt-4">{feature}</h3>
            <p className="text-muted-foreground text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
            </p>
          </div>
        ))}
      </section>

      {/* Solve it ALL Section */}
      <section className="h-screen text-center fade-in">
        <h2 className="text-4xl font-bold gradient-text text-glow">Evion aims to Solve it ALL</h2>
      </section>

      {/* Footer */}
      <footer className="bg-card py-8 text-center">
        <p className="text-sm">Contact us at <a href="mailto:support@evion.com" className="gradient-text">eviondrones@gmail.com</a></p>
        <p className="text-sm">© 2024 Evion. All rights reserved.</p>
      </footer>
    </div>
  );
}

