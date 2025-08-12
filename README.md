# Robin Perkins Boardgame Storefront

A warm, Christian-inspired Next.js e-commerce website for an online board game store built with App Router, TypeScript, and Tailwind CSS.

## 🎯 Project Goal
Build a **headless e-commerce** site for a board game company to **browse inventory and buy** games online. Features a calm, warm, religious-inspired design with colors evoking comfort, tradition, and tranquility.

## 🛠 Tech Stack
- **Frontend:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Future Integration:** Shopify Storefront API (for products, cart, checkout)
- **Optional Later:** Sanity CMS (for blog/content management)

## 🎨 Design Theme
**Warm Religious-Inspired Color Palette:**
- **Warm Cream:** `#faf8f3` (backgrounds)
- **Deep Brown:** `#3c2e26` (primary text)
- **Amber/Gold:** `#8b6914`, `#b8860b` (buttons, accents)
- **Sage Green:** `#7a8471` (subtle accents, borders)
- **Rich Brown:** `#5d4e37` (footer, strong text)

Colors evoke feelings of warmth, comfort, stability, peace, and tradition.

## 📄 Current Pages

### ✅ Completed Pages
1. **Home (`/`)** - Hero section, featured games, value propositions
2. **Games List (`/games`)** - Product grid with category filters and sorting
3. **Game Detail (`/games/[handle]`)** - Individual product pages with details
4. **About & Contact (`/about`)** - Combined company info and contact form
5. **Cart (`/cart`)** - Shopping cart with quantity controls and checkout
6. **FAQ (`/faq`)** - Expandable frequently asked questions
7. **Policies (`/policies`)** - Return policy, shipping, terms, privacy

### 🧩 Key Components
- **Header** - Navigation with logo, menu, cart link
- **Footer** - Company info, links, newsletter signup
- **Responsive Design** - Mobile-friendly navigation and layouts

## 🚀 Current Status

### What's Working
- ✅ Complete page structure and navigation
- ✅ Responsive design with warm color theme
- ✅ Product filtering and sorting (placeholder data)
- ✅ Dynamic routing for individual games
- ✅ Interactive cart functionality
- ✅ Contact form (frontend only)
- ✅ FAQ accordion interface
- ✅ Comprehensive policies page

### Placeholder Features (Ready for Integration)
- 🔄 **Product Data:** Currently using hardcoded game data
- 🔄 **Cart Management:** Frontend-only cart state
- 🔄 **Checkout:** Button ready for Shopify redirect
- 🔄 **Contact Form:** Frontend form ready for backend
- 🔄 **Newsletter:** Input ready for email service

## 🔮 Next Steps (Integration Phase)

### 1. Shopify Integration
```bash
# Environment variables to add:
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_TOKEN=your-storefront-access-token
```

**API Integration Tasks:**
- [ ] Connect `/games` to Shopify products API
- [ ] Connect `/games/[handle]` to individual product queries
- [ ] Implement cart API routes (`/api/cart/create`, `/api/cart/add`)
- [ ] Add checkout redirect to Shopify hosted checkout
- [ ] Display real inventory/availability status

### 2. Content Management (Optional)
- [ ] Add Sanity CMS for blog/content pages
- [ ] Create `/studio` route for content editing
- [ ] Add dynamic content sections

### 3. Production Features
- [ ] Form submission handling (contact, newsletter)
- [ ] SEO optimization and metadata
- [ ] Performance optimization
- [ ] Error handling and loading states

## 🏃‍♂️ Getting Started

```bash
# Clone and install
git clone [your-repo-url]
cd robin-perkins-boardgame-storefront
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Other commands
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint check
```

## 📁 Project Structure

```
src/
├── app/
│   ├── about/page.tsx          # About & Contact combined
│   ├── cart/page.tsx           # Shopping cart
│   ├── faq/page.tsx            # FAQ with accordion
│   ├── games/
│   │   ├── [handle]/page.tsx   # Dynamic game detail pages
│   │   └── page.tsx            # Games listing with filters
│   ├── policies/page.tsx       # All policies combined
│   ├── globals.css             # Warm color theme
│   ├── layout.tsx              # Root layout with header/footer
│   └── page.tsx                # Homepage
├── components/
│   ├── Header.tsx              # Navigation component
│   └── Footer.tsx              # Footer component
└── [config files]
```

## 🎮 Sample Game Data

Currently includes placeholder data for:
- Settlers of Catan ($49.99)
- Ticket to Ride ($39.99) 
- Codenames ($19.99)
- Wingspan ($59.99)
- Azul ($34.99)
- Exploding Kittens ($19.99)

## 📝 Development Notes

### Commit Pattern
- `feat/`: New features
- `fix/`: Bug fixes  
- `style/`: Design/styling updates
- `chore/`: Maintenance tasks

### Code Standards
- **TypeScript:** Strict mode enabled
- **Styling:** Tailwind utility classes only
- **Components:** Functional components with hooks
- **Routing:** Next.js 15 App Router conventions

## 🔄 Deployment Plan

### Current: Development Only
- Local development on `localhost:3000`
- No deployment setup yet

### Future: Production Deployment
1. **Vercel** (recommended for Next.js)
2. **Domain Setup** (client-owned)
3. **Environment Variables** (Shopify keys)
4. **SSL/HTTPS** (automatic with Vercel)

## 🏢 Business Requirements

### MVP Scope ✅
- [x] Product browsing and filtering
- [x] Individual product pages
- [x] Shopping cart functionality
- [x] Company information and policies
- [x] Contact methods and FAQ

### Post-MVP Features 🔄
- [ ] Live Shopify product data
- [ ] Hosted checkout integration
- [ ] Email marketing integration
- [ ] CMS for content management
- [ ] Advanced search functionality

## 📞 Support & Contact

For development questions or business requirements, refer to the contact information in the About page or reach out through the integrated contact form.

---

**Status:** ✅ Frontend Complete - Ready for Shopify Integration  
**Last Updated:** [Current Date]  
**Version:** 0.2.0 (Frontend MVP Complete)