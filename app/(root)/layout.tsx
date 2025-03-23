import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import robgImage from "@/public/robg.jpg";

import { isAuthenticated } from "@/lib/actions/auth.action";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout relative">
      <div className="fixed inset-0 z-0">
        <Image
          src={robgImage}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Layout;
