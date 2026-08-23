---
name: Tactical Command
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#383939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#ddc1ae'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#a58c7b'
  outline-variant: '#564334'
  surface-tint: '#ffb77f'
  primary: '#ffb77f'
  on-primary: '#4e2600'
  primary-container: '#ff8a00'
  on-primary-container: '#613100'
  inverse-primary: '#914c00'
  secondary: '#c9c6c5'
  on-secondary: '#313030'
  secondary-container: '#484646'
  on-secondary-container: '#b8b4b4'
  tertiary: '#88ceff'
  on-tertiary: '#00344d'
  tertiary-container: '#00b3fc'
  on-tertiary-container: '#004260'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcc4'
  primary-fixed-dim: '#ffb77f'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6f3900'
  secondary-fixed: '#e6e1e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#484646'
  tertiary-fixed: '#c8e6ff'
  tertiary-fixed-dim: '#88ceff'
  on-tertiary-fixed: '#001e2e'
  on-tertiary-fixed-variant: '#004c6d'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  mono-data:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 24px
  container-padding: 12px
---

## Brand & Style

This design system is built for high-stakes, mission-critical environments. It adopts an **Industrial & Aerospace** aesthetic, prioritizing data density, rapid legibility, and physical hardware metaphors. The UI is designed to feel like a ruggedized flight instrument—utilitarian, precise, and authoritative.

The style blends **Minimalism** with **Tactile** industrial elements. It uses a deep, "lights-out" color palette to reduce eye strain in low-light environments, accented by high-visibility status indicators. A subtle dot-grid texture is used on base layers to evoke the feeling of carbon fiber or technical surfaces, while crisp, low-opacity borders define the structural grid.

## Colors

The color palette is rooted in a "Tactical Dark" theme. 

- **Primary (Orange):** Reserved for active telemetry, primary actions, and critical data highlights.
- **Secondary (Dark Grey):** Used for container backgrounds to create subtle depth against the matte black base.
- **Neutral:** A range of greys used for non-essential labels and inactive states to ensure the hierarchy remains clear.
- **Semantic Colors:** Bright Red (#d32f2f) is strictly for "Disarm/Abort" or critical warnings. Emerald Green (#4caf50) is used for "Armed/Go" or successful system checks.

All text must maintain a minimum 4.5:1 contrast ratio against the charcoal backgrounds, predominantly utilizing off-whites and light greys.

## Typography

**Space Grotesk** is used across all levels to provide a technical, geometric feel that remains legible at small sizes. 

- **Data Readouts:** Use the `mono-data` role for telemetry values (speed, altitude, coordinates) to prevent layout shifting as numbers change.
- **Hierarchy:** Use `label-caps` for secondary metadata and group headers to create a clear visual distinction from primary data.
- **Contrast:** Headings should be Pure White (#FFFFFF) while secondary body text should use Light Grey (#E0E0E0).

## Layout & Spacing

The layout utilizes a **Fixed Grid** system inspired by military HUDs. The interface is divided into functional "zones" that maintain their positions to build muscle memory.

- **Desktop:** 12-column grid with 16px gutters.
- **Density:** High density is preferred. Elements are packed tightly to maximize the information visible without scrolling.
- **Texture:** The base background (#131313) features a repeating 4px dot-grid texture at 5% opacity to provide visual depth and an "instrument panel" feel.
- **Rhythm:** All spacing and sizing should be multiples of 4px, with 8px being the standard unit for internal component padding.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **High-Contrast Outlines** rather than traditional shadows.

- **Level 0 (Base):** Matte Black (#131313) with dot texture.
- **Level 1 (Containers):** Dark Grey (#1c1b1b) with a 1px solid border (#2a2a2a).
- **Active State:** Elements in focus or active states use a 1px Primary Orange (#ff8a00) border.
- **Shadows:** Avoid soft ambient shadows. If depth is required for overlays, use a sharp 2px "hard" shadow with 50% opacity to maintain the industrial feel.

## Shapes

The shape language is "Ruggedized Geometry." 

- **Standard Radius:** All buttons, cards, and input fields use an 8px (`rounded-md`) corner radius. This balances the aggressive industrial look with modern UI expectations.
- **Interactive Elements:** Buttons and toggles should feel like physical keys.
- **Indicators:** Small status pips or markers may use 100% rounding (pills) to distinguish them from structural layout elements.

## Components

### Buttons
- **Primary:** Solid Orange (#ff8a00) background with Black text. 8px radius.
- **Secondary:** Transparent background with 1px #ff8a00 border and Orange text.
- **Critical (Abort):** Solid Red (#d32f2f) with White text.
- **Ghost:** No background, light grey text, used for tertiary utility actions.

### Input Fields
- Dark backgrounds (#0a0a0a) with a 1px #2a2a2a border. 
- On focus, the border changes to Primary Orange. 
- Labels sit above the input using the `label-caps` style.

### Cards & Modules
- Used to group telemetry data. 
- Must include a 1px border (#2a2a2a).
- Optional: A "title bar" area with a slightly lighter grey background to house the module name and icons.

### Status Chips
- Small, rectangular indicators with 4px radius.
- Use semantic colors for background (Red/Green/Orange) at 20% opacity with a solid 1px border of the same color for high visibility.

### Telemetry Lists
- Clean rows with 1px bottom dividers.
- Labels are left-aligned in `label-caps`; values are right-aligned in `mono-data`.