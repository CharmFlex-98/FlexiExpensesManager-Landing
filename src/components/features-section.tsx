import { Card, CardContent } from "./ui/card";
import {
  Wallet,
  PieChart,
  Bell,
  Shield,
  TrendingUp,
  Smartphone, TimerOff, Timer
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Easy Expense Tracking",
    description: "Add expenses in seconds with our intuitive interface. Categorize transactions automatically."
  },
  {
    icon: PieChart,
    title: "Visual Insights",
    description: "Beautiful charts and graphs help you understand your spending patterns at a glance."
  },
  {
    icon: Timer,
    title: "Recurring Transactions",
    description: "Setup recurring transactions for repeating transactions."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your financial data is stored offline in your device. We never share or sell your information."
  },
  {
    icon: TrendingUp,
    title: "Budget Planning",
    description: "Set custom budgets for different categories and track your progress in real-time."
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Designed natively for iOS & Android. Super efficient & lightweight."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Everything You Need to <span className="text-emerald-600">Manage Budget Smartly</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you take control of your financial life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
