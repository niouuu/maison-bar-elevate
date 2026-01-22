import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  label: string;
}

interface SectionNavigationProps {
  sections: Section[];
}

const SectionNavigation = ({ sections }: SectionNavigationProps) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for sticky nav

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 120; // Account for navbar + section nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-6 sm:gap-10 py-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className={cn(
                "font-sans text-sm sm:text-base font-medium transition-colors duration-300 relative pb-1",
                activeSection === section.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {section.label}
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-foreground transition-transform duration-300 origin-left",
                  activeSection === section.id ? "scale-x-100" : "scale-x-0"
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SectionNavigation;
