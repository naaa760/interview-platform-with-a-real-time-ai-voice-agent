import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Feedback = async ({ params }: RouteParams) => {
  const { id } = await params;
  const user = await getCurrentUser();

  const interview = await getInterviewById(id);
  if (!interview) redirect("/");

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id!,
  });

  return (
    <section className="section-feedback max-w-5xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-background/70 via-background/50 to-background/30 backdrop-blur-md rounded-3xl border border-white/20 p-8 mb-8 shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
            Feedback on the Interview -
            <span className="capitalize text-primary-200">
              {interview.role}
            </span>{" "}
            Interview
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Overall Score Card */}
          <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-2xl border border-white/10">
            <Image
              src="/star.svg"
              width={24}
              height={24}
              alt="star"
              className="text-primary-200"
            />
            <div>
              <p className="text-white/60 text-sm">Overall Impression</p>
              <p className="text-xl font-semibold">
                <span className="text-primary-200">{feedback?.totalScore}</span>
                <span className="text-white/80">/100</span>
              </p>
            </div>
          </div>

          {/* Date Card */}
          <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-2xl border border-white/10">
            <Image src="/calendar.svg" width={24} height={24} alt="calendar" />
            <div>
              <p className="text-white/60 text-sm">Interview Date</p>
              <p className="text-lg">
                {feedback?.createdAt
                  ? dayjs(feedback.createdAt).format("MMM D, YYYY h:mm A")
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final Assessment */}
      <div className="bg-gradient-to-br from-background/70 via-background/50 to-background/30 backdrop-blur-md rounded-3xl border border-white/20 p-8 mb-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-white/90 mb-4">
          Final Assessment
        </h2>
        <p className="text-lg leading-relaxed text-white/80">
          {feedback?.finalAssessment}
        </p>
      </div>

      {/* Interview Breakdown */}
      <div className="bg-gradient-to-br from-background/70 via-background/50 to-background/30 backdrop-blur-md rounded-3xl border border-white/20 p-8 mb-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-white/90 mb-6">
          Breakdown of the Interview
        </h2>
        <div className="space-y-6">
          {feedback?.categoryScores?.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 rounded-2xl border border-white/10"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">
                  {index + 1}. {category.name}
                </h3>
                <span className="text-lg font-medium">
                  <span className="text-primary-200">{category.score}</span>
                  <span className="text-white/60">/100</span>
                </span>
              </div>
              <p className="text-white/80">{category.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Strengths & Improvements Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Strengths */}
        <div className="bg-gradient-to-br from-background/70 via-background/50 to-background/30 backdrop-blur-md rounded-3xl border border-white/20 p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-white/90 mb-4">
            Strengths
          </h3>
          <ul className="space-y-3">
            {feedback?.strengths?.map((strength, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-200 mt-1">•</span>
                <span className="text-white/80">{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas for Improvement */}
        <div className="bg-gradient-to-br from-background/70 via-background/50 to-background/30 backdrop-blur-md rounded-3xl border border-white/20 p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-white/90 mb-4">
            Areas for Improvement
          </h3>
          <ul className="space-y-3">
            {feedback?.areasForImprovement?.map((area, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-200 mt-1">•</span>
                <span className="text-white/80">{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-12">
        <Button
          asChild
          className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl py-6"
        >
          <Link href="/" className="flex items-center justify-center gap-2">
            <span className="text-lg">Back to Dashboard</span>
          </Link>
        </Button>

        <Button
          asChild
          className="flex-1 bg-gradient-to-r from-primary-200 to-primary-100 text-dark-100 rounded-2xl py-6 hover:opacity-90"
        >
          <Link
            href={`/interview/${id}`}
            className="flex items-center justify-center gap-2"
          >
            <span className="text-lg">Retake Interview</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Feedback;
