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
import bg1Image from "@/public/bg1.png";
import ne1Image from "@/public/ne1.webp";
import neImage from "@/public/ne.webp";
import bleImage from "@/public/ble.jpg";

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

      {/* Interview Section */}
      <section className="relative z-10 px-6 py-32 max-w-7xl mx-auto">
        <div className="card-border p-0.5 rounded-2xl w-full">
          <div className="relative overflow-hidden rounded-2xl">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src={bg1Image}
                alt="Background"
                fill
                className="object-cover opacity-10"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#171532]/90 to-[#08090D]/95" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex sm:flex-row flex-col gap-10 p-8">
              {/* Left Side - Interviewer */}
              <div className="flex-1 sm:border-r border-white/10">
                <div className="flex-center flex-col gap-4">
                  <h3 className="text-center text-primary-100">Interviewer</h3>
                  <div className="z-10 flex items-center justify-center blue-gradient rounded-full size-[120px] relative">
                    <div className="absolute inline-flex size-5/6 animate-ping rounded-full bg-primary-200 opacity-75" />
                    <Image
                      src="/interviewer.jpg"
                      alt="Interviewer"
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-lg text-center text-white">Max Mayer</p>
                  <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-xs font-medium bg-black/30 text-white px-2 py-1 rounded-full">
                      Transcribing
                    </span>
                  </div>
                </div>

                {/* Questions */}
                <div className="mt-8 space-y-4">
                  <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg">
                    <p className="text-white/80">
                      Why do you want to work as a software engineer at our
                      company?
                    </p>
                    <span className="text-xs text-white/60">00:02:58</span>
                  </div>
                  <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg">
                    <p className="text-white/80">
                      Can you describe your software development process?
                    </p>
                    <span className="text-xs text-white/60">00:03:11</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Interview Response */}
              <div className="flex-1">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white">Interview Copilot™ & You</h3>
                    <span className="text-xs bg-black/30 text-white px-3 py-1 rounded-full">
                      AI Generating
                    </span>
                  </div>

                  {/* Responses */}
                  <div className="space-y-4 mt-4">
                    <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg">
                      <span className="text-xs text-white/60 block mb-2">
                        00:02:58
                      </span>
                      <p className="text-white/90">
                        I admire your innovative tech solutions and
                        collaborative culture. My skills in software development
                        and passion for creating efficient code align perfectly
                        with your company&apos;s mission, and I&apos;m eager to
                        contribute to your team&apos;s success.
                      </p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg">
                      <span className="text-xs text-white/60 block mb-2">
                        00:02:58
                      </span>
                      <p className="text-white/90">
                        I gather requirements, design architecture, develop,
                        test, iterate based on feedback, and ensure high-quality
                        deliverables through reviews and testing, while also
                        optimizing performance, maintaining documentation,
                        collaborating with stakeholders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="relative z-10 px-6 py-32 max-w-7xl mx-auto">
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-orange-500 mb-2 block">
            AI TOOLS
          </span>
          <h2 className="text-4xl md:text-5xl font-title font-semibold gradient-text mb-6">
            Why Final Round AI is Your Ultimate
            <br />
            Interview Prep Partner
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            From your first step to a successful interview—our AI-powered tools
            help you prepare with confidence, stand out from the competition,
            and land your dream job.
          </p>
        </motion.div>

        {/* Tools Grid with Staggered Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid md:grid-cols-2 gap-8 mt-16"
        >
          {/* AI Resume Builder Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl opacity-75 group-hover:opacity-100" />
            <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-white/20">
              {/* Card Content */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-orange-500 text-sm font-medium">
                  AI Resume Builder
                </span>
                <div className="bg-orange-500/10 p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Generate a hireable resume with ease in one-click.
              </h3>
              <p className="text-white/80 mb-8">
                Our AI creates a unique, professional, and ATS-optimized resume
                that helps you stand out with personalized suggestions tailored
                to your career goals.
              </p>
              <Image
                src={ne1Image}
                alt="AI Resume Builder Interface"
                className="rounded-lg shadow-2xl w-full object-cover mt-8"
                priority
              />
              <button className="mt-8 flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors">
                <span>Launch Resume Builder</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* AI Mock Interview Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl opacity-75 group-hover:opacity-100" />
            <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-white/20">
              {/* Card Content */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-blue-400 text-sm font-medium">
                  AI Mock Interview
                </span>
                <div className="bg-blue-500/10 p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Prepare for Your Interview with AI-Powered Mock Sessions
              </h3>
              <p className="text-white/80 mb-8">
                Practice with industry-specific questions that reflect the
                latest trends while benefiting from real-time feedback to
                improve your confidence and readiness.
              </p>
              <Image
                src={neImage}
                alt="AI Mock Interview Interface"
                className="rounded-lg shadow-2xl w-full object-cover mt-8"
                priority
              />
              <button className="mt-8 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                <span>Launch Mock Interview</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 py-32 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image src={bleImage} alt="Background Pattern" fill priority />
            <div className="absolute inset-0 bg-gradient-to-b from-white" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-12 grid md:grid-cols-2 gap-16">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="text-sm font-medium text-[#4B5563]">
                BY THE NUMBERS
              </span>
              <h2 className="text-4xl md:text-[42px] font-title font-semibold text-[#111827]">
                Proven Results with
                <br />
                Final Round AI
              </h2>
              <p className="text-[#4B5563] text-lg leading-relaxed">
                Helping job seekers worldwide land offers faster, ace
                interviews, and break language barriers with AI-powered support.
              </p>

              {/* Featured Image */}
              <div className="mt-8 bg-[#E9967A] rounded-xl p-4">
                <span className="text-white text-sm mb-4 block">Angelist</span>
                <h3 className="text-white text-2xl font-semibold mb-2">
                  THE STATE OF AI-POWERED JOB
                  <br />
                  SEARCH: 2024
                </h3>
              </div>
            </div>

            {/* Right Stats */}
            <div className="space-y-12">
              <div className="border-b border-gray-300 pb-8">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-6xl font-bold text-[#111827]">250K+</h3>
                  <p className="text-[#4B5563]">Offers Received</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h3 className="text-6xl font-bold text-[#111827]">1.2M+</h3>
                  <p className="text-[#4B5563] mt-2">Interviews Aced</p>
                </div>
                <div>
                  <h3 className="text-6xl font-bold text-[#111827]">29+</h3>
                  <p className="text-[#4B5563] mt-2">
                    Languages and accents supported
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-12 pt-4">
                <div>
                  <h3 className="text-6xl font-bold text-[#111827]">95%</h3>
                  <p className="text-[#4B5563] mt-2">User satisfaction rate</p>
                </div>
                <div>
                  <h3 className="text-6xl font-bold text-[#111827]">10K+</h3>
                  <p className="text-[#4B5563] mt-2">
                    Companies where users got hired
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
