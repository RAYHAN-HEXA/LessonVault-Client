# Lessonly Client

A modern, responsive React-based client application for Lessonly, a Digital Life Lessons platform where users can create, store, share, favorite, like, comment on, and browse meaningful life lessons and personal wisdom.

## Features

- **User Authentication**: Secure login and registration using Firebase Authentication
- **Lesson Management**: Create, browse, view, save, and share life lessons
- **Premium Features**: Upgrade to premium for exclusive content access
- **Dashboard**: Personalized dashboard for users and admins
- **Payment Integration**: Stripe-powered payment system for premium subscriptions
- **Admin Panel**: Comprehensive admin tools for managing users, lessons, and reports
- **Responsive Design**: Mobile-first design using Tailwind CSS and DaisyUI
- **Real-time Notifications**: Toast notifications for user feedback
- **Social Sharing**: Share lessons across social media platforms
- **Dark/Light Theme**: Theme switching capability

## Tech Stack

- **Frontend**: React 19, React Router 7
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, DaisyUI
- **Backend Integration**: Axios for API calls
- **Authentication**: Firebase Authentication
- **Payments**: Stripe
- **Animations**: Framer Motion, Lottie React
- **Charts**: Recharts
- **Icons**: Lucide React, React Icons
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast, React Toastify
- **Carousels**: Swiper
- **Email**: EmailJS

## UI Design System - Lessonly Digital Life Lessons Platform

### Color Palette

#### Primary Colors - Sage Green Theme
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Primary Sage Green | `#6E9277` | Primary buttons, active links, highlights |
| Primary Hover | `#587862` | Button hover states |
| Dark Forest Green | `#2F4F3E` | Dark sections, footer, sidebar |
| Light Sage Accent | `#C9D8C5` | Accent backgrounds, badges |

#### Background Colors
| Element | Hex Code | Usage |
|---------|----------|-------|
| Main Background | `#FFFFFF` | White - main page background |
| Section Background | `#F8FAF6` | Soft sage-tinted sections |
| Card Background | `#FFFFFF` | White cards |
| Border Color | `#E5ECE2` | Soft sage border |

#### Text Colors
| Element | Hex Code | Usage |
|---------|----------|-------|
| Main Text | `#1F2937` | Dark gray - primary text |
| Secondary Text | `#6B7280` | Medium gray - secondary text |

#### Semantic Colors
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Success | `#4F7A5E` | Success states (sage-based green) |
| Warning | `#D9A441` | Warning states (warm gold) |
| Error | `#D9534F` | Error states (soft red) |
| Info | `#6E9277` | Info states (sage green) |

#### Dark Mode (Optional)
| Element | Hex Code | Usage |
|---------|----------|-------|
| Background | `#1F2937` | Dark gray |
| Surface | `#374151` | Card surfaces |
| Surface Alt | `#2F4F3E` | Dark sage alternative |
| Text | `#F8FAF6` | Light text |
| Text Secondary | `#C9D8C5` | Light sage text |
| Border | `#4B5563` | Medium gray border |

### Typography

#### Font Families
- **Sans**: `'Inter', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif`
- **Serif**: `'PT Serif', 'Georgia', serif` (for headings)
- **Mono**: `'Fira Code', 'Courier New', monospace`

#### Font Sizes
| Name | Size | Usage |
|------|------|-------|
| xs | 0.75rem | Small labels |
| sm | 0.875rem | Body text, captions |
| base | 1rem | Default text |
| lg | 1.125rem | Subheadings |
| xl | 1.25rem | Small headings |
| 2xl | 1.5rem | Section headings |
| 3xl | 1.875rem | Page titles |
| 4xl | 2.25rem | Hero titles |
| 5xl | 3rem | Display headings |

#### Font Weights
| Name | Value | Usage |
|------|-------|-------|
| Light | 300 | Subtle text |
| Normal | 400 | Body text |
| Medium | 500 | Emphasized text |
| Semibold | 600 | Subheadings |
| Bold | 700 | Headings, buttons |
| Extrabold | 800 | Display text |

### Spacing Scale
```
0: 0          | 8: 2rem      | 16: 4rem
1: 0.25rem    | 10: 2.5rem   | 20: 5rem
2: 0.5rem     | 12: 3rem     | 24: 6rem
3: 0.75rem    |
4: 1rem       |
6: 1.5rem     |
```

### Border Radius
| Name | Value | Usage |
|------|-------|-------|
| sm | 0.375rem | Small elements |
| base | 0.5rem | Default radius |
| md | 0.75rem | Cards, inputs |
| lg | 1rem | Large cards |
| xl | 1.25rem | Hero elements |
| 2xl | 1.5rem | Extra large cards |

### Shadows
| Name | Value |
|------|------|
| sm | `0 1px 2px rgba(31, 41, 55, 0.05)` |
| base | `0 1px 3px rgba(31, 41, 55, 0.08), 0 1px 2px rgba(31, 41, 55, 0.04)` |
| md | `0 4px 6px rgba(31, 41, 55, 0.08), 0 2px 4px rgba(31, 41, 55, 0.04)` |
| lg | `0 10px 15px rgba(31, 41, 55, 0.08), 0 4px 6px rgba(31, 41, 55, 0.04)` |
| xl | `0 20px 25px rgba(31, 41, 55, 0.08), 0 10px 10px rgba(31, 41, 55, 0.04)` |

### Breakpoints
| Name | Size |
|------|------|
| xs | 0px |
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |

### Component Standards

#### Buttons
| Size | Height | Padding |
|------|--------|---------|
| sm | 2.5rem | 0.5rem 1rem |
| md | 3rem | 0.75rem 1.5rem |
| lg | 3.5rem | 1rem 2rem |

#### Cards
- Border Radius: `1rem`
- Padding: `1.5rem`
- Shadow: `0 1px 3px rgba(31, 41, 55, 0.08), 0 1px 2px rgba(31, 41, 55, 0.04)`
- Background: White

#### Inputs
- Height: `2.75rem`
- Padding: `0.75rem 1rem`
- Border Radius: `0.5rem`

### Logo & Branding

**Logo Component**: Text-based logo with BookOpen icon
```
[BookOpen Icon] Lessonly
```

**Logo Colors**:
- Icon: `#6E9277` (Sage Green)
- Text: `#1F2937` (Dark Gray)

## Getting Started

### Prerequisites

- Node.js >= 20.19.0 < 22.12.0
- npm >= 9.0.0

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

Create a `.env` file in the root directory and add the following:

```env
VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_firebase_auth_domain
VITE_PROJECTID=your_firebase_project_id
VITE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_MESSAGINGSENDERID=your_firebase_messaging_sender_id
VITE_APPID=your_firebase_app_id
VITE_MEASUREMENTID=your_firebase_measurement_id
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── contexts/            # React Context providers
├── hooks/               # Custom React hooks
├── layouts/             # Layout components
├── pages/               # Page components
│   ├── Auth/           # Authentication pages
│   ├── Payment/        # Payment pages
│   └── ProtectedPages/ # Protected route pages
├── utils/               # Utility functions
└── assets/              # Static assets
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## License

This project is private and proprietary.

Built with ❤️ using React and modern web technologies.
