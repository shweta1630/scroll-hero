"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const headlineRef = useRef<any[]>([]);
  const statsRef = useRef<any[]>([]);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // 🔤 Headline animation
    headlineRef.current.forEach((el, i) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
        setTimeout(() => {
          el.style.transition = "all 0.6s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, i * 80);
      }
    });

    // 📊 Stats animation
    statsRef.current.forEach((el, i) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        setTimeout(() => {
          el.style.transition = "all 0.6s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, 500 + i * 200);
      }
    });

    // 🚗 Scroll animation (SUPER VISIBLE)
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (imageRef.current) {
        imageRef.current.style.transform =
          `translate(${scrollY * 1.2}px, ${scrollY * 1.5}px) rotate(${scrollY * 0.1}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const text = "WELCOME ITZFIZZ";

  return (
    <main className="h-[250vh] bg-gradient-to-b from-black via-gray-900 to-black text-white">
      
      <section className="min-h-screen flex flex-col justify-center items-center relative overflow-visible">
        
        {/* 🔤 Headline */}
        <h1 className="text-4xl md:text-6xl tracking-[0.5em] font-light flex text-white">
          {text.split("").map((char, i) => (
            <span
              key={i}
              ref={(el) => { if (el) headlineRef.current[i] = el; }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* 📊 Stats */}
        <div className="flex gap-10 mt-10 text-white">
          {[
            { value: "95%", label: "Performance" },
            { value: "120K", label: "Users" },
            { value: "4.9★", label: "Rating" },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => { if (el) statsRef.current[i] = el; }}
            >
              <h2 className="text-2xl font-bold">{item.value}</h2>
              <p className="text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>

        {/* 🚗 Car */}
        <img
          ref={imageRef}
          src="/car.png"
          alt="car"
          className="absolute top-[60%] left-[10%] w-72 transition-transform duration-75"
        />

      </section>

    </main>
  );
}