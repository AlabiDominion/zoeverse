import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/hero-section";
import { ProblemSolutionSection } from "./components/problem-solution-section";
import { FeaturesSection } from "./components/features-section";
import { HowItWorksSection } from "./components/how-it-works-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { CTASection } from "./components/cta-section";
import { Footer } from "./components/Footer";
import './index.css'

function App() {
  

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer /> 
    </div>
  )
}

export default App
