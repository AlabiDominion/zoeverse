import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { useState } from "react";
import heroImage from "../assets/hero-image.jpg";

export const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background linear */}
      <div className="absolute inset-0">
      <img src={heroImage} alt="" />
      </div>
      
      {/* Animated Orbs */}
      {/* <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-3xl animate-pulse-slow"></div> */}

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-blue-900/30 backdrop-blur-sm rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 animate-fade-in-up shadow-lg border border-blue-200/50">
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            🚀 Coming Soon - Join the Waitlist
          </div>

          {/* Main Heading with Stagger Animation */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl bg-linear-to-r from-white rounded-2xl pb-2 font-bold mb-6 leading-tight animate-fade-in-up animation-delay-100">
            Healthcare Discovery
            <br />
            <span className="bg-linear-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent animate-linear-text">
              Made Simple
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl bg-clip-text bg-linear-to-r from-white to-black mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            The future of healthcare is here. Find hospitals, compare prices, book appointments, 
            and read real reviews
          </p>

          {/* Waitlist Form */}
          <div className="animate-fade-in-up animation-delay-300">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-card/80 backdrop-blur-sm rounded-2xl shadow-2xl p-3 sm:p-4 max-w-2xl mx-auto border border-border/50">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Enter your email to join waitlist..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <button 
                  type="submit"
                  className="group px-8 py-4 bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap flex items-center justify-center gap-2"
                >
                  {isSubmitted ? (
                    <>✓ You're on the list!</>
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
            
          </div>

          {/* Animated Stats */}
          
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "", label: "" },
              { value: "100%", label: "Transparent" },
              { value: "Launch", label: "Q2 2026" },
              { value: "", label: "" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up group hover:scale-110 transition-transform" style={{ animationDelay: `${400 + index * 100}ms` }}>
                <div className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-white mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
