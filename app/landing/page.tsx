"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import bgImage from "@/public/bg.png";

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f07]/80 via-[#2d1810]/80 to-[#1a0f07]/80" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png)",
          backgroundSize: "128px auto",
          backgroundRepeat: "repeat",
          backgroundPosition: "left top",
        }}
      />

      {/* Animated glow effects */}
      <div className="absolute inset-0">
        <div
          className="absolute rounded-full w-[800px] h-[800px] blur-[120px] opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,140,70,0.3), transparent 50%)`,
          }}
        />
        <div
          className="absolute rounded-full w-[600px] h-[600px] blur-[120px] opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x + 200}px ${
              mousePosition.y - 200
            }px, rgba(255,100,50,0.3), transparent 50%)`,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-white text-2xl font-bold">Auralis</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex space-x-8"
        >
          {[
            "Services",
            "Process",
            "Industries",
            "Pricing",
            "Team",
            "Contact",
            "FAQ",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all"
        >
          Get template
        </motion.button>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 px-6 pt-20 pb-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-100 via-white to-orange-100 mb-6">
            We elevate your business using Artificial Intelligence.
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-12">
            We elevate and grow organizations using top-tier Artificial
            Intelligence solutions.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all"
            >
              Our services
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Book a call
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 text-center"
        >
          <p className="text-gray-400 mb-8">You're in good company</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
            {/* Replace these with actual company logos */}
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-32 h-12 bg-gray-800 rounded-lg animate-pulse"
                />
              ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
