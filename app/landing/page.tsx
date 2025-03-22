import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Landing Page Navbar */}
      <nav className="fixed top-4 left-4 right-4 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-sm bg-background/40 border border-border/40 rounded-full px-6">
            <div className="flex items-center justify-between h-14">
              <Link href="/landing" className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="PrepWise"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="font-semibold text-xl">PrepWise</span>
              </Link>

              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  className="hover:bg-primary-200/10 rounded-full"
                  asChild
                >
                  <Link href="/sign-in">Login</Link>
                </Button>
                <Button
                  className="bg-primary-200 text-dark-100 hover:bg-primary-200/80 rounded-full"
                  asChild
                >
                  <Link href="/sign-up">Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-6xl font-bold tracking-tight">
            Practice Interviews with
            <span className="text-primary-200"> AI Assistant</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Get ready for your next interview with our AI-powered mock
            interviews. Practice real scenarios and receive instant feedback.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary-200 text-dark-100 hover:bg-primary-200/80 rounded-full px-8"
              asChild
            >
              <Link href="/sign-up">Get Started Free</Link>
            </Button>
          </div>
        </div>

        <Image
          src="/robot.png"
          alt="AI Interview Assistant"
          width={400}
          height={400}
          className="mx-auto mt-16"
        />
      </main>
    </div>
  );
}
