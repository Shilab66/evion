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
          start: 'top 90%',
          end: 'top 50%', 
          scrub: 0.3,
        },
        width: '100%',
        duration: 0.5,
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
        className="absolute inset-0 w-0 h-full bg-gradient-to-r from-green-400 to-cyan-400 opacity-70"
        style={{ transformOrigin: 'left' }}
      />
    </span>
  )
}

