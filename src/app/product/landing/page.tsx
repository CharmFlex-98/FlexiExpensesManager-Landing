import {Header} from "@/components/header";
import {HeroSection} from "@/components/hero-section";
import {FeaturesSection} from "@/components/features-section";
import {HowItWorksSection} from "@/components/how-it-works-section";
import {TestimonialsSection} from "@/components/testimonials-section";
import {Footer} from "@/components/footer";

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <HeroSection />
                <div id="features">
                    <FeaturesSection />
                </div>
                <div id="how-it-works">
                    <HowItWorksSection />
                </div>
                <div id="testimonials">
                    <TestimonialsSection />
                </div>
            </main>
            <Footer />
        </div>
    );
}
