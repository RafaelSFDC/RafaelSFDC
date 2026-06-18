---
name: PedeFacil Digital Menu System
colors:
  surface: '#fcf9f4'
  surface-dim: '#dcdad5'
  surface-bright: '#fcf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ee'
  surface-container: '#f0ede9'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e5e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#414844'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f3f0eb'
  outline: '#727974'
  outline-variant: '#c1c8c2'
  surface-tint: '#436555'
  primary: '#022619'
  on-primary: '#ffffff'
  primary-container: '#1a3c2e'
  on-primary-container: '#82a794'
  inverse-primary: '#aacfbb'
  secondary: '#006d2f'
  on-secondary: '#ffffff'
  secondary-container: '#5dfd8a'
  on-secondary-container: '#007232'
  tertiary: '#311d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#4d3000'
  on-tertiary-container: '#da8f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c5ebd7'
  primary-fixed-dim: '#aacfbb'
  on-primary-fixed: '#002115'
  on-primary-fixed-variant: '#2c4d3e'
  secondary-fixed: '#66ff8e'
  secondary-fixed-dim: '#3de273'
  on-secondary-fixed: '#002109'
  on-secondary-fixed-variant: '#005322'
  tertiary-fixed: '#ffddb4'
  tertiary-fixed-dim: '#ffb955'
  on-tertiary-fixed: '#291800'
  on-tertiary-fixed-variant: '#633f00'
  background: '#fcf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e5e2dd'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  container-max: 1200px
  gutter: 16px
---

## Brand & Style

The design system is built to facilitate seamless digital ordering for the Brazilian hospitality market. The brand personality is **reliable, appetizing, and efficient**, bridging the gap between a professional POS system and the friendly, informal nature of WhatsApp commerce. 

The aesthetic follows a **Warm Corporate** approach: it utilizes the structure of modern SaaS interfaces but softens them with a colonial-inspired palette and high-radius geometry. The goal is to evoke the feeling of a high-quality physical menu while maintaining the speed of a digital tool. Visuals should prioritize clarity and "tapability," ensuring that even non-tech-savvy users feel confident navigating the interface. Avoid photography of people; instead, focus on high-quality product imagery and clean, monolinear iconography.

## Colors

The palette is designed for high legibility and an organic, food-safe feel.

*   **Primary (Deep Forest):** Used for headers, navigation, and primary brand moments to establish authority and sophistication.
*   **Secondary (WhatsApp Green):** Reserved exclusively for conversion actions—"Order via WhatsApp" buttons and final checkout triggers.
*   **Tertiary (Soft Amber):** Used for highlighting promotions, badges, and "Recommended" items to catch the eye without creating alarm.
*   **Background (Warm Off-White):** Provides a soft, paper-like canvas that reduces eye strain compared to pure white.
*   **Body Text (Charcoal):** A high-contrast neutral for menu descriptions and pricing, ensuring accessibility in various lighting conditions.

## Typography

This design system employs a tiered typographic scale to manage information density. **Plus Jakarta Sans** is used for all headlines to provide a friendly, rounded character that feels modern and welcoming. **Inter** is utilized for all functional text, descriptions, and data points due to its exceptional legibility at small sizes.

When displaying prices, use a medium weight for the currency symbol and a bold weight for the value to ensure users can quickly scan costs. Use `label-md` in uppercase for category headers or small metadata tags.

## Layout & Spacing

The layout philosophy relies on a **Fluid Grid** with generous safe areas to accommodate mobile-first usage (the primary use case for WhatsApp ordering). 

- **Mobile:** Single column layout with 16px side margins. Cards should span the full width of the content area.
- **Desktop:** 12-column grid with a maximum container width of 1200px. Menu categories can be displayed as a sidebar or a top-tab navigation.
- **Vertical Rhythm:** Use the 8px base unit. Small elements (buttons, inputs) use 12px or 16px internal padding, while sections are separated by 40px to 64px to maintain a clean, airy feel.

## Elevation & Depth

This design system uses **Tonal Layering** combined with **Ambient Shadows** to create a sense of physical presence without looking dated.

1.  **Level 0 (Base):** The Warm Off-White background.
2.  **Level 1 (Cards):** Pure white surfaces (#FFFFFF) with a very soft, diffused shadow (0px 4px 20px rgba(28, 28, 28, 0.05)). This is used for menu item cards.
3.  **Level 2 (Active/Floating):** Used for the "View Cart" sticky bar or floating action buttons. These use a slightly more pronounced shadow (0px 8px 30px rgba(28, 28, 28, 0.12)).

Avoid heavy borders; instead, use subtle 1px strokes in a slightly darker off-white to define boundaries when shadows are not appropriate.

## Shapes

The shape language is defined by **significant roundedness** to reinforce the "Easy/Facil" brand promise. 

- **Standard Elements:** Buttons, input fields, and small cards use a **12px (rounded-lg)** radius.
- **Large Containers:** Hero sections and prominent menu category cards use a **24px (rounded-xl)** radius.
- **Badges:** Use a fully rounded (pill) shape for status indicators (e.g., "Open Now" or "Sold Out").
- **Product Images:** Should always match the corner radius of their parent card to maintain a cohesive silhouette.

## Components

### Buttons
- **Primary:** Deep Forest Green with white text. High emphasis.
- **WhatsApp CTA:** Vibrant Green (#25D366) with white text. Includes the WhatsApp icon.
- **Secondary:** Transparent with a Deep Forest Green stroke.

### Cards
Menu cards should feature a thumbnail image on the right (or top on mobile), the item name in `headline-sm`, and the price in the Primary color. Use Level 1 elevation.

### Input Fields
Background should be white with a 1px border. On focus, the border should change to Primary Deep Forest Green. Labels should use `body-sm` in Charcoal.

### Chips/Filters
Used for dietary tags (Vegan, Gluten-Free) or categories. Use a light version of the Primary color (tinted) with dark text for unselected states, and solid Primary for selected states.

### List Items
For order summaries, use a clean layout with quantity selectors (+ / -) that are large enough for thumb-tapping (minimum 44x44px hit area).