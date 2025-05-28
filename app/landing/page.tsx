"use client";

import { useState, useEffect, JSX } from "react";
import Link from "next/link";
import Image from "next/image";

type ServiceCard = {
  icon: string;
  title: string;
  description: string;
  trustedBy: string[];
};

type FeatureCard = {
  title: string;
  description: string;
  icon: JSX.Element;
};

type FAQItem = {
  question: string;
  answer: string;
};

const serviceCards: ServiceCard[] = [
  {
    icon: "code",
    title: "Software engineers",
    description: "From full-stack to specialized roles",
    trustedBy: ["Katalyze AI", "Tactable"],
  },
  {
    icon: "factory",
    title: "Factory workers",
    description: "Production and assembly specialists",
    trustedBy: ["First Brands Group", "Tenneco", "Dana Inc."],
  },
  {
    icon: "car",
    title: "Automotive service",
    description: "Skilled mechanics and technicians",
    trustedBy: ["CarMax", "Jiffy Lube"],
  },
  {
    icon: "headset",
    title: "Customer service",
    description: "Call and support specialists",
    trustedBy: ["Treantly", "Atento"],
  },
  {
    icon: "chart",
    title: "Sales staff",
    description: "Revenue-driving professionals",
    trustedBy: ["Hire Engine", "Cosnet Global"],
  },
  {
    icon: "warehouse",
    title: "Warehouse staff",
    description: "Logistics and inventory experts",
    trustedBy: ["XPO Logistics", "Sysco"],
  },
];

const candidateFeatures: FeatureCard[] = [
  {
    title: "No Interview Fatigue",
    description:
      "A consistent and professional experience with unbiased treatment and evaluation.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Comprehensive Subject Coverage",
    description: "AI covers past experiences, skills, availability and salary.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
  },
  {
    title: "Dynamic and Personalized Conversations",
    description:
      "The AI adapts to drive insightful engagement with each candidate response.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
  },
];

const faqItems: FAQItem[] = [
  {
    question: "What types of interviews can we conduct?",
    answer:
      "We support both one-way and two-way interviews. One-way interviews allow candidates to record responses to predefined questions, while two-way interviews enable real-time AI conversation with candidates.",
  },
  {
    question: "How many interviews can be taken in the free trial?",
    answer:
      "The free trial includes up to 5 interview sessions, giving you a chance to experience our platform's capabilities before committing.",
  },
  {
    question: "On which platforms can I use my interview link?",
    answer:
      "Our interview links are compatible with all major web browsers and can be accessed on desktop, tablet, and mobile devices. No special software installation required.",
  },
  {
    question:
      "What types of questions can be generated in a one-way interview?",
    answer:
      "Our AI can generate role-specific technical questions, behavioral questions, situational scenarios, and skill assessment questions tailored to the position.",
  },
  {
    question: "Can we predefine questions in two-way interview?",
    answer:
      "Yes, you can set predefined questions while still maintaining the dynamic nature of the conversation. The AI will incorporate these questions naturally into the flow of the interview.",
  },
];

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [authDropdownOpen, setAuthDropdownOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".relative")) {
        setAuthDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const getIconSvg = (iconName: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      code: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      factory: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      car: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21c0 1.1-0.9 2-2 2H7c-1.1 0-2-0.9-2-2M5 16.5c0-1.1 0.9-2 2-2h10c1.1 0 2 0.9 2 2M17 8l2 3h-3m-3-3h-2m-3 0H7l-2 3h14l-2-3z"
          />
        </svg>
      ),
      headset: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 18v-6a9 9 0 0118 0v6"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"
          />
        </svg>
      ),
      chart: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      warehouse: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>
      ),
    };
    return iconMap[iconName] || null;
  };

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
        @keyframes pulse {
          0%,
          100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(0.5);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 2s;
        }
        .animate-pulse {
          animation: pulse 1s ease-in-out infinite;
        }
      `}</style>
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0fff4_1px,transparent_1px),linear-gradient(to_bottom,#f0fff4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        {/* Additional grid pattern for "Who we serve" section */}
        <div className="absolute top-[100vh] left-0 right-0 h-[60vh] bg-[linear-gradient(to_right,#f0fff4_1px,transparent_1px),linear-gradient(to_bottom,#f0fff4_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
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
                Echo
              </span>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              {["Pricing", "Who I serve", "Echo API"].map((item) => (
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
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              {/* Auth Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setAuthDropdownOpen(!authDropdownOpen)}
                  className={`px-4 py-2 font-medium transition-all duration-300 flex items-center space-x-1 ${
                    scrolled
                      ? "text-gray-600 hover:text-pink-800"
                      : "text-gray-800 hover:text-pink-800"
                  }`}
                >
                  <span>Sign in</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      authDropdownOpen ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {authDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                    <Link
                      href="/sign-in"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-pink-800 transition-colors duration-200"
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/sign-up"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-pink-800 transition-colors duration-200"
                    >
                      Create account
                    </Link>
                    <div className="border-t border-gray-100 my-2"></div>
                    <Link
                      href="/sign-up"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-pink-800 transition-colors duration-200"
                    >
                      Forgot password?
                    </Link>
                  </div>
                )}
              </div>

              {/* Book Demo Button */}
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
            I have made this website use for free!
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

      {/* Add this section after the hero section */}
      <section className="relative z-10 py-24 bg-gradient-to-b from-white/80 via-white/90 to-gray-50/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent">
              Who we serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored interview experiences for every role, powered by
              industry-specific AI
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
              >
                {/* Card Header */}
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-tr from-pink-800/10 to-rose-400/10 text-pink-800 group-hover:from-pink-800 group-hover:to-rose-400 group-hover:text-white transition-all duration-300">
                    {getIconSvg(card.icon)}
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-gray-900">
                    {card.title}
                  </h3>
                </div>

                {/* Card Content */}
                <p className="text-gray-600 mb-6">{card.description}</p>

                {/* Trusted By Section */}
                <div className="mt-auto">
                  <p className="text-sm text-gray-500 mb-2">Trusted by:</p>
                  <div className="flex flex-wrap gap-2">
                    {card.trustedBy.map((company, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Gradient Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-pink-800/0 to-rose-400/0 opacity-0 group-hover:opacity-10 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rich Candidate Experience Section */}
      <section className="relative z-10 py-32 overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0fff4_1px,transparent_1px),linear-gradient(to_bottom,#f0fff4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>

        {/* Content wrapper */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 relative">
            {/* Section Header */}
            <div className="text-center mb-20 relative">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent">
                Rich Candidate Experience
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Through conversational, empathetic & adaptive AI
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {candidateFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
                >
                  {/* Feature Icon */}
                  <div className="mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-tr from-pink-800/10 to-rose-400/10 text-pink-800 group-hover:from-pink-800 group-hover:to-rose-400 group-hover:text-white transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Feature Content */}
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>

                  {/* Hover Effect Gradient Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-pink-800/0 to-rose-400/0 opacity-0 group-hover:opacity-10 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Third Section with Image */}
      <section className="relative z-10 py-32 overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0fff4_1px,transparent_1px),linear-gradient(to_bottom,#f0fff4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div>
                <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-gradient-to-r from-pink-800/10 to-rose-400/10 text-pink-800 rounded-full">
                  Seamless Experience
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent">
                  Transform Your Hiring Process
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Streamline your recruitment with AI-powered interviews that
                  save time and improve candidate experience.
                </p>

                {/* Feature List */}
                <div className="space-y-4">
                  {[
                    "Automated scheduling and coordination",
                    "Real-time candidate evaluation",
                    "Customizable interview templates",
                    "Detailed analytics and insights",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-pink-800 to-rose-400 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Container */}
              <div className="relative lg:ml-auto">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-tr from-pink-800/10 to-rose-400/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-pink-800/10 to-rose-400/10 rounded-full blur-3xl" />

                {/* Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-800/5 to-rose-400/5 backdrop-blur-sm" />
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/u.png"
                      alt="Transform hiring process visualization"
                      fill
                      className="object-cover rounded-3xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-800/20 to-transparent" />
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-32 overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0fff4_1px,transparent_1px),linear-gradient(to_bottom,#f0fff4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-800/30 to-rose-400/30 rounded-full blur-3xl animate-float" />
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] opacity-20">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-800/30 to-rose-400/30 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-20 relative">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-gradient-to-r from-pink-800/10 to-rose-400/10 text-pink-800 rounded-full">
                Got questions?
              </span>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about our AI interview platform
              </p>
            </div>

            {/* FAQ List */}
            <div className="max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="mb-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg group"
                >
                  <button
                    onClick={() =>
                      setExpandedFAQ(expandedFAQ === index ? null : index)
                    }
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-pink-800/5 hover:to-rose-400/5 transition-all duration-300"
                  >
                    <span className="text-lg font-medium text-gray-900 group-hover:text-pink-800">
                      {item.question}
                    </span>
                    <span className="ml-6 flex-shrink-0">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-pink-800/10 to-rose-400/10 transition-all duration-300 group-hover:from-pink-800 group-hover:to-rose-400`}
                      >
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-300 ${
                            expandedFAQ === index
                              ? "rotate-45 text-white"
                              : "text-pink-800"
                          } group-hover:text-white`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </div>
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      expandedFAQ === index
                        ? "max-h-48 opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden bg-gradient-to-r from-pink-800/5 to-rose-400/5`}
                  >
                    <div className="px-6 py-5 text-gray-600">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom decorative accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-800/20 to-transparent" />
      </section>
    </main>
  );
}
