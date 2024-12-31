"use client"

import React, { useState, useEffect } from 'react';
import { DragScene } from '@/components';

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    document.body.style.overflow = introComplete ? 'auto' : 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [introComplete]);

  const handleIntroComplete = () => {
    setIntroComplete(true);
  };

  return (
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
          </p>
        </div>
      </section>

      <section className="h-screen flex items-center justify-between">
        <div className="w-1/2 h-full flex items-center justify-center pl-16">
          <DragScene onIntroComplete={() => {}} />
        </div>
        <div className="w-1/2 text-center">
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

