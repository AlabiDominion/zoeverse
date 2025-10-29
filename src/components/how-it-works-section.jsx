import { Search, MousePointer, Calendar, CheckCircle } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Search & Discover",
      description: "Enter your location and browse nearby hospitals. Filter by specialty, ratings, and distance.",
    },
    {
      icon: MousePointer,
      number: "02",
      title: "Compare & Review",
      description: "View transparent pricing, read real patient reviews, and compare facilities side-by-side.",
    },
    {
      icon: Calendar,
      number: "03",
      title: "Book Instantly",
      description: "Select your preferred date and time, then book your appointment in seconds—no phone calls needed.",
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Get Care",
      description: "Receive instant confirmation and reminders. Show up and get the quality care you deserve.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background to-blue-50 dark:to-blue-950/20 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-4 animate-fade-in">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
            Book Healthcare in
            <br />
            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Finding and booking quality healthcare has never been easier. Here's how it works.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${200 + index * 150}ms` }}>
                {/* Connection Line (Desktop) - Animated */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-linear-to-r from-blue-500 to-cyan-500 opacity-30 animate-line-draw"></div>
                )}

                <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-blue-500/50 hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2">
                  {/* Number Badge - Animated */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 text-white font-bold flex items-center justify-center text-lg shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce-in">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 p-3 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <step.icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Progress indicator on hover */}
                  <div className="mt-4 h-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100 w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-800">
          <button className="group px-8 py-4 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
            <span>Join the Waitlist Now</span>
            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          {/* <p className="text-sm text-muted-foreground mt-4">
            ⚡ Early access to first 1,000 members
          </p> */}
        </div>
      </div>
    </section>
  );
};