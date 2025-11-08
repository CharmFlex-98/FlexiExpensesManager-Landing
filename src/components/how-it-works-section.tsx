import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Download from Official Store",
    description: "Get the app from the App Store or Play Store and login app immediately."
  },
  {
    number: "02",
    title: "Set Your Primary Currency",
    description: "The main currency where you stay at currently."
  },
  {
    number: "03",
    title: "Set Your Accounts",
    description: "Create a variety of your accounts for expenses tracking & assets management."
  },
  {
    number: "04",
    title: "Watch Your Progress",
    description: "Track your spending habits and achieve your financial goals with visual insights."
  }
];

const advantages: string[] = [
  "No credit card required",
  "Free to download and use",
  "Works offline",
  "Multi-currency support",
  "Export your data anytime",
  "Regular updates and support"
]

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Get Started in <span className="text-emerald-600">4 Simple Steps</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start managing your finances better today. It only takes a few minutes to set up.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-4 relative z-10">
                  <span className="text-2xl font-semibold">{step.number}</span>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-emerald-200" />
                )}
                
                <h3 className="mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-emerald-100">
          <h3 className="mb-6 text-center font-bold">Why Users Love Our App?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {advantages.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
