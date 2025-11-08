import { Separator } from "./ui/separator";
import { Apple, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 CharmFlex.co All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
