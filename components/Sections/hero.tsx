"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Confidence behind the wheel.",
    description:
      "Gifted Wheels Driving School empowers you to drive with skill, safety, and confidence through expert female-led guidance.",
    image: "B.jpeg",
  },
  {
    id: 2,
    title: "Expert Female Instructors.",
    description:
      "Our licensed team brings 45 years of teaching expertise, helping nervous drivers become natural professionals.",
    image: "C.jpeg",
    accent: "45 Years Experience",
  },
  {
    id: 3,
    title: "Ready for Road Test.",
    description:
      "Learn parallel parking and road safety in our dual-brake vehicles designed for your maximum security.",
    image: "A.jpeg",
    accent: "Dual Brake Safety",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[current].image})` }}
            >
              {/* ✅ Pure black cinematic overlay */}
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/30 to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-white uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                {slides[current].accent}
              </span>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8">
                {slides[current].title.split(" ").map((word, i) => (
                  <span key={i}>{word} </span>
                ))}
              </h1>

              <p className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed mb-10 max-w-lg">
                {slides[current].description}
              </p>

              <div className="flex flex-wrap gap-5 items-center">
                <Link
                  href="/contact"
                  className="px-10 py-5 bg-white text-black rounded-2xl font-black shadow-lg hover:-translate-y-1.5 active:scale-95 transition-all duration-300"
                >
                  Book Your Lesson
                </Link>

                <Link
                  href="/services"
                  className="group flex items-center gap-3 px-6 py-5 text-white font-bold text-lg hover:text-gray-300 transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-12 left-6 md:left-auto md:right-12 z-20 flex flex-col gap-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="group flex items-center gap-4 focus:outline-none"
          >
            <span
              className={`text-xs font-bold transition-colors duration-300 ${current === i ? "text-white" : "text-white/40"}`}
            >
              0{i + 1}
            </span>

            <div className="relative w-16 h-[2px] bg-white/20 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                animate={{ x: current === i ? "0%" : "-100%" }}
                transition={{
                  duration: current === i ? 6 : 0.3,
                  ease: "linear",
                }}
              />
            </div>
          </button>
        ))}
      </div>

      {/* Floating Badge */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-12 hidden lg:flex bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[2.5rem] shadow-2xl items-center gap-4 z-10"
      >
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-black shadow-lg">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>

        <div>
          <p className="text-white font-bold leading-none">Safety First</p>
          <p className="text-white/60 text-sm mt-1">Dual-brake certified</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
