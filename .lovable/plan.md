

## Adjust Image Positions in Interior and Chiller Sections

### Overview
Two image position adjustments are needed:
1. **Chiller first image (chiller1)**: Position it lower to show less hand and more of the wood/THRILL unit
2. **Interior last image (details9)**: Position it slightly higher - not full center, but not full bottom either

---

### Changes Required

**File:** `src/pages/Details.tsx`

#### Change 1: Interior Section - Last Image (details9) - Custom Position

The last image (index 6) currently uses `object-bottom` which is too low. We need a custom position between center and bottom. Using Tailwind's arbitrary value `object-[center_75%]` will position it 75% down (closer to bottom but not all the way).

**Desktop Grid (lines 310-313):**
```tsx
// Current:
className={cn(
  "w-full h-full object-cover group-hover:scale-105 group-hover:opacity-95 transition-all duration-500",
  index >= 5 && "object-bottom"
)}

// Updated:
className={cn(
  "w-full h-full object-cover group-hover:scale-105 group-hover:opacity-95 transition-all duration-500",
  index === 5 && "object-bottom",
  index === 6 && "object-[center_75%]"
)}
```

**Mobile Carousel (lines 328-330):**
```tsx
// Current:
className={cn(
  "w-full h-full object-cover cursor-pointer",
  index >= 5 ? "object-bottom" : "object-center"
)}

// Updated:
className={cn(
  "w-full h-full object-cover cursor-pointer",
  index === 5 && "object-bottom",
  index === 6 && "object-[center_75%]",
  index < 5 && "object-center"
)}
```

#### Change 2: Chiller Section - First Image (chiller1) - Object Bottom

Add `object-bottom` to the first chiller image (index 0) to show more of the wood and less of the hand.

**Desktop Grid (lines 375-379):**
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
    index === 0 && "object-bottom"
  )}
  loading="lazy"
/>
```

**Mobile Carousel (lines 390-394):**
```tsx
// Current:
<img
  src={image.src}
  alt={image.alt}
  className="w-full h-full object-cover object-center cursor-pointer"
  loading="lazy"
  onClick={() => openLightbox(chillerImages, index)}
/>

// Updated:
<img
  src={image.src}
  alt={image.alt}
  className={cn(
    "w-full h-full object-cover cursor-pointer",
    index === 0 ? "object-bottom" : "object-center"
  )}
  loading="lazy"
  onClick={() => openLightbox(chillerImages, index)}
/>
```

---

### Technical Details

| Position | Tailwind Class | Effect |
|----------|---------------|--------|
| Center (default) | `object-center` | Shows middle of image |
| Bottom | `object-bottom` | Shows bottom portion |
| 75% down | `object-[center_75%]` | Shows between center and bottom |

- **`cn()` utility**: Already imported, handles conditional class merging
- **Index-based conditions**: Target specific images by their array index

---

### Summary

| Section | Image | Change |
|---------|-------|--------|
| Chiller | chiller1 (index 0) | Add `object-bottom` to show more wood |
| Interior | details9 (index 6) | Change from `object-bottom` to `object-[center_75%]` for a middle position |

