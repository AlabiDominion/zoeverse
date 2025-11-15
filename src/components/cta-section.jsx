import { ArrowRight, Bell, Users, Gift } from "lucide-react";
import { useState } from "react";

export const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    const to = "hello@zoeverse.org";
    const subject = encodeURIComponent("Waitlist signup");
    const body = encodeURIComponent(`Please add this user to the waitlist:\n\nEmail: ${email}\nSource: Healthcare Discovery waitlist`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-600 via-cyan-600 to-teal-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Icon */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 animate-bounce-slow">
            <Bell className="w-4 h-4" />
            Be the First to Know
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Don't Miss Out on the
            <br />
            Healthcare Revolution
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join our waitlist today and get exclusive early access when we launch. 
            Limited spots available for founding members!
          </p>

          {/* Waitlist Form */}
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 max-w-2xl mx-auto border border-white/20 mb-10">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-xl bg-white/90 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition-all"
              />
              <button 
                type="submit"
                className="group px-8 py-4 bg-white text-blue-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
              >
                {isSubmitted ? (
                  <>✓ Welcome Aboard!</>
                ) : (
                  <>
                    Secure My Spot
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <Users className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Early Access</h3>
              <p className="text-sm text-white/80">Be among the first to experience the platform</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <Gift className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Exclusive Perks</h3>
              <p className="text-sm text-white/80">Special discounts and premium features</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <Bell className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Priority Support</h3>
              <p className="text-sm text-white/80">Get help from our team before anyone else</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No spam, ever
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Unsubscribe anytime
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Join 10,000+ on the list
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
