"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import bgImage from "@/public/bg.png";
import Link from "next/link";

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
      <nav className="relative z-10 px-6 py-4 flex justify-between items-center backdrop-blur-[2px] bg-white/5 mx-4 mt-4 rounded-full border border-white/10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          {/* Add your logo or brand name here if needed */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-8"
        >
          {["Contact", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              {item}
            </a>
          ))}

          <div className="flex items-center space-x-4 ml-8">
            <Link href="/sign-in">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-white/90 hover:text-white transition-colors text-sm font-medium relative group"
              >
                <span className="relative z-10">Sign in</span>
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-white/10" />
              </motion.button>
            </Link>

            <Link href="/sign-up">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 hover:bg-white/20 text-white transition-all"
              >
                Sign up
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Mobile menu button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
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
          {/* News Banner */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full mb-12"
          >
            <span className="text-xs font-medium bg-black/30 text-white px-2 py-1 rounded-full">
              NEWS
            </span>
            <span className="text-sm text-white/90">
              New partnership with Qliro
            </span>
            <svg
              className="w-4 h-4 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>

          {/* Main heading */}
          <h1 className="fs-64 gradient-text font-title font-semibold pb-2.5 md:text-[40px] sm:text-[32px] tracking-tight">
            The Suite for the Entire
            <br />
            Compliance Lifecycle
          </h1>
          <br />
          <br />

          {/* Subheading with improved styling */}
          <p className="font-cursive text-white/90 text-3xl tracking-wide max-w-3xl mx-auto mb-12 leading-relaxed">
            <span className="bg-gradient-to-r from-orange-100/90 to-white/90 bg-clip-text text-transparent">
              Simplifying business onboarding and ensuring secure, compliant
              <br />
              operations for seamless growth and trustworthy partnerships.
            </span>
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg transition-all"
          >
            Get started
          </motion.button>

          {/* Partner Logos */}
          <div className="mt-24">
            <p className="text-[#1A1A1A]/60 text-sm mb-8">
              Trusted by industry leaders
            </p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-12 items-center justify-items-center opacity-60">
              <img src="/qliro.svg" alt="Qliro" className="h-8" />
              <img src="/clevercards.svg" alt="CleverCards" className="h-8" />
              <img src="/mimo.svg" alt="Mimo" className="h-8" />
              <img src="/cardlay.svg" alt="Cardlay" className="h-8" />
              <img src="/tioex.svg" alt="Tioex" className="h-8" />
              <img src="/booksalon.svg" alt="Booksalon" className="h-8" />
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
