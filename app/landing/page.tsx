"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen relative bg-white overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 2s;
        }
      `}</style>
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0fff4_1px,transparent_1px),linear-gradient(to_bottom,#f0fff4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Beautiful Organic SVG Shapes with Light Lime Green Gradients */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {/* SVG Shape 1 - Top Left Background */}
        <div className="absolute -top-10 -left-10 w-40 h-40 opacity-30">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient
                id="gradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#9f1239" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#fda4af" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient1)"
              d="M10.2,-21.8C17.5,-11.3,30.4,-15.5,42.4,-12.5C54.5,-9.5,65.5,0.7,68.1,12.5C70.6,24.3,64.7,37.6,54.5,44.5C44.3,51.4,29.8,51.8,19.9,43.7C10,35.6,4.7,18.9,-8.3,19.2C-21.2,19.6,-41.8,36.8,-50.7,37.7C-59.5,38.6,-56.7,23.2,-48.1,13.4C-39.4,3.6,-25,-0.6,-22.9,-12.7C-20.8,-24.7,-31.2,-44.7,-29.5,-57.7C-27.7,-70.7,-13.9,-76.8,-6.2,-67.2C1.5,-57.6,3,-32.3,10.2,-21.8Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* SVG Shape 2 */}
        <div className="absolute -top-5 -right-15 w-48 h-48 opacity-25">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <radialGradient id="gradient2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#9f1239" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#fda4af" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            <path
              fill="url(#gradient2)"
              d="M31.4,-53C41.2,-42.6,49.9,-34.7,51.1,-25.3C52.4,-15.9,46.1,-5.1,41.8,4.1C37.5,13.3,35.2,20.9,30,24.8C24.8,28.7,16.7,28.9,7.2,37.9C-2.4,46.9,-13.3,64.6,-24.2,67.9C-35.1,71.3,-46,60.3,-44.9,47C-43.9,33.7,-30.9,18.1,-23.6,8.9C-16.3,-0.3,-14.8,-3.2,-16.8,-11.3C-18.7,-19.5,-24.2,-32.9,-22,-46.7C-19.8,-60.5,-9.9,-74.8,0.5,-75.5C10.8,-76.2,21.7,-63.4,31.4,-53Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* SVG Shape 3 */}
        <div className="absolute top-80 -left-20 w-32 h-32 opacity-20">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9f1239" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#fda4af" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient3)"
              d="M11.3,-18C17.1,-11.3,25.9,-11.3,29,-8C32,-4.7,29.1,1.9,32.6,16.6C36.1,31.3,46,54.1,41.6,61.4C37.2,68.7,18.6,60.5,1.3,58.8C-16.1,57,-32.1,61.7,-33,53.2C-33.8,44.8,-19.4,23.2,-23,8.4C-26.6,-6.5,-48.1,-14.5,-52.6,-22.1C-57.1,-29.7,-44.5,-36.8,-32.9,-41.6C-21.3,-46.5,-10.6,-49,-4,-43.6C2.7,-38.1,5.4,-24.7,11.3,-18Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* SVG Shape 4 */}
        <div className="absolute bottom-10 -right-20 w-44 h-44 opacity-15">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient
                id="gradient4"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#9f1239" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#fda4af" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient4)"
              d="M25.8,-45.9C29.4,-42.7,25.5,-27.6,34.9,-17.9C44.2,-8.3,66.9,-4.2,66.2,-0.4C65.5,3.4,41.5,6.7,33.2,18.3C25,29.8,32.5,49.5,29.6,57.1C26.7,64.7,13.3,60.2,4.2,53C-5,45.8,-10,35.9,-18.1,31.3C-26.1,26.7,-37.2,27.2,-40.3,22.9C-43.5,18.6,-38.8,9.3,-43.6,-2.8C-48.4,-14.8,-62.7,-29.6,-62.5,-39.1C-62.2,-48.5,-47.5,-52.6,-34.7,-50.5C-21.8,-48.3,-10.9,-39.9,0.1,-40.1C11.1,-40.3,22.2,-49,25.8,-45.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* SVG Shape 5 */}
        <div className="absolute bottom-0 left-1/4 w-36 h-36 opacity-18">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <radialGradient id="gradient5" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#9f1239" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#fda4af" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            <path
              fill="url(#gradient5)"
              d="M17.3,-38.9C18,-29.6,11,-16,11.8,-8.8C12.6,-1.5,21.3,-0.8,33,6.8C44.7,14.3,59.5,28.6,57.2,33.2C54.9,37.8,35.4,32.7,23,31.1C10.6,29.4,5.3,31.2,-0.7,32.5C-6.7,33.7,-13.5,34.4,-19,32.1C-24.6,29.8,-28.9,24.5,-39.9,18.6C-50.9,12.8,-68.6,6.4,-69.5,-0.6C-70.5,-7.5,-54.8,-15,-45.6,-24.1C-36.5,-33.2,-34,-43.9,-27.5,-49.7C-21,-55.6,-10.5,-56.7,-1.1,-54.8C8.3,-52.9,16.7,-48.1,17.3,-38.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* New Floating SVGs */}
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-24 h-24 opacity-20 animate-float">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient
                id="floatingGradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#9f1239" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#fda4af" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              fill="url(#floatingGradient1)"
              d="M40.8,-70.7C54.7,-62.9,69,-54.3,76.4,-41.6C83.8,-28.9,84.2,-12.1,81.5,3.6C78.8,19.2,73,33.7,64.1,45.7C55.2,57.7,43.3,67.2,29.7,71.9C16.1,76.6,0.8,76.5,-14.9,74.6C-30.6,72.8,-46.7,69.2,-57.7,59.3C-68.7,49.4,-74.6,33.2,-79.2,16.1C-83.8,-1,-87,-19,-81.8,-33.5C-76.6,-48,-63,-59,-48,-67.8C-33,-76.6,-16.5,-83.2,-0.2,-82.9C16.1,-82.6,32.2,-75.4,40.8,-70.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="absolute bottom-20 left-20 w-32 h-32 opacity-15 animate-float-delayed">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient
                id="floatingGradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#9f1239" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#fda4af" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              fill="url(#floatingGradient2)"
              d="M44.5,-76.3C59.1,-69.9,73.3,-60.1,81.8,-46.2C90.3,-32.3,93,-14.3,89.8,2.3C86.5,19,77.3,34.3,66.7,47.3C56.1,60.3,44.1,71,30.1,76.5C16.1,82,-0,82.3,-15.4,77.9C-30.8,73.5,-45.5,64.4,-57.8,52.6C-70.1,40.8,-80,26.3,-84.1,9.7C-88.2,-6.9,-86.5,-25.5,-78.3,-40.2C-70.1,-54.9,-55.4,-65.6,-40.4,-71.8C-25.4,-78,-12.7,-79.6,1.9,-82.8C16.5,-86,33,-82.8,44.5,-76.3Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* New SVG Shape 1 - Top Right */}
        <div className="absolute top-32 right-16 w-32 h-32 opacity-25">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient
                id="newGradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#9f1239" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#fda4af" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              fill="url(#newGradient1)"
              d="M23.2,-40.7C27.5,-28.9,26.4,-18.6,28,-10C29.5,-1.4,33.6,5.4,30.2,8C26.9,10.6,16.1,8.9,9.8,15.9C3.5,22.9,1.8,38.4,-5.3,45.7C-12.3,53,-24.7,52,-28.2,44.1C-31.8,36.3,-26.5,21.6,-27.7,10.7C-28.8,-0.2,-36.4,-7.2,-38.2,-15.7C-39.9,-24.1,-35.8,-33.8,-28.5,-44.7C-21.1,-55.5,-10.6,-67.5,-0.5,-66.7C9.5,-66,19,-52.6,23.2,-40.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* New SVG Shape 2 - Middle Left */}
        <div className="absolute top-1/2 -left-8 w-36 h-36 opacity-20">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <radialGradient id="newGradient2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#9f1239" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#fda4af" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            <path
              fill="url(#newGradient2)"
              d="M11.4,-2.1C20.9,-1.9,38.9,-0.9,39.8,0.9C40.7,2.8,24.5,5.5,15,9.4C5.5,13.2,2.8,18.1,-6.8,24.9C-16.4,31.8,-32.8,40.5,-47.4,36.7C-61.9,32.8,-74.5,16.4,-71.1,3.4C-67.7,-9.5,-48.2,-19.1,-33.6,-19.3C-19.1,-19.4,-9.5,-10.2,-4.3,-5.9C0.9,-1.6,1.9,-2.2,11.4,-2.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* New SVG Shape 3 - Bottom Right */}
        <div className="absolute bottom-40 right-8 w-28 h-28 opacity-22 animate-float">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient
                id="newGradient3"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#9f1239" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#fda4af" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              fill="url(#newGradient3)"
              d="M35,-27.9C51.4,-18.6,74.8,-9.3,77.8,3C80.7,15.2,63.2,30.4,46.8,33.8C30.4,37.2,15.2,28.7,1.1,27.6C-13,26.6,-26.1,32.8,-39.8,29.5C-53.6,26.1,-68,13,-62.6,5.4C-57.2,-2.2,-32,-4.5,-18.2,-13.8C-4.5,-23,-2.2,-39.4,3.5,-42.9C9.3,-46.5,18.6,-37.2,35,-27.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* New SVG Shape 4 - Top Left Center */}
        <div className="absolute top-48 left-16 w-30 h-30 opacity-18 animate-float-delayed">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient
                id="newGradient4"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#9f1239" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#fda4af" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              fill="url(#newGradient4)"
              d="M17.3,-38C21.4,-27.5,23,-20.9,33.8,-15.2C44.6,-9.5,64.5,-4.8,61.7,-1.6C58.9,1.5,33.3,3,23.8,10.8C14.2,18.6,20.7,32.8,19.4,36.8C18.1,40.7,9,34.5,4,27.6C-1.1,20.7,-2.2,13.2,-14,15.3C-25.8,17.4,-48.4,29.2,-55,28.2C-61.6,27.3,-52.2,13.6,-43.4,5.1C-34.5,-3.5,-26.2,-6.9,-26.2,-19.1C-26.1,-31.4,-34.2,-52.4,-31.2,-63.5C-28.3,-74.6,-14.1,-75.8,-3.8,-69.2C6.6,-62.7,13.1,-48.4,17.3,-38Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>

      {/* Enhanced Sticky Navigation Bar with Scroll Effect */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-2 bg-white/80 backdrop-blur-lg shadow-lg"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? "py-2" : "py-3"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div
                className={`transition-all duration-300 ${
                  scrolled
                    ? "w-8 h-8 bg-gradient-to-tr from-pink-800 to-rose-400"
                    : "w-10 h-10 bg-gradient-to-tr from-gray-900 to-gray-700"
                } rounded-xl shadow-lg`}
              ></div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Ribbon
              </span>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              {["Pricing", "Who we serve", "Company", "Ribbon API"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`font-medium transition-all duration-300 ${
                      scrolled
                        ? "text-gray-600 hover:text-pink-800"
                        : "text-gray-800 hover:text-rose-400"
                    }`}
                  >
                    {item}
                  </Link>
                )
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                href="/signup"
                className={`px-4 py-2 font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-gray-600 hover:text-pink-800"
                    : "text-gray-800 hover:text-pink-800"
                }`}
              >
                Sign up
              </Link>
              <Link
                href="/demo"
                className={`px-5 py-2.5 font-medium text-white rounded-full transition-all duration-300 ${
                  scrolled
                    ? "bg-gradient-to-r from-pink-800 to-rose-400 hover:from-pink-800 hover:to-rose-400"
                    : "bg-gradient-to-r from-gray-900 to-gray-800 hover:from-pink-800 hover:to-rose-400"
                } shadow-md hover:shadow-lime-200/30`}
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <br />
      <br />
      <br />
      <br />

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 pt-16 pb-20 text-center">
        {/* Announcement Banner */}
        <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-8 shadow-sm border border-gray-100/50">
          <div className="w-6 h-6 bg-gradient-to-tr from-pink-800 to-rose-400 rounded-lg shadow-sm"></div>
          <span className="mx-2 text-gray-700">
            We raised $8M+ to fix hiring!
          </span>
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

        {/* Main Heading with Beautiful Black & Silver Gradient */}
        <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6 tracking-tight max-w-5xl mx-auto">
          <span className="bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-sm">
            Discover{" "}
          </span>
          <span className="bg-gradient-to-r from-pink-800 via-rose-400 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
            top talent
          </span>{" "}
          <span className="bg-gradient-to-b from-black via-gray-800 to-gray-600 bg-clip-text text-transparent drop-shadow-sm">
            faster with
          </span>{" "}
          <span className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-sm">
            AI interviews.
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Effortlessly screen every candidate and collect AI-powered notes for
          every interview. Purpose-built for recruiters.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="px-8 py-4 text-gray-700 hover:text-pink-800 text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Sign up—it&apos;s free
          </Link>
        </div>
      </section>

      {/* Placeholder for future sections */}
      <section className="relative z-10 min-h-screen bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            More sections coming soon...
          </h2>
          <p className="text-center text-gray-600">
            This area is ready for your additional content sections.
          </p>
        </div>
      </section>

      {/* Enhanced Gradient overlay for bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/90 to-transparent z-[2]"></div>

      {/* Additional lime green glow at bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-t from-lime-100/20 to-transparent z-[1]"></div>
    </main>
  );
}
