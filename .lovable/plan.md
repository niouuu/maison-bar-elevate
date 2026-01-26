

## Replace Chiller4 Image with Chiller4_2

### Overview
Replace the `chiller4.jpg` image with `chiller4_2.png` in the Chiller section of the Details page.

---

### Changes Required

**File:** `src/pages/Details.tsx`

**Change 1: Update the import statement**

```tsx
// Current (line 48):
import chiller4 from "@/assets/chiller4.jpg";

// Updated:
import chiller4 from "@/assets/chiller4_2.png";
```

That's it! Since the variable name `chiller4` remains the same, the `chillerImages` array will automatically use the new image without any additional changes.

---

### Summary

| File | Change |
|------|--------|
| `src/pages/Details.tsx` | Update import path from `chiller4.jpg` to `chiller4_2.png` |

