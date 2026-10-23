# Rabtech Task 3 — Semantic HTML5 & Accessible Component Architecture

A responsive, multi-page demo implementing semantic HTML5 landmarks, keyboard navigation, accessible forms, a data table, and a modal dialog.

## Project structure
- `index.html` — overview, semantic page layout, and modal dialog
- `components/forms.html` — labelled form fields, fieldset/legend, validation feedback
- `components/table.html` — captioned table with scoped headers
- `css/styles.css` — responsive styling, focus states, and reduced-motion support
- `js/main.js` — mobile navigation, dialog behaviour, and form validation
- `docs/ACCESSIBILITY_CHECKLIST.md` — manual review checklist

## Run locally
Open `index.html` in a modern browser. No build tools or external libraries are required.

## Publish to GitHub
1. Create a new **public** GitHub repository (for example `rabtech-task-3-accessible-components`).
2. Upload all files and folders from this project, keeping the directory structure.
3. Ensure `index.html` is in the repository root.
4. Open `index.html` on GitHub and check that it is present; optionally enable GitHub Pages in repository Settings → Pages.
5. Copy the public repository URL and submit it in Rabtech's **Submit deliverable** field.

## Accessibility features
- Semantic `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer`
- Skip link and visible `:focus-visible` styling
- Accessible names for navigation, sections, and dialog
- Explicit labels and descriptions for form controls
- `fieldset` and `legend` for related radio controls
- Client-side validation with `aria-invalid` and a live status region
- Table caption and `scope` attributes for headers
- Responsive layout, mobile navigation, and reduced-motion preference support

## Important
This is a completed starter implementation and report package, but no GitHub repository has been created or published automatically. You must upload the files to your own public GitHub repository and submit that real URL.
