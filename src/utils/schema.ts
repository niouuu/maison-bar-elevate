export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Maison du Bar",
  "url": "https://maisondubar.com",
  "logo": "https://storage.googleapis.com/gpt-engineer-file-uploads/fHrHNS8pXPWmNo4OfHL2q7CoeiA3/uploads/1759765018266-9f08331c-57c6-4ac3-aa05-a4c90621904d.jpg",
  "description": "Luxury mobile bar services for events across Greece",
  "telephone": ["+30-697-329-1777", "+30-694-419-9717"],
  "email": "maisondubar25@gmail.com",
  "areaServed": {
    "@type": "Country",
    "name": "Greece"
  },
  "sameAs": ["https://www.instagram.com/maison_du_bar_/"]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Maison du Bar",
  "image": "https://storage.googleapis.com/gpt-engineer-file-uploads/fHrHNS8pXPWmNo4OfHL2q7CoeiA3/social-images/social-1759784530595-Maison_du_Bar_0085 (1).jpg",
  "priceRange": "€€€",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "GR",
    "addressLocality": "Greece"
  },
  "telephone": ["+30-697-329-1777", "+30-694-419-9717"],
  "email": "maisondubar25@gmail.com",
  "url": "https://maisondubar.com"
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": ["Luxury Mobile Bar", "Cocktail Catering", "Event Bar Rentals"],
  "provider": {
    "@type": "Organization",
    "name": "Maison du Bar"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Greece"
  }
};

export const barProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Maison du Bar Signature Portable Bar",
  "description": "Modular luxury bar crafted from American walnut with integrated LED lighting. Fully portable and customizable for any event.",
  "brand": {
    "@type": "Brand",
    "name": "Maison du Bar"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock"
  }
};
