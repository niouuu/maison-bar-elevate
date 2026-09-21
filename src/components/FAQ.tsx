import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What packages do you offer?",
      answer:
        "We offer two main packages – Standard, Premium – each including a full mobile bar, professional bartenders, and a curated selection of drinks.",
    },
    {
      question: "Can I create a fully customized package?",
      answer:
        "Yes. In addition to our standard packages, you can design a 100% personalized bar experience, choosing everything from cocktails and spirits to glassware and details.",
    },
    {
      question: "What drinks are included in each package?",
      answer:
        "Each package includes an open bar with spirits, wines, beers, and cocktails tailored to the selected level (classic, premium, or ultra-premium).",
    },
    {
      question: "Do you only serve cocktails?",
      answer:
        "No. We provide a wide variety of drinks including spirits, wines, beers, soft drinks, and alcohol-free options.",
    },
    {
      question: "Can we choose our own cocktail menu?",
      answer: "Absolutely. You can select from our recommended cocktails or work with us to create a custom menu.",
    },
    {
      question: "What is included in the setup?",
      answer:
        "We provide the full mobile bar setup, glassware (or disposables, depending on package), ice, equipment, and professional bartenders.",
    },
    {
      question: "Do you provide the alcohol, or do we need to purchase it?",
      answer:
        "We supply all the drinks as part of our packages. However, if you prefer, we can also work with beverages you provide.",
    },
    {
      question: "Where do you offer services?",
      answer: "We operate all across Greece, including mainland venues and every island destination.",
    },
    {
      question: "Are your bartenders experienced?",
      answer: "Yes, our bartenders and barbacks are highly trained professionals with years of hospitality experience.",
    },
    {
      question: "Do you provide staff beyond bartenders?",
      answer: "Yes, upon request we can provide barbacks, waitstaff and additional event support.",
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
