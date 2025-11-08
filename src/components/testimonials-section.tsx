import {Card, CardContent, CardFooter} from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Khong",
    role: "Team leader at A&I",
    initials: "K",
    rating: 5,
    text: "This app has completely transformed how I manage my personal expenses. The multi-layered categorization show me exactly where my expenses go!"
  },
  {
    name: "Jeff",
    role: "Android engineer at A&I",
    initials: "JF",
    rating: 5,
    text: "Finally, an expense tracker that's actually intuitive! The visual insights help me understand exactly where my money goes."
  },
  {
    name: "Paul",
    role: "Mechanical Engineer at SK Nexilis",
    initials: "P",
    rating: 5,
    text: "The recurring transactions save my precious time. I do not need to manually track my monthly fixed expenses anymore!"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-muted-foreground max-w-2xl mx-auto text-3xl ">
            Join our growing community of users who are taking control of their finances.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-emerald-100 flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>
                
                <p className="mb-6 text-muted-foreground">{"\"" + testimonial.text + "\""}</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-3">
                  <Avatar className="bg-emerald-100">
                    <AvatarFallback className="bg-emerald-100 text-emerald-700">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
