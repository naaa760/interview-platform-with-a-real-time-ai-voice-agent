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
import drpImage from "@/public/drp.jpg";

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleVisibility = () => {
      setVisible(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleVisibility);
    return () => window.removeEventListener("scroll", handleVisibility);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[length:100%_120%] bg-center scale-100"
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br  via-[#2d1810]/80 to-[#1a0f07]/80" />

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

      {/* Navbar */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 
          flex justify-between items-center 
          mx-auto mt-2 rounded-full border border-white/10 
          max-w-[90%] md:max-w-[80%] px-4 py-1.5
          transition-all duration-300 relative
          ${visible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <Image
            src={drImage}
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
        </div>

        {/* Logo */}
        <div className="flex items-center gap-2 relative z-10">
          <Image
            src={logoImage}
            alt="Final Round"
            width={30}
            height={30}
            className="object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 relative z-10">
          <a
            href="#"
            className="text-sm text-white/80 hover:text-white transition-colors"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-sm text-white/80 hover:text-white transition-colors"
          >
            FAQ
          </a>
          <button className="px-4 py-1.5 text-sm rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
            Sign in
          </button>
          <button className="px-4 py-1.5 text-sm rounded-full bg-primary-200 text-dark-100 hover:bg-primary-200/80 transition-colors">
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors relative z-10"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden absolute top-full right-0 mt-2 w-48 py-2 
            bg-dark-200 rounded-lg shadow-lg border border-white/10
            transition-all duration-200 relative z-10
            ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
        >
          <a
            href="#"
            className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5"
          >
            Contact
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5"
          >
            FAQ
          </a>
          <hr className="my-2 border-white/10" />
          <a
            href="#"
            className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5"
          >
            Sign in
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-primary-200 hover:bg-primary-200/10"
          >
            Sign up
          </a>
        </div>
      </nav>

      <main className="relative z-10 px-6 pt-20 pb-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
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

          <div className="flex items-center justify-center gap-8 mb-8">
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

            <h1 className="fs-64 gradient-text font-title font-semibold pb-2.5 md:text-[40px] sm:text-[32px] tracking-tight text-left">
              AI isn&apos;t replacing humans
              <br />
              it&apos;s amplifying our potential.
            </h1>

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

      <section className="relative z-10 px-6 py-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
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

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 via-red-500/20 to-purple-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-75 group-hover:opacity-100" />

            <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] group-hover:shadow-[0_8px_48px_rgba(0,0,0,0.4)] transition-all duration-500">
              <Image
                src={cardImage}
                alt="Feature Card"
                width={800}
                height={600}
                className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

              <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-white/10 transition-colors duration-500" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative z-10 px-6 py-32 max-w-7xl mx-auto">
        <div className="card-border p-0.5 rounded-2xl w-full">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 z-0">
              <Image src={drpImage} alt="Background Pattern" fill priority />
              <div className="absolute inset-0 bg-gradient-to-b  to-[#08090D]/98" />
            </div>

            <div className="relative z-10 flex sm:flex-row flex-col gap-10 p-8">
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

      <section className="relative z-10 px-6 py-32 max-w-7xl mx-auto">
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

      <section className="relative z-10 px-6 py-32 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)] transition-shadow duration-300">
          <div className="absolute inset-0 z-0">
            <Image src={bleImage} alt="Background Pattern" fill priority />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90" />
          </div>

          <div className="relative z-10 p-12 grid md:grid-cols-2 gap-16">
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

              <div className="mt-8 bg-[#E9967A] rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <span className="text-white text-sm mb-4 block">Angelist</span>
                <h3 className="text-white text-2xl font-semibold mb-2">
                  THE STATE OF AI-POWERED JOB
                  <br />
                  SEARCH: 2024
                </h3>
              </div>
            </div>

            <div className="space-y-12">
              <div className="border-b border-gray-300 pb-8 hover:border-gray-400 transition-colors duration-300">
                <div className="flex justify-between items-baseline group">
                  <h3 className="text-6xl font-bold text-[#111827] group-hover:scale-105 transition-transform duration-300">
                    250K+
                  </h3>
                  <p className="text-[#4B5563] group-hover:text-[#111827] transition-colors duration-300">
                    Offers Received
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-12">
                <div className="group">
                  <h3 className="text-6xl font-bold text-[#111827] group-hover:scale-105 transition-transform duration-300">
                    1.2M+
                  </h3>
                  <p className="text-[#4B5563] mt-2 group-hover:text-[#111827] transition-colors duration-300">
                    Interviews Aced
                  </p>
                </div>
                <div className="group">
                  <h3 className="text-6xl font-bold text-[#111827] group-hover:scale-105 transition-transform duration-300">
                    29+
                  </h3>
                  <p className="text-[#4B5563] mt-2 group-hover:text-[#111827] transition-colors duration-300">
                    Languages and accents supported
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-12 pt-4">
                <div className="group">
                  <h3 className="text-6xl font-bold text-[#111827] group-hover:scale-105 transition-transform duration-300">
                    95%
                  </h3>
                  <p className="text-[#4B5563] mt-2 group-hover:text-[#111827] transition-colors duration-300">
                    User satisfaction rate
                  </p>
                </div>
                <div className="group">
                  <h3 className="text-6xl font-bold text-[#111827] group-hover:scale-105 transition-transform duration-300">
                    10K+
                  </h3>
                  <p className="text-[#4B5563] mt-2 group-hover:text-[#111827] transition-colors duration-300">
                    Companies where users got hired
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-32 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-orange-500 mb-2 block">
            INTEGRATIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-title font-semibold gradient-text mb-6">
            AI-Powered Interview Coaching
            <br />
            for Every Career Stage
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Unlock smarter interview preparation with seamless AI
            integrations—personalized for your career path.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all duration-300 hover:border-white/20">
              IT & Tech
            </button>
            <button className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all duration-300 hover:border-white/20">
              Sales & Customer Roles
            </button>
            <button className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all duration-300 hover:border-white/20">
              Graduates
            </button>
            <button className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all duration-300 hover:border-white/20">
              International Job Seekers
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center mt-4"
          >
            <button className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all duration-300 hover:border-white/20">
              Freelancers & Contractors
            </button>
            <button className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all duration-300 hover:border-white/20">
              Engineers & Tech
            </button>
            <button className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all duration-300 hover:border-white/20">
              Executives
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center mt-4"
          >
            <button className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all duration-300 hover:border-white/20">
              MBA & Grad Applicants
            </button>
            <button className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all duration-300 hover:border-white/20">
              Career Changers
            </button>
            <button className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all duration-300 hover:border-white/20">
              Sales & Customer Roles
            </button>
            <button className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all duration-300 hover:border-white/20">
              International
            </button>
          </motion.div>
        </div>
      </section>

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

      {/* Footer Section */}
      <footer className="relative z-10 px-6 py-16 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={logoImage}
                alt="Final Round"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-xl font-semibold text-white">
                Final Round
              </span>
            </div>
            <p className="text-white/60 mb-6">
              Your trusted platform to ace any job interview. Find the perfect
              resume, and land your dream job.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm text-white/60">
                  All services are online
                </span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Contact Us", "PR & Media", "Careers", "FAQ"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-3">
              {[
                "Interview Copilot",
                "AI Mock Interview",
                "AI Resume Builder",
                "AI Auto Apply",
                "Interview Questions",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              {[
                "Hirevue Interviews",
                "Phone Interviews",
                "College Admission Interviews",
                "Coding Interview Job Sites",
                "Speech Analysis",
                "Q&A Pairs",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <span>
                © 2025 Final Round AI, 643 Teresita Blvd, San Francisco, CA
                94127
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-sm text-white/40">
          <p>
            This platform provides guidance, resources, and support to enhance
            your job search. However, securing employment within 30 days depends
            on various factors beyond our control, including market conditions,
            individual effort, and employer decisions. We do not guarantee job
            placement within any specific timeframe.
          </p>
        </div>
      </footer>
    </div>
  );
}
