import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 4-6 weeks in advance for most events. For peak season (summer months and holidays), booking 8-12 weeks ahead ensures availability. However, we do our best to accommodate last-minute requests when possible.",
    },
    {
      question: "What areas do you service?",
      answer:
        "We primarily service the greater metropolitan area and surrounding regions. For events outside our standard service area, we can arrange special accommodations. Contact us with your event location, and we'll work with you to make it happen.",
    },
    {
      question: "Can you create custom cocktails for our event?",
      answer:
        "Absolutely! Our Premium and Ultra Premium packages include custom cocktail menu consultation. We work with you to create signature drinks that match your event theme, preferences, and guest demographics.",
    },
    {
      question: "Do you provide the alcohol, or do we purchase it?",
      answer:
        "We offer both options. We can provide all alcohol as part of our service, or you can purchase it yourself (we'll provide a recommended shopping list). Our team will advise on quantities based on your guest count and event duration.",
    },
    {
      question: "What if the weather is bad for an outdoor event?",
      answer:
        "Our StationDeus bar is designed to work both indoors and outdoors. For outdoor events, we recommend having a backup indoor location or tent coverage. We'll work with you to ensure a seamless setup regardless of weather conditions.",
    },
    {
      question: "Are your bartenders licensed and insured?",
      answer:
        "Yes, all our bartenders are professionally trained, licensed, and fully insured. We carry comprehensive liability insurance, and our staff are experienced in responsible alcohol service.",
    },
    {
      question: "What's included in the setup and cleanup?",
      answer:
        "All packages include complete setup (bar, equipment, glassware, garnishes) and post-event cleanup. We typically arrive 2-3 hours before service to set up and handle all breakdown and cleanup after the event concludes.",
    },
    {
      question: "Can we see the bar before booking?",
      answer:
        "Yes! We encourage potential clients to schedule a consultation where you can see the StationDeus bar in person, discuss your event details, and sample some of our signature cocktails. Contact us to arrange a viewing.",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4 text-secondary-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Find answers to common questions about our services
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-card-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
