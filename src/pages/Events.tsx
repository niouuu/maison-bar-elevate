import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

const Events = () => {
  const placeholders = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="w-20 h-20 text-accent mx-auto mb-6" />
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 text-primary-foreground">
            Events by Maison du Bar
          </h1>
          <p className="text-2xl text-primary-foreground/90 font-light">
            Coming Soon
          </p>
        </div>
      </section>

      {/* Placeholder Gallery */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12 text-secondary-foreground">
            Event Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {placeholders.map((index) => (
              <div
                key={index}
                className="aspect-square bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border hover:border-accent transition-colors duration-300"
              >
                <div className="text-center p-6">
                  <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground font-medium">
                    Event photos coming soon
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-4xl font-bold mb-6 text-primary-foreground">
              Creating Memorable Moments
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              From intimate weddings to grand corporate galas, Maison du Bar has been
              the centerpiece of countless unforgettable events. We're currently
              curating our event gallery to showcase the extraordinary experiences
              we've created for our clients. Check back soon to see our work!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
