'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current.children, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

      gsap.from(buttonRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: 'back.out(1.7)'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="bg-gradient-to-br from-accent to-white py-24 md:py-32 min-h-[90vh] flex items-center">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div ref={textRef} className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
            Solutions For Building A Smart World!
          </h1>
          <p className="text-lg md:text-xl text-dark leading-relaxed">
            We deliver cutting-edge IT solutions that transform businesses and drive digital innovation. 
            From web applications to enterprise systems, we're your partner in technological excellence.
          </p>
          <p className="text-lg md:text-xl text-dark leading-relaxed">
            With over 750+ successful projects and 650+ satisfied clients, we bring expertise, 
            innovation, and dedication to every solution we create.
          </p>
          <button ref={buttonRef} className="btn-primary">
            Consult Now
          </button>
        </div>
        <div className="h-[400px] md:h-[600px] relative">
          <ThreeScene />
        </div>
      </div>
    </section>
  );
}
