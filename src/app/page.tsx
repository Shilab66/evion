"use client";

import { DragScene } from "@/components";
import { Scene } from "@/components"

export default function Home() {
  return (
    <main className="relative">
      <section
        id="intro"
        className="flex items-center justify-center py-20"
      >
        <div>
          <Scene />
        </div>
      </section>

      {/* Header Section */}
      <section
        id="header"
        className="flex items-center justify-center py-20"
      >
        <div className="text-center">
          <h1 className="text-8xl font-medium mb-5 gradient-text text-glow title-text">
            Meet the MacBook Pro M4
          </h1>
          <p className="text-4xl font-light text-muted-foreground">
            Power re-imagined.
          </p>
        </div>
      </section>


        {/* Hero Section */}
        <section
          id="hero"
          className="h-screen flex items-center justify-between relative"
        >
          {/* DragScene: Left half with padding */}
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
          <h1 className="text-8xl font-medium mb-5 gradient-text text-glow">
            more text
          </h1>
          <p className="text-4xl font-light text-muted-foreground">
            i love drones.
          </p>
        </div>
      </section>
    </main>
  );
}
