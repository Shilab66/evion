import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface AnimatedHighlightProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedHighlight({ children, className = '' }: AnimatedHighlightProps) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const highlightRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (containerRef.current && highlightRef.current) {
      gsap.to(highlightRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%', // Trigger earlier when the top of the element is 80% down the viewport
          end: 'top 50%',  // End earlier when the top of the element is 20% down the viewport
          scrub: 0.3,      // Smoother and faster animation response
        },
        width: '100%',
        duration: 0.5, // Maintain a quick animation duration
        ease: 'none',
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <span ref={containerRef} className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span
        ref={highlightRef}
        className="absolute inset-0 w-0 h-full bg-gradient-to-r from-green-400 to-cyan-400 opacity-50"
        style={{ transformOrigin: 'left' }}
      />
    </span>
  )
}

