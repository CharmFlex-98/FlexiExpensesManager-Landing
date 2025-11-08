import Image from "next/image";

export function Header() {
  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Testimonials", href: "#testimonials" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div style={{
              borderRadius: '20%', // For a perfect circle
              overflow: 'hidden',
              width: '48px', // Define the size of your icon
              height: '48px', // Define the size of your icon
            }}>
              <Image src="/product/landing/app_icon.png" alt="" width={48} height={48} />
          </div>

            <span className="font-semibold">FlexiExpensesManager</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/*/!* Mobile Menu *!/*/}
          {/*<Sheet>*/}
          {/*  <SheetTrigger asChild className="md:hidden">*/}
          {/*    <Button variant="ghost" size="icon">*/}
          {/*      <Menu className="h-5 w-5" />*/}
          {/*    </Button>*/}
          {/*  </SheetTrigger>*/}
          {/*  <SheetContent side="right" className="w-[300px]">*/}
          {/*    <nav className="flex flex-col gap-4 mt-8">*/}
          {/*      {navLinks.map((link) => (*/}
          {/*        <a*/}
          {/*          key={link.label}*/}
          {/*          href={link.href}*/}
          {/*          className="text-lg hover:text-emerald-600 transition-colors"*/}
          {/*        >*/}
          {/*          {link.label}*/}
          {/*        </a>*/}
          {/*      ))}*/}
          {/*      <div className="flex flex-col gap-2 mt-4">*/}
          {/*        <Button variant="ghost">Sign In</Button>*/}
          {/*        <Button className="bg-emerald-600 hover:bg-emerald-700 gap-1.5">*/}
          {/*          <Apple className="h-4 w-4" />*/}
          {/*          Download App*/}
          {/*        </Button>*/}
          {/*      </div>*/}
          {/*    </nav>*/}
          {/*  </SheetContent>*/}
          {/*</Sheet>*/}
        </div>
      </div>
    </header>
  );
}
