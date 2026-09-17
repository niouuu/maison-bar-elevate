## Remove AMOX Branding from the Site

### Overview
Remove the "Powered by AMOX" credit from the site footer. A search of the entire project confirms this is the only AMOX-related reference (text and link).

### Changes Required

**File:** `src/components/Footer.tsx`

Remove the final paragraph in the footer's bottom section (lines 110–120), which currently renders:

```tsx
<p className="font-sans text-xs text-muted-foreground opacity-60">
  Powered by{" "}
  <a href="https://www.amox.gr/" ...>AMOX</a>
</p>
```

### Result

- The footer's bottom bar keeps the legal links (Privacy, Cookies, Terms), the copyright line, and the company line.
- No AMOX text or link remains anywhere on the site.
- No other pages, styles, or components are touched.
