import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What packages do you offer?",
      answer:
        "We offer two main packages, Standard and Premium, each including a full mobile bar, professional bartenders and a curated selection of drinks.",
    },
    {
      question: "What colour options are available for the bar?",
      answer:
        "Our bar is available in two finishes. Black Matte pairs a deep black exterior with a rich American walnut bar top for refined evening elegance. White Cycladic dresses the exterior in textured, stone-effect panels for a bright, timeless aesthetic — ideal for weddings and island settings. Both finishes are available across all our modular configurations.",
    },
    {
      question: "Can I create a fully customised package?",
      answer:
        "Yes. In addition to our set packages, you can design a completely personalised bar experience, choosing everything from cocktails and spirits to glassware and details.",
    },
    {
      question: "What drinks are included in each package?",
      answer:
        "Each package includes an open bar with spirits, wines, beers and cocktails tailored to the selected level (Standard or Premium).",
    },
    {
      question: "Do you only serve cocktails?",
      answer:
        "No. We provide a wide variety of drinks, including spirits, wines, beers, soft drinks and alcohol-free options.",
    },
    {
      question: "Can we choose our own cocktail menu?",
      answer: "Absolutely. You can select from our recommended cocktails or work with us to create a custom menu.",
    },
    {
      question: "What is included in the setup?",
      answer: "We provide the full mobile bar setup, glassware, ice, equipment and professional bartenders.",
    },
    {
      question: "Do you provide the alcohol, or do we need to purchase it?",
      answer:
        "We supply all the drinks as part of our packages. However, if you prefer, we can also work with beverages you provide.",
    },
    {
      question: "Where do you offer your services?",
      answer: "We operate throughout Greece, including mainland venues and island destinations.",
    },
    {
      question: "Are your bartenders experienced?",
      answer: "Yes. Our bartenders and barbacks are highly trained professionals with years of hospitality experience.",
    },
    {
      question: "Do you provide staff beyond bartenders?",
      answer: "Yes. Upon request, we can provide additional barbacks, waiting staff and event support.",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-chamberi text-4xl md:text-5xl font-bold text-center mb-4 text-secondary-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-muted-foreground mb-12">Find answers to common questions about our services</p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-card-foreground pr-4">{faq.question}</span>
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
