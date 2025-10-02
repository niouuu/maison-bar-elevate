import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah & Michael",
      role: "Wedding Clients",
      content:
        "Maison du Bar made our wedding absolutely perfect. The StationDeus bar was stunning, and our guests are still talking about the cocktails. Professional, elegant, and unforgettable!",
      rating: 5,
    },
    {
      name: "James Peterson",
      role: "Corporate Event Manager",
      content:
        "We've used Maison du Bar for three corporate events now. Their attention to detail and premium service is unmatched. They truly elevate every occasion.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Private Party Host",
      content:
        "The Ultra Premium package was worth every penny. The mixologists were incredible, and the custom cocktail menu they created was a huge hit with our guests.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Event Planner",
      content:
        "As an event planner, I recommend Maison du Bar to all my clients. Their portable bar is beautiful, setup is seamless, and they consistently deliver excellence.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4 text-secondary-foreground">
          What Our Clients Say
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Don't just take our word for it – hear from the clients who've
          experienced the Maison du Bar difference
        </p>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-6 h-full">
                    <div className="bg-card border border-border rounded-lg p-8 h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-accent text-accent"
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow italic">
                        "{testimonial.content}"
                      </p>
                      <div className="border-t border-border pt-4">
                        <p className="font-semibold text-card-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
