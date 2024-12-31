"use client"

<<<<<<< Updated upstream
import { DragScene } from "@/components";
=======
import React, { useState, useEffect } from 'react';
import { DragScene } from '@/components';
>>>>>>> Stashed changes

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    // Disable scrolling until intro is complete
    document.body.style.overflow = introComplete ? 'auto' : 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [introComplete]);

  const handleIntroComplete = () => {
    setIntroComplete(true);
  };

  return (
<<<<<<< Updated upstream
    <main className="relative">
      <section
        id="hero"
        className="h-screen flex items-end justify-center relative"
      >
        <div id="text-1" className="text-center mb-64 z-10">
          <h1 className="text-8xl font-medium mb-5 gradient-text text-glow title-text">We are revolutionizing Agri-Tech</h1>
          <p className="text-4xl font-light text-gray-500">
              Precision Agriculture Reimagined.
=======
    <div className="bg-black text-white">
      <section className="h-screen flex items-center justify-center">
        <DragScene onIntroComplete={handleIntroComplete} />
      </section>

      <section className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-medium mb-5 gradient-text text-glow">
            Meet the MacBook Pro M4
          </h1>
          <p className="text-4xl font-light text-muted-foreground">
            Power re-imagined.
>>>>>>> Stashed changes
          </p>
        </div>
      </section>

<<<<<<< Updated upstream
        <section
          id="section 1"
          className="h-screen flex items-center justify-between relative"
        >
          <div className="w-1/2 h-full flex items-center justify-center pl-16">
            <DragScene />
          </div>

          {/* Text: Right half */}
          <div id="text-1" className="w-1/2 text-center z-10">
            <h1 className="text-8xl font-medium mb-5 gradient-text text-glow">
              insert text
            </h1>
            <p className="text-4xl font-light text-muted-foreground">
              body.
            </p>
          </div>
        </section>


      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen flex items-end justify-center relative"
      >
        <div id="text-1" className="text-center mb-64 z-10">
=======
      <section className="h-screen flex items-center justify-between">
        <div className="w-1/2 h-full flex items-center justify-center pl-16">
          <DragScene onIntroComplete={function (): void {
            throw new Error('Function not implemented.');
          } } />
        </div>
        <div className="w-1/2 text-center">
>>>>>>> Stashed changes
          <h1 className="text-8xl font-medium mb-5 gradient-text text-glow">
            Insert Text
          </h1>
          <p className="text-4xl font-light text-muted-foreground">
            Body.
          </p>
        </div>
      </section>

      <section className="h-screen flex items-end justify-center pb-64">
        <div className="text-center">
          <h1 className="text-8xl font-medium mb-5 gradient-text text-glow">
            More Text
          </h1>
          <p className="text-4xl font-light text-muted-foreground">
            I love drones.
          </p>
        </div>
      </section>
    </div>
  );
}

