# Specification

## Summary
**Goal:** Build a responsive, multi-page food business marketing website with a cohesive warm/earthy visual theme, a categorized menu, an about/story page, and a contact form that saves submissions to a Motoko backend.

**Planned changes:**
- Create pages/sections for Home (hero + highlights), Menu (3+ categories with 3+ items each), About/Story (story + values), and Contact (details + form).
- Implement clear navigation between pages with consistent header/footer styling.
- Apply a consistent warm/earthy theme (non-blue/purple primary) across typography, spacing, and components.
- Build a contact form with client-side validation and success/error UI feedback.
- Add backend endpoints in a single Motoko actor to persist contact submissions in canister memory and expose submission handling to the frontend.
- Generate and include static hero and logo images under `frontend/public/assets/generated` and reference them in the UI.

**User-visible outcome:** Visitors can browse the Home, Menu, and About/Story pages, and submit a validated contact form that shows success/error feedback and stores the message in the site’s backend.
