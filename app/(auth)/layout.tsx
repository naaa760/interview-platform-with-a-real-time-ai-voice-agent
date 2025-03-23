import { ReactNode } from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
import flbgImage from "@/public/flbg.jpg";

import { isAuthenticated } from "@/lib/actions/auth.action";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (isUserAuthenticated) redirect("/");

  return (
    <div className="auth-layout relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image src={flbgImage} alt="Background" fill priority />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AuthLayout;
