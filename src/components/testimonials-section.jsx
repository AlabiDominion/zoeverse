import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Early Beta Tester",
      image: "SJ",
      rating: 5,
      text: "I got early access to the beta and I'm blown away! Finding hospitals and comparing prices is finally easy. This is going to change healthcare.",
    },
    {
      name: "Michael Chen",
      role: "Healthcare Professional",
      image: "MC",
      rating: 5,
      text: "As a doctor, I'm excited about this platform. It will help patients make informed decisions and reduce the administrative burden on practices.",
    },
    {
      name: "Emily Rodriguez",
      role: "Patient Advocate",
      image: "ER",
      rating: 5,
      text: "Transparency in healthcare pricing has been needed for years. This platform is exactly what patients have been asking for!",
    },
    {
      name: "David Thompson",
      role: "Tech Enthusiast",
      image: "DT",
      rating: 5,
      text: "The interface looks incredible! It's like the 'Uber of healthcare' we've all been waiting for. Can't wait for the full launch.",
    },
    {
      name: "Lisa Anderson",
      role: "Working Parent",
      image: "LA",
      rating: 5,
      text: "Being able to book appointments online without phone calls will save me so much time. This is a game-changer for busy parents!",
    },
    {
      name: "James Wilson",
      role: "College Student",
      image: "JW",
      rating: 5,
      text: "Finally! A way to find affordable healthcare without the runaround. The pricing transparency feature is exactly what students need.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-4 animate-fade-in">
            What People Are Saying
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
            Excitement Building for
            <br />
            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Our Launch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Here's what early testers and future users are saying about the platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-blue-500/50 hover:shadow-2xl transition-all duration-500 relative animate-fade-in-up transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon - Animated on hover */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <Quote className="w-12 h-12 text-blue-500" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500 animate-star-pop" style={{ animationDelay: `${index * 100 + i * 50}ms` }} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold group-hover:text-blue-600 transition-colors">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-600">
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-linear-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-800/50">
            <div>
              <div className="text-3xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">10,000+</div>
              <div className="text-sm text-muted-foreground">On Waitlist</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-3xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">4.9★</div>
              <div className="text-sm text-muted-foreground">Expected Rating</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-3xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">5,000+</div>
              <div className="text-sm text-muted-foreground">Hospitals Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};