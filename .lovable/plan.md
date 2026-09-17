# The White Bar page and navigation

## Build the new page
- Add `/the-bar/white` as a new page titled **The White Bar**.
- Match the existing Bar page’s full-height hero, Chamberi serif headline treatment, typography, spacing, motion, footer, and closing reservation call to action.
- Add the **White Stone Finish** section directly below the hero with the supplied copy, centered in the same refined section treatment used elsewhere on the site.

## Hero image treatment
- Use a semantic `<picture>` element with a `768px` breakpoint:
  - `white1.jpeg` for tablet and desktop.
  - `white3.PNG` for mobile.
- Create optimized WebP versions of both source images and provide responsive source candidates, while retaining the originals as fallbacks.
- Fill the hero with the selected image; position the desktop crop around `center 65%` so the counter remains visible.
- Add an accessible descriptive image alt and a dark top-to-bottom overlay that is strongest near the bottom for readable white text.

## Navigation
- Change only the existing **The Bar** navigation entry into a two-item menu:
  - **Signature Bar** → `/the-bar`
  - **White Bar** → `/the-bar/white`
- Keep the parent label linked to `/the-bar`, preserving the current header dimensions, nav spacing, typography, underline, and all other links.
- Desktop: open on hover or keyboard interaction, keep open across the trigger and panel, delay closing briefly, rotate a small chevron, and animate the white square-cornered panel with a subtle fade/slide and soft shadow.
- Keyboard: Enter/Space toggles the menu, arrow keys navigate its items, and Escape closes it and restores focus to the parent.
- Mobile: render the same choices as an expandable accordion within the existing menu, with comfortable touch targets and active-child indication.
- Keep **The Bar** underlined on either bar page and mark the selected child.

## Integration and verification
- Register the new route without changing existing routes or page content.
- Verify desktop hover/click behavior, complete keyboard navigation, mobile accordion behavior, active states, image switching/crop, and layout at desktop and mobile widths.
- Confirm the project builds cleanly and existing navigation remains unchanged outside the new Bar submenu.

## Files in scope
- New White Bar page and optimized White Bar image variants.
- Route registration.
- Navigation component only for the requested dropdown/accordion behavior.
