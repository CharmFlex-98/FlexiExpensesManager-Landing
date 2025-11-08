import { Badge } from "./ui/badge";
import { ScreenShotRow } from "./figma/ScreenShotRow";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="p-4">
            <h1 className="text-4xl font-bold  text-black">FlexiExpensesManager</h1>
            <h1 className="text-4xl font-bold  text-black">Smart Budget & Money Tracker</h1>
          </div>

          <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-emerald-200">
            Now Available on iOS & Android
          </Badge>
          
          <h1 className="mb-6 max-w-4xl">
            Track Your Expenses <br />
            <span className="text-emerald-600">Effortlessly</span>
          </h1>
          
          <p className="mb-8 max-w-2xl text-muted-foreground">
            Take control of your finances with our intuitive, smart expense tracker.
            Track spending, set budgets, and achieve your financial goals—all from your mobile devices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 items-center">
            <Link href="https://apps.apple.com/app/id6754591820">
              <Image
                  src="/product/landing/app_store.svg"
                  alt="App Store logo"
                  width={150}
                  height={20}
              />
            </Link>

            <Link  href="https://play.google.com/store/apps/details?id=com.charmflex.cp.flexiexpensesmanager.free">
              <Image
                  src="/product/landing/google_play.svg"
                  alt="App Store logo"
                  width={190}
                  height={20}
              />
            </Link>
          </div>

          <ScreenShotRow />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
}
