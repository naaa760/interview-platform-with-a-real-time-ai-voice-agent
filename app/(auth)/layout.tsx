import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (isUserAuthenticated) redirect("/");

  return (
    <div className="min-h-screen bg-white relative flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Decorative SVG Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-right decorative shape */}
        <svg
          className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 transform opacity-20"
          width="800"
          height="800"
          fill="none"
          viewBox="0 0 800 800"
        >
          <circle
            cx="400"
            cy="400"
            r="400"
            fill="url(#gradient1)"
            className="animate-float"
          />
          <defs>
            <radialGradient
              id="gradient1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(400 400) rotate(90) scale(400)"
            >
              <stop stopColor="#be185d" />
              <stop offset="1" stopColor="#fb7185" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        {/* Bottom-left decorative shape */}
        <svg
          className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 transform opacity-20"
          width="800"
          height="800"
          fill="none"
          viewBox="0 0 800 800"
        >
          <circle
            cx="400"
            cy="400"
            r="400"
            fill="url(#gradient2)"
            className="animate-float-delayed"
          />
          <defs>
            <radialGradient
              id="gradient2"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(400 400) rotate(90) scale(400)"
            >
              <stop stopColor="#be185d" />
              <stop offset="1" stopColor="#fb7185" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-pink-800/20 rounded-full blur-sm animate-float" />
          <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-rose-400/20 rounded-full blur-sm animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-pink-800/20 rounded-full blur-sm animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-rose-400/20 rounded-full blur-sm animate-float-delayed" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-8">
        {/* Top accent line */}
        <div className="h-1 w-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-pink-800 to-rose-400" />

        {children}

        {/* Bottom accent line */}
        <div className="h-px w-full mt-8 bg-gradient-to-r from-transparent via-pink-800/20 to-transparent" />
      </div>
    </div>
  );
};

export default AuthLayout;
