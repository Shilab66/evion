import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedStats: React.FC = () => {
  const [inViewRef, inView] = useInView({ triggerOnce: true });
  const [percentages, setPercentages] = useState<number[]>([0, 0, 0]);

  const data = [
    { title: "Farmers who have concerns\nover drone usage", percentage: 76, barWidth: "76%" },
    { title: "Currently using or considering drone usage", percentage: 74, barWidth: "74%" },
    { title: "Farmers that contract external companies to operate drones", percentage: 49, barWidth: "49%" },
  ];

  const animateNumbers = () => {
    const intervalIds = data.map((item, index) => {
      const target = item.percentage;
      let current = 0;

      return setInterval(() => {
        if (current >= target) {
          clearInterval(intervalIds[index]);
          return;
        }
        if(target-current < 10){
            current += 1;
        } else{
            current += 4;
        }
        
        setPercentages((prev) => {
          const updated = [...prev];
          updated[index] = current;
          return updated;
        });
      }, 20);
    });
  };

  if (inView && percentages.every((p) => p === 0)) animateNumbers();

  return (
    <div
      ref={inViewRef}
      style={{
        backgroundColor: "rgba(39, 39, 42, 0.5)",
        padding: "2rem",
        borderRadius: "0.5rem",
      }}
    >
      <div style={{ gap: "1.5rem", display: "flex", flexDirection: "column" }}>
        <p
          style={{
            textAlign: "left",
            color: "rgb(209, 213, 219)",
            fontSize: "1.875rem",
            marginBottom: "3rem",
          }}
        >
          Studies show that...
        </p>
        {data.map((item, index) => (
          <div key={index} style={{ gap: "0.5rem", display: "flex", flexDirection: "column" }}>
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              gap: "1rem" 
            }}>
              <h4
                style={{
                  textAlign: "left",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  whiteSpace: "pre-line",
                  maxWidth: "70%",
                  margin: 0
                }}
              >
                {item.title}
              </h4>
              <span
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  background: "linear-gradient(to right, #3b82f6, #10b981)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1,
                  display: "flex",
                  alignItems: "center"
                }}
              >
                {percentages[index]}%
              </span>
            </div>
            <div
              style={{
                width: "100%",
                height: "0.5rem",
                backgroundColor: "rgb(31, 41, 55)",
                borderRadius: "0.25rem",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: inView ? item.barWidth : "0%",
                  background: "linear-gradient(to right, #3b82f6, #10b981)",
                  borderRadius: "0.25rem",
                  transition: "width 1s ease-in-out",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedStats;

