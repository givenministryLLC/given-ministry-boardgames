# Given Ministry LLC Boardgame Storefront

An e-commerce website for a family-owned board game store built with Next.js 15, TypeScript, Tailwind CSS, and Shopify Storefront API.

## 🎯 Project Overview

Headless e-commerce site for browsing and purchasing board games online. Features a warm earth-toned design with custom color palette and full Shopify integration for cart management and checkout.

## 🛠 Tech Stack

- **Frontend:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **E-Commerce:** Shopify Storefront API
- **Icons:** Lucide React
- **State Management:** React Hooks, LocalStorage

## 🎨 Design Theme

**Warm Earth-Toned Color Palette:**
- **Warm Cream:** `#faf8f3` (backgrounds)
- **Deep Brown:** `#3c2e26` (primary text)
- **Amber/Gold:** `#8b6914`, `#b8860b` (buttons, accents)
- **Sage Green:** `#7a8471` (subtle accents, borders)
- **Rich Brown:** `#5d4e37` (footer, strong text)

## 📄 Pages

1. **Home (`/`)** - Hero section with value propositions and trust badges
2. **Games (`/games`)** - Product catalog with grid/list views, sorting by name/price
3. **Game Detail (`/games/[handle]`)** - Individual product pages with Shopify data
4. **Cart (`/cart`)** - Shopping cart with real-time updates and Shopify integration
5. **Help (`/help`)** - FAQ accordion and policies (shipping, returns, privacy)

## 🧩 Components

- **Header** - Sticky navigation with dynamic cart counter, mobile hamburger menu
- **Footer** - Company info, links, newsletter signup
- **Product Cards** - Grid/list views with stock indicators and pricing
- **Cart Management** - Add/remove items, quantity controls

## 🔌 API Routes

All routes integrate with Shopify Storefront API:

- `/api/inventory` - Fetch all products from Shopify
- `/api/product/[handle]` - Get individual product details
- `/api/cart/create` - Create new Shopify cart
- `/api/cart/get` - Retrieve existing cart
- `/api/cart/add` - Add items to cart
- `/api/cart/update` - Update item quantities
- `/api/cart/remove` - Remove items from cart

## ✨ Features

### Shopping Experience
- Real-time cart synchronization across browser tabs
- Dynamic product catalog from Shopify
- Product sorting (name, price) with ascending/descending order
- Grid and list view toggle
- Stock availability indicators
- Responsive mobile design

### Cart Management
- Add/remove products
- Quantity controls with live updates
- Subtotal and total calculations
- Shipping cost display
- Secure Shopify checkout redirect
- Cart persistence via LocalStorage

### UI/UX
- Custom gradient backgrounds
- Icon-based navigation (Lucide React)
- Animated hover states and transitions
- Mobile-optimized hamburger menu
- Loading states for async operations
- Trust badges (SSL, shipping, returns)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Add environment variables
# Create .env.local with:
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-token

# Run development server
npm run dev
# Open http://localhost:3000

# Production build
npm run build
npm run start

# Lint code
npm run lint
```

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── cart/
│   │   │   ├── add/route.ts
│   │   │   ├── create/route.ts
│   │   │   ├── get/route.ts
│   │   │   ├── remove/route.ts
│   │   │   └── update/route.ts
│   │   ├── inventory/route.ts
│   │   └── product/[handle]/route.ts
│   ├── cart/page.tsx
│   ├── games/
│   │   ├── [handle]/page.tsx
│   │   └── page.tsx
│   ├── help/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   └── Header.tsx
├── config/
│   └── company.ts
└── context/
    └── (context files)
```

## 🔧 Configuration

### Company Settings
Update company information in `src/config/company.ts`:
- Business name, contact info
- Business hours
- Shipping rates and policies
- Return policy details

### Shopify Setup
1. Create a Shopify store
2. Generate Storefront API access token
3. Add products to Shopify inventory
4. Configure environment variables

## 📦 Dependencies

**Core:**
- `next@15.4.6`
- `react@19.1.0`
- `react-dom@19.1.0`
- `typescript@^5`

**Shopify:**
- `@shopify/storefront-api-client@^1.0.9`

**UI:**
- `tailwindcss@^4`
- `lucide-react@^0.469.0`

**Dev Tools:**
- `eslint@^9`
- `eslint-config-next@15.4.6`

## 🎯 Current Status

**✅ Completed:**
- Full Shopify integration
- Real-time cart management
- Product catalog with images from Shopify CDN
- Responsive design
- Mobile navigation
- Help page with FAQs
- Secure checkout flow

## 📝 Development

### Code Standards
- TypeScript strict mode
- Tailwind utility classes
- Functional React components with hooks
- Next.js 15 App Router conventions
- ESLint for code quality

### Git Workflow
- `feat:` New features
- `fix:` Bug fixes
- `style:` Design/styling updates
- `chore:` Maintenance tasks

---

**Status:** ✅ Production Ready
**Version:** 2.0.0 (Shopify Integration Complete)
