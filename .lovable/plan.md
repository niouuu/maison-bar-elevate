

## Update First Section: Remove Title "Craftsmanship Up Close"

### Overview
The section navigation already shows "The Wood" as the label. We need to remove the visible heading "Craftsmanship Up Close" from the first section while keeping the descriptive paragraph.

---

### Changes Required

**File:** `src/pages/Details.tsx`

**Remove lines 218-226** - Delete the decorative line and H2 heading:

```tsx
// Lines to REMOVE:
{/* Decorative line */}
<div className="w-12 h-px bg-foreground/20 mx-auto mb-8" />

<motion.h2
  style={{ y: craftTitleY }}
  className="font-chamberi text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-foreground tracking-tight"
>
  Craftsmanship Up Close
</motion.h2>
```

**After the change**, the section will start directly with the descriptive paragraph about the American walnut wood.

---

### Result

The first section will now:
- Display only the descriptive text about dark American walnut
- Match the navigation label "The Wood"
- Remove the redundant "Craftsmanship Up Close" title

---

### Summary

| File | Change |
|------|--------|
| `src/pages/Details.tsx` | Remove decorative line and H2 "Craftsmanship Up Close" heading (lines 218-226) |

