import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import brandMark from "@/assets/maison-du-bar-new-logo.jpg";

interface SummaryItem {
  title: string;
  detail?: string;
}

interface MenuItem {
  name: string;
  detail?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

interface ServicePackageCardProps {
  title: string;
  summary: SummaryItem[];
  categories: MenuCategory[];
  premium?: boolean;
}

const MenuCategoryBlock = ({ category, premium }: { category: MenuCategory; premium: boolean }) => (
  <section className="border-t border-menu-rule pt-4 first:border-t-0 first:pt-0">
    <h5
      className={cn(
        "font-chamberi text-2xl uppercase leading-none text-menu-ink",
        premium && "text-menu-gold",
      )}
    >
      {category.title}
    </h5>
    <ul className="mt-3 space-y-1.5 pl-5 font-sans text-sm leading-snug text-menu-ink sm:text-[15px]">
      {category.items.map((item, index) => (
        <li key={`${category.title}-${item.name}-${index}`} className="list-disc pl-1">
          <span>{item.name}</span>
          {item.detail && <span className="block text-[0.9em] text-menu-muted">{item.detail}</span>}
        </li>
      ))}
    </ul>
  </section>
);

const ServicePackageCard = ({ title, summary, categories, premium = false }: ServicePackageCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const category = (name: string) => categories.find((item) => item.title === name);
  const leftColumn = [category("Spirits"), category("Beverages")].filter(
    (item): item is MenuCategory => Boolean(item),
  );
  const rightColumn = [category("Wines"), category("Beers"), category("Cocktails"), category("Water")].filter(
    (item): item is MenuCategory => Boolean(item),
  );
  const mobileOrder = ["Spirits", "Wines", "Beers", "Cocktails", "Beverages", "Water"]
    .map(category)
    .filter((item): item is MenuCategory => Boolean(item));

  return (
    <article className="bg-menu-paper text-menu-ink">
      <div className="px-6 py-8 sm:px-9 sm:py-10">
        <header>
          <h3 className="font-chamberi text-3xl uppercase leading-none tracking-wide sm:text-4xl">{title}</h3>
          <div className={cn("mt-5 h-px w-full bg-menu-rule", premium && "bg-menu-gold")} />
          <p className="mt-4 font-sans text-[11px] uppercase tracking-widest text-menu-muted">
            A complete bar experience
          </p>
        </header>

        <ul className="mt-7 space-y-5 font-sans text-sm leading-snug sm:text-[15px]">
          {summary.map((item) => (
            <li key={item.title} className="grid grid-cols-[0.5rem_1fr] gap-3">
              <span aria-hidden="true">•</span>
              <span>
                <span className="block font-semibold">{item.title}</span>
                {item.detail && <span className="mt-0.5 block text-[0.92em] text-menu-muted">{item.detail}</span>}
              </span>
            </li>
          ))}
        </ul>

        <Button
          type="button"
          variant="ghost"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((expanded) => !expanded)}
          className="mt-8 w-full justify-between rounded-none border-y border-menu-rule px-0 py-4 font-sans text-xs uppercase tracking-widest text-menu-ink shadow-none hover:translate-y-0 hover:bg-transparent hover:text-menu-ink hover:shadow-none"
        >
          {isExpanded ? "Close drinks menu" : "View full drinks menu"}
          <ChevronDown
            aria-hidden="true"
            className={cn("transition-transform duration-300", isExpanded && "rotate-180")}
          />
        </Button>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="relative pt-10">
                <img
                  src={brandMark}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-1/2 hidden w-3/4 -translate-x-1/2 -translate-y-1/2 opacity-[0.035] mix-blend-multiply md:block"
                />
                <div className="relative z-10">
                  <h4 className="font-chamberi text-3xl uppercase leading-none tracking-wide sm:text-4xl">
                    {title} includes
                  </h4>
                  <div className={cn("mt-5 h-px w-full bg-menu-rule", premium && "bg-menu-gold")} />
                  <p className="mt-4 font-sans text-[11px] uppercase tracking-widest text-menu-muted">
                    Quality essentials for a great celebration
                  </p>

                  <div className="mt-7 space-y-7 md:hidden">
                    {mobileOrder.map((item) => (
                      <MenuCategoryBlock key={item.title} category={item} premium={premium} />
                    ))}
                  </div>

                  <div className="mt-7 hidden grid-cols-2 gap-10 md:grid">
                    <div className="space-y-7 border-r border-menu-rule pr-10">
                      {leftColumn.map((item) => (
                        <MenuCategoryBlock key={item.title} category={item} premium={premium} />
                      ))}
                    </div>
                    <div className="space-y-7">
                      {rightColumn.map((item) => (
                        <MenuCategoryBlock key={item.title} category={item} premium={premium} />
                      ))}
                    </div>
                  </div>

                  <p className="mt-10 max-w-44 font-sans text-[11px] uppercase leading-relaxed tracking-widest text-menu-muted">
                    More than drinks — memorable experience
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
};

export default ServicePackageCard;