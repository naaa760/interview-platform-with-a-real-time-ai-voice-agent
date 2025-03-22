"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import bgImage from "@/public/bg.png";
import Link from "next/link";
import Image from "next/image";
import cardImage from "@/public/card.webp";
import glImage from "@/public/gl.png";
import seImage from "@/public/se.png";
import drImage from "@/public/dr.png";
import logoImage from "@/public/logo.png";
import blImage from "@/public/bl.png";

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-[length:100%_120%] bg-center scale-110"
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
      <nav className="relative z-10 px-6 py-2 flex justify-between items-center backdrop-blur-[px] bg-white/5 mx-auto mt-4 rounded-full border border-white/10 max-w-[90%] md:max-w-[80%]">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <Image
            src={drImage}
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[px]" />
        </div>

        {/* Logo and Brand */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 relative z-10"
        >
          <Image
            src={logoImage}
            alt="Logo"
            width={68}
            height={68}
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Navigation Links and Buttons */}
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
            <Link href="/auth/signin">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 text-white font-medium text-sm tracking-wide hover:text-white/90 transition-colors relative group"
              >
                <span className="relative z-10">Sign in</span>
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-white/10" />
              </motion.button>
            </Link>

            <Link href="/auth/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full text-sm font-medium bg-white/10 hover:bg-white/20 text-white tracking-wide transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
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
            <span className="text-xs font-medium bg-black/30 text-[#b9ff57] px-2 py-1 rounded-full drop-shadow-[0_0_10px_#39FF14]">
              NEWS
            </span>
            <span className="text-sm text-[#cfff9f] drop-shadow-[0_0_10px_#39FF14]">
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

          {/* Main heading with images */}
          <div className="flex items-center justify-center gap-8 mb-8">
            {/* Left side image with flip animation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-[200px] hidden md:block"
            >
              <motion.div
                animate={{
                  rotateY: [0, 360, 720, 1080, 0],
                  scale: [1, 1.1, 1.1, 1.1, 1],
                }}
                transition={{
                  duration: 6,
                  times: [0, 0.25, 0.5, 0.75, 1],
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <Image
                  src={seImage}
                  alt="SE Interface"
                  width={200}
                  height={150}
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Main heading */}
            <h1 className="fs-64 gradient-text font-title font-semibold pb-2.5 md:text-[40px] sm:text-[32px] tracking-tight text-left">
              AI isn&apos;t replacing humans
              <br />
              it&apos;s amplifying our potential.
            </h1>

            {/* Right side image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-[200px] hidden md:block"
            >
              <Image
                src={glImage}
                alt="GL Interface"
                width={200}
                height={150}
                priority
              />
            </motion.div>
          </div>

          {/* Subheading with improved styling */}
          <p className="font-cursive text-white/90 text-3xl tracking-wide max-w-3xl mx-auto mb-12 leading-relaxed">
            <span className="bg-gradient-to-r from-orange-100/90 to-white/90 bg-clip-text text-transparent">
              AI is not just about automation; it&apos;s about augmentation—
              enhancing human potential, creativity, and productivity.
              <br />
              The future isn&apos;t man versus machine; it&apos;s man with
              machine.
            </span>
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg transition-all"
          >
            Get started
          </motion.button>
        </motion.div>
      </main>

      {/* Card Section */}
      <section className="relative z-10 px-6 py-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-title font-semibold gradient-text"
            >
              Build your next project faster
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-lg leading-relaxed"
            >
              Create stunning interfaces with our pre-built components and
              intuitive design system. Speed up your workflow and focus on what
              matters most.
            </motion.p>

            {/* Add bl.png image with 3D animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative w-[380px] mt-8"
            >
              <motion.div
                animate={{
                  rotateY: [0, 360, 720, 1080, 0],
                  scale: [1, 1.1, 1.1, 1.1, 1],
                }}
                transition={{
                  duration: 6,
                  times: [0, 0.25, 0.5, 0.75, 1],
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                }}
              >
                <Image
                  src={blImage}
                  alt="BL Interface"
                  width={1200}
                  height={900}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Card Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 via-red-500/20 to-purple-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-75 group-hover:opacity-100" />

            {/* Card container with improved shadows */}
            <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] group-hover:shadow-[0_8px_48px_rgba(0,0,0,0.4)] transition-all duration-500">
              <Image
                src={cardImage}
                alt="Feature Card"
                width={800}
                height={600}
                className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />

              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

              {/* Optional: Add subtle inner border glow */}
              <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-white/10 transition-colors duration-500" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Add scroll detection */}
      <script>
        {`
          let prevScrollY = window.scrollY;
          window.addEventListener('scroll', () => {
            const navbar = document.querySelector('nav');
            if (window.scrollY > prevScrollY) {
              navbar.style.transform = 'translateY(-100%)';
            } else {
              navbar.style.transform = 'translateY(0)';
            }
            prevScrollY = window.scrollY;
          });
        `}
      </script>
    </div>
  );
}
