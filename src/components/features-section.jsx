import { MapPin, Calendar, DollarSign, Star, Clock, Shield } from "lucide-react";
import { useState } from "react";

export const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // removed TS type

  const features = [
    {
      icon: MapPin,
      title: "Find Nearby Hospitals",
      description: "Discover quality healthcare facilities near you with real-time availability and distance information.",
      gradientDirection: "to-br",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Calendar,
      title: "Instant Booking",
      description: "Book appointments 24/7 with just a few clicks. No more waiting on hold or playing phone tag.",
      gradientDirection: "to-br",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Compare costs upfront. No hidden fees, no surprises. Know exactly what you'll pay before you book.",
      gradientDirection: "to-br",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: Star,
      title: "Real Patient Reviews",
      description: "Read honest reviews from real patients. Make informed decisions based on actual experiences.",
      gradientDirection: "to-br",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Find, compare, and book in minutes instead of hours. Your time is valuable—we respect that.",
      gradientDirection: "to-br",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Verified & Secure",
      description: "All hospitals are verified and your data is encrypted. Your privacy and safety are our top priority.",
      gradientDirection: "to-br",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-4 animate-fade-in">
            Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
            Everything You Need in
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              One Simple Platform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            We've built the most comprehensive healthcare discovery platform to make finding and booking care effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon; // assign to capitalized var for JSX
            const gradientClass = `bg-gradient-${feature.gradientDirection} ${feature.color}`;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-blue-500/50 hover:shadow-2xl transition-all duration-500 animate-fade-in-up transform hover:-translate-y-2"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div
                  className={`w-14 h-14 rounded-xl p-3 mb-6 transition-all duration-500 ${hoveredIndex === index ? 'scale-110 rotate-6' : ''}`}
                >
                  <div className={`${gradientClass} w-full h-full rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div className={`mt-4 h-1 rounded-full transition-all duration-500 ${hoveredIndex === index ? 'w-full' : 'w-0'} ${feature.color}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
