"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import aanshi from "../../../public/aanshiEvion.png";
import allen from "../../../public/allen.jpeg";


const teamMembers = [
  {
    name: "Aanshi Patel",
    role: "CEO & Founder",
    image: aanshi,
    description: "Jane is a visionary leader with 15 years of experience in robotics and agriculture technology.",
  },
  {
    name: "Allen Du",
    role: "CTO",
    image: allen,
    description: "John is an expert in AI and machine learning, driving Evion's technological innovations.",
  },
  {
    name: "Emily Chen",
    role: "Head of Design",
    image: "/placeholder.svg?height=300&width=300",
    description: "Emily brings a user-centered approach to Evion's product design, ensuring intuitive interfaces.",
  },
  {
    name: "Michael Johnson",
    role: "Lead Engineer",
    image: "/placeholder.svg?height=300&width=300",
    description: "Michael's expertise in robotics has been crucial in developing Evion's autonomous systems.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-6xl font-bold mb-8 gradient-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Evion
          </motion.h1>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-8 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Mission
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            At Evion, we're committed to empowering the farming community around Poolesville with cutting-edge agricultural robotics. Our mission is to increase crop yields, reduce resource consumption, and promote sustainable farming practices through innovative drone technology.
          </motion.p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                className="bg-zinc-900/50 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Image 
                  src={member.image} 
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-green-400 mb-4">{member.role}</p>
                  <p className="text-gray-400">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photos */}
      <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Story
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-400"></div>
          {[
    { year: "May 2024", event: "Curiosity sparked regarding harmful environmental effects of agricultural resource overuse during a lecture." },
    { year: "July 2024", event: "Early research begins on possible solutions to resource wastage; many more problems uncovered regarding agricultural inefficiency/inaccessibility. Thorough research commences." },
    { year: "October 2024", event: "Team forms united by the vision to create a more sustainable future for agriculture; Evion is born as the result of intense discussion and extensive research." },
    { year: "December 2024", event: "Early iterations of 3D CAD drone prototypes are designed; heavy research into marketing and business ensues; substantial progress is made into creating a functional website." },
    { year: "January 2024", event: "Final 3D CAD drone model is complete; extensive progress has been made into research-backed business plans, and a fully operational website is launched. Prototyping of the first version begins." }
  ].map((item, index) => (
            <motion.div 
              key={item.year}
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="w-5/12 text-right pr-8">
                    <h3 className="text-2xl font-bold mb-2 gradient-text">{item.year}</h3>
                    <p className="text-gray-400 text-justify">{item.event}</p>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="w-5/12"></div>
                </>
              ) : (
                <>
                  <div className="w-5/12"></div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="w-5/12 text-left pl-8">
                    <h3 className="text-2xl font-bold mb-2 gradient-text">{item.year}</h3>
                    <p className="text-gray-400 text-justify">{item.event}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>



      <section className="py-24 px-8 bg-zinc-900/30">
  <div className="max-w-7xl mx-auto text-center">
    <motion.h2 
      className="text-4xl font-bold mb-8 gradient-text"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Join Us in Revolutionizing Agriculture
    </motion.h2>
    <motion.p 
      className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Whether you're a farmer looking to optimize your crops or an investor interested in the future of agtech, we'd love to hear from you.
    </motion.p>
    <Link href="/contact"> {/* Wrap button with Link */}
      <motion.button 
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Contact Us
      </motion.button>
    </Link>
  </div>
</section>
    </div>
  );
}

