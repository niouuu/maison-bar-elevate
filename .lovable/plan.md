# Add the Cocktails page

## Page and navigation
- Create `/cocktails` and register it in the existing site routes.
- Keep the current top-level order of **Home**, **Services**, the **Bar Options** dropdown, **Details**, **About**, and **Contact**. Add **Cocktails** as its own top-level item immediately after the complete **Bar Options** dropdown and before **Details** on desktop and mobile; it will not be a dropdown child.
- Reuse the existing Navbar, Footer, ScrollToTop, typography, spacing, colors, and motion language.

## Page content
- Build the Details-style hero using `cocktails1.jpg`, with **Our Cocktails** and the supplied subtitle.
- Add the three-paragraph centered introduction exactly as provided.
- Add **CLASSIC COCKTAILS** and **SIGNATURE COCKTAILS** sections with the supplied copy, printed-menu-style headings and rules, and a thin divider between sections.
- Close with the existing dark CTA pattern, **Let's Create Your Cocktail Menu**, and one contact button linking to `/contact`.

## Galleries
- Import all 14 cocktail files using their exact names and casing.
- Define top-level `classicImages` and `signatureImages` arrays using `{ src, alt }`, with cocktails 1–7 and 8–14 respectively and descriptive alt text.
- Desktop: render each set as the Details page’s three-column square gallery with staggered entrance animation and gentle image scaling.
- Mobile: render each set with the existing carousel behavior, matching arrows and dots.
- Open the existing image lightbox from every tile, scoped to the selected section’s seven images.

## Page metadata
- Add route-specific metadata using the project’s existing head-management pattern: page title, description, self-referencing `/cocktails` URL, Open Graph title/description/type, and `cocktails1.jpg` as the requested Open Graph image.
- Keep the sitewide metadata unchanged.

## Validation
- Confirm all 14 assets load without case-sensitive import errors.
- Verify desktop grid layout, mobile swipe controls, dots, lightbox navigation, navigation order/current state, contact link, and metadata.
- Check the current build and runtime diagnostics after implementation.

## Technical scope
- Expected changes are limited to the new Cocktails page plus the required route and navigation entries; no existing page content will be altered.
