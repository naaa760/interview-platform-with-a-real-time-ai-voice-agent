import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";

import { getCurrentUser, signOut } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";

async function Home() {
  const user = await getCurrentUser();

  const [userInterviews, allInterview] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasPastInterviews = userInterviews?.length! > 0;
  const hasUpcomingInterviews = allInterview?.length! > 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Updated Navbar with oval corners and better transparency */}
      <nav className="fixed top-4 left-4 right-4 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-sm bg-background/40 border border-border/40 rounded-full px-6">
            <div className="flex items-center justify-between h-14">
              <div className="flex items-center gap-6">
                <span className="text-sm text-muted-foreground">
                  Welcome back,{" "}
                  <span className="font-medium text-foreground">
                    {user?.name}
                  </span>
                </span>
                <form action={signOut}>
                  <Button
                    variant="ghost"
                    type="submit"
                    className="hover:bg-destructive/10 hover:text-destructive rounded-full"
                  >
                    Sign Out
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Adjust main content padding */}
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="card-cta">
          <div className="flex flex-col gap-6 max-w-lg">
            <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
            <p className="text-lg">
              Practice real interview questions & get instant feedback
            </p>

            <Button asChild className="btn-primary max-sm:w-full">
              <Link href="/interview">Start an Interview</Link>
            </Button>
          </div>

          <Image
            src="/robot.png"
            alt="robo-dude"
            width={400}
            height={400}
            className="max-sm:hidden"
          />
        </section>

        <section className="flex flex-col gap-6 mt-8">
          <h2>Your Interviews</h2>

          <div className="interviews-section">
            {hasPastInterviews ? (
              userInterviews?.map((interview) => (
                <InterviewCard
                  key={interview.id}
                  userId={user?.id}
                  interviewId={interview.id}
                  role={interview.role}
                  type={interview.type}
                  techstack={interview.techstack}
                  createdAt={interview.createdAt}
                />
              ))
            ) : (
              <p>You haven&apos;t taken any interviews yet</p>
            )}
          </div>
        </section>

        <section className="flex flex-col gap-6 mt-8">
          <h2>Take Interviews</h2>

          <div className="interviews-section">
            {hasUpcomingInterviews ? (
              allInterview?.map((interview) => (
                <InterviewCard
                  key={interview.id}
                  userId={user?.id}
                  interviewId={interview.id}
                  role={interview.role}
                  type={interview.type}
                  techstack={interview.techstack}
                  createdAt={interview.createdAt}
                />
              ))
            ) : (
              <p>There are no interviews available</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
