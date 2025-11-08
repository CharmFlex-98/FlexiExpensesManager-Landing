import { Button } from "./ui/button";
import { Apple, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-white">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="mb-8 text-emerald-50 text-lg">
            Join thousands of users who are already managing their money better. 
            Download now and start your journey to financial freedom.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 gap-2">
              <Apple className="h-5 w-5" />
              Download for Free
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 gap-2"
            >
              View Features
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-emerald-100">
            No credit card required • Free forever • Available on iOS
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
    </section>
  );
}
