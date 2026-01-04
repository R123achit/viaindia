# Scroll Portfolio Layout Diagram

## Desktop Layout (3-Column Grid)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                        [SKIP] Button │
│                                                                      │
│  ┌──────────────┐  ┌─────────────────────┐  ┌──────────────────┐  │
│  │              │  │                     │  │                  │  │
│  │  LEFT PANEL  │  │   CENTER PANEL      │  │   RIGHT PANEL    │  │
│  │              │  │                     │  │                  │  │
│  │ Our Strategic│  │    ┌─────────┐     │  │  Service Title   │  │
│  │ IT Solutions │  │    │ Laptop  │     │  │                  │  │
│  │ Deliver -    │  │    │ Mockup  │     │  │  Description...  │  │
│  │              │  │    └─────────┘     │  │                  │  │
│  │ • WEB        │  │                    │  │  Features:       │  │
│  │   APPLICATIONS│ │  ┌────┐    ┌──┐   │  │  ■ Feature 1     │  │
│  │              │  │  │Tab │    │Mo│   │  │  ■ Feature 2     │  │
│  │ • WEB        │  │  │let │    │bi│   │  │  ■ Feature 3     │  │
│  │   DESIGNING  │  │  └────┘    │le│   │  │                  │  │
│  │              │  │            └──┘   │  │  Clients:        │  │
│  │ • E-COMMERCE │  │                    │  │  [Client1]       │  │
│  │   WEBSITE    │  │                    │  │  [Client2]       │  │
│  │ ─────────    │  │                    │  │  [Client3]       │  │
│  │ (underlined) │  │                    │  │  [Client4]       │  │
│  │              │  │                    │  │                  │  │
│  │ • MOBILE APP │  │                    │  │  View All →      │  │
│  │   DEVELOPMENT│  │                    │  │                  │  │
│  │              │  │                    │  │                  │  │
│  │ • DESKTOP    │  │                    │  │                  │  │
│  │   APPLICATIONS│ │                    │  │                  │  │
│  │              │  │                    │  │                  │  │
│  │ • SEARCH     │  │                    │  │                  │  │
│  │   ENGINE     │  │                    │  │                  │  │
│  │   OPTIMIZATION│ │                    │  │                  │  │
│  │              │  │                    │  │                  │  │
│  │ • SOCIAL     │  │                    │  │                  │  │
│  │   MEDIA      │  │                    │  │                  │  │
│  │   MARKETING  │  │                    │  │                  │  │
│  │              │  │                    │  │                  │  │
│  └──────────────┘  └─────────────────────┘  └──────────────────┘  │
│                                                                      │
│                     ● ● ● ○ ○ ○ ○                                  │
│                   (Progress Indicator)                              │
└─────────────────────────────────────────────────────────────────────┘
```

## Mobile Layout (Stacked)

```
┌──────────────────────────┐
│              [SKIP]      │
│                          │
│  Our Strategic IT        │
│  Solutions Deliver -     │
│                          │
│  • WEB APPLICATIONS      │
│  • WEB DESIGNING         │
│  • E-COMMERCE WEBSITE    │
│  ─────────────           │
│  • MOBILE APP DEV        │
│  • DESKTOP APPS          │
│  • SEO                   │
│  • SOCIAL MEDIA          │
│                          │
├──────────────────────────┤
│                          │
│     ┌──────────┐         │
│     │  Laptop  │         │
│     └──────────┘         │
│   ┌────┐    ┌──┐        │
│   │Tab │    │Mo│        │
│   └────┘    └──┘        │
│                          │
├──────────────────────────┤
│                          │
│  Service Title           │
│                          │
│  Description text...     │
│                          │
│  Features:               │
│  ■ Feature 1             │
│  ■ Feature 2             │
│  ■ Feature 3             │
│                          │
│  Clients:                │
│  [C1] [C2] [C3] [C4]    │
│  View All →              │
│                          │
│    ● ● ● ○ ○ ○ ○        │
└──────────────────────────┘
```

## Component Hierarchy

```
ScrollPortfolio
│
├── Background Gradient (Animated)
│
├── Content Grid
│   │
│   ├── Left Panel
│   │   ├── Title
│   │   └── Service Navigation
│   │       ├── Service 1 (clickable)
│   │       ├── Service 2 (clickable)
│   │       ├── Service 3 (clickable, active)
│   │       ├── Service 4 (clickable)
│   │       ├── Service 5 (clickable)
│   │       ├── Service 6 (clickable)
│   │       └── Service 7 (clickable)
│   │
│   ├── Center Panel
│   │   └── DeviceMockups
│   │       ├── Laptop (z-30, center)
│   │       ├── Tablet (z-20, right)
│   │       └── Mobile (z-10, left)
│   │
│   └── Right Panel
│       ├── Service Title
│       ├── Description
│       ├── Features List
│       └── Clients Section
│           ├── Client Badges
│           └── View All Link
│
├── Skip Button (top-right)
│
└── Progress Indicator (bottom-center)
```

## Scroll Behavior Flow

```
User Scrolls Down
       ↓
Section Pins (stays in viewport)
       ↓
Progress: 0% → 14% → 28% → 42% → 57% → 71% → 85% → 100%
Service:   1  →  2  →  3  →  4  →  5  →  6  →  7
       ↓
Background Color Transitions
       ↓
Device Screens Fade Out/In
       ↓
Service Info Updates
       ↓
Progress Indicator Updates
       ↓
Section Unpins (normal scroll resumes)
```

## Color Transition Sequence

```
Service 1: Blue     ████████
Service 2: Teal     ████████
Service 3: Cyan     ████████
Service 4: Purple   ████████
Service 5: Indigo   ████████
Service 6: Green    ████████
Service 7: Pink     ████████
```

## Device Mockup Positioning

```
                Laptop (Center, Front)
                ┌─────────────┐
                │             │
                │   Screen    │
                │             │
                └─────────────┘
                    ▔▔▔▔▔

    Tablet (Right, Middle)        Mobile (Left, Back)
    ┌──────────┐                  ┌────┐
    │          │                  │    │
    │  Screen  │                  │ Sc │
    │          │                  │ re │
    │          │                  │ en │
    └──────────┘                  └────┘
```

## Responsive Breakpoints

```
Mobile:    < 1024px  (Stacked layout)
           ┌────┐
           │ L  │
           │ C  │
           │ R  │
           └────┘

Tablet:    1024px - 1280px  (Adjusted spacing)
           ┌──────────┐
           │ L  C  R  │
           └──────────┘

Desktop:   > 1280px  (Full 3-column)
           ┌─────────────────┐
           │  L    C    R    │
           └─────────────────┘
```

## Animation Timeline

```
Scroll Position: 0%        14%       28%       42%       57%       71%       85%       100%
                 │          │         │         │         │         │         │         │
Service:         1          2         3         4         5         6         7         End
                 │          │         │         │         │         │         │         │
Background:    Blue → → → Teal → → Cyan → → Purple → → Indigo → → Green → → Pink
                 │          │         │         │         │         │         │         │
Content:       Fade → → → Fade → → Fade → → Fade → → Fade → → Fade → → Fade
                 │          │         │         │         │         │         │         │
Screens:       Img1 → → → Img2 → → Img3 → → Img4 → → Img5 → → Img6 → → Img7
```

## User Interaction Points

```
┌─────────────────────────────────────┐
│  1. Click Service Name → Jump       │
│  2. Scroll → Progress through       │
│  3. Click Skip → Bypass feature     │
│  4. Click View All → See clients    │
└─────────────────────────────────────┘
```

## Z-Index Layers

```
Layer 5 (z-30): Skip Button, Progress Indicator
Layer 4 (z-30): Laptop Mockup
Layer 3 (z-20): Tablet Mockup
Layer 2 (z-10): Mobile Mockup, Content Grid
Layer 1 (z-0):  Background Gradient
```

---

This diagram helps visualize the complete layout and behavior of the scroll portfolio feature.
