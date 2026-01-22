import { useEffect, useState } from "react";
import { useCarousel } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface CarouselDotsProps {
  totalSlides: number;
}

const CarouselDots = ({ totalSlides }: CarouselDotsProps) => {
  const { api } = useCarousel();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: totalSlides }).map((_, i) => (
        <button
          key={i}
          onClick={() => api?.scrollTo(i)}
          className={cn(
            "h-2 rounded-full transition-all duration-300",
            i === current
              ? "bg-foreground w-6"
              : "bg-gray-300 w-2 hover:bg-gray-400"
          )}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
