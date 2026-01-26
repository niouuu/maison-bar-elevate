

## Adjust Object Position for Last 2 Interior Images

### Overview
The last 2 photos in the Interior section (details8 and details9) are currently cropped at the center, which cuts off the wood elements at the bottom. We need to position these images lower so the wood is visible without zooming.

---

### Problem Analysis
Based on your screenshots:
- **details8**: Crystal glass with wood surface at bottom - currently cropped too high
- **details9**: Cocktail menu with candle - wood surface not visible

Currently, all Interior images use `object-cover` (which defaults to `object-center`), causing the bottom portion with the wood to be cut off.

---

### Solution

**File:** `src/pages/Details.tsx`

We need to apply conditional `object-bottom` styling to the last 2 images (index 5 and 6) in the Interior section, for both desktop and mobile views.

**Change 1: Desktop Grid (lines 307-312)**

Update the img className to conditionally apply `object-bottom` for the last 2 images:

```tsx
// Current:
<img
  src={image.src}
  alt={image.alt}
  className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-95 transition-all duration-500"
  loading="lazy"
/>

// Updated:
<img
  src={image.src}
  alt={image.alt}
  className={cn(
    "w-full h-full object-cover group-hover:scale-105 group-hover:opacity-95 transition-all duration-500",
    index >= 5 && "object-bottom"
  )}
  loading="lazy"
/>
```

**Change 2: Mobile Carousel (lines 322-328)**

Apply the same conditional styling:

```tsx
// Current:
<img
  src={image.src}
  alt={image.alt}
  className="w-full h-full object-cover object-center cursor-pointer"
  loading="lazy"
  onClick={() => openLightbox(interiorImages, index)}
/>

// Updated:
<img
  src={image.src}
  alt={image.alt}
  className={cn(
    "w-full h-full object-cover cursor-pointer",
    index >= 5 ? "object-bottom" : "object-center"
  )}
  loading="lazy"
  onClick={() => openLightbox(interiorImages, index)}
/>
```

---

### Technical Details

- **`object-bottom`**: Tailwind class that sets `object-position: bottom`, which aligns the image to show the bottom portion
- **`cn()` utility**: Already imported in the file, allows conditional class concatenation
- **Index check**: `index >= 5` targets the last 2 images (details8 at index 5, details9 at index 6) out of the 7 interior images

---

### Summary

| File | Changes |
|------|---------|
| `src/pages/Details.tsx` | Add conditional `object-bottom` styling for interior images at index 5 and 6 in both desktop grid and mobile carousel |

### Result
The last 2 interior photos will now show the wood surface at the bottom of the images, providing a better preview without requiring the customer to zoom in.

