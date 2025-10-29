import { X, Check, ArrowRight } from "lucide-react";

export const ProblemSolutionSection = () => {
  const problems = [
    "No idea what healthcare actually costs until the bill arrives",
    "Spending hours on hold trying to book an appointment",
    "Can't find reliable reviews of hospitals and doctors",
    "No easy way to compare facilities in your area"
  ];

  const solutions = [
    "See transparent pricing upfront for all procedures",
    "Book appointments 24/7 in just a few clicks",
    "Read verified reviews from real patients",
    "Compare hospitals side-by-side with detailed info"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Healthcare Shouldn't Be
            <br />
            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              This Complicated
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're solving the problems that make healthcare frustrating for millions
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Problems */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-full text-red-700 dark:text-red-300 text-sm font-medium mb-6">
              The Problem Today
            </div>
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 animate-fade-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mt-0.5">
                  <X className="w-4 h-4 text-white" />
                </div>
                <p className="text-foreground/90">{problem}</p>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-300 text-sm font-medium mb-6">
              Our Solution
            </div>
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900/30 animate-fade-in-right"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-foreground/90 font-medium">{solution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Transformation Arrow */}
        <div className="flex justify-center my-12">
          <div className="flex items-center gap-4 px-6 py-3 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold shadow-lg animate-pulse-slow">
            <span>Join the Revolution</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};
