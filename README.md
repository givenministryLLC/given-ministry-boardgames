**README.md**
```md
# Given Ministry LLC Boardgame Storefront

A warm, Christian-inspired Next.js e-commerce website for an online board game store built with App Router, TypeScript, and Tailwind CSS.

## 🎯 Project Goal
Build a **headless e-commerce** site for a board game company to **browse inventory and buy** games online. Features a calm, warm, religious-inspired design with colors evoking comfort, tradition, and tranquility.

## 🛠 Tech Stack
- **Frontend:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Data Management:** Local TypeScript files (developer-maintained)
- **Future Integration:** Shopify Storefront API (for cart, checkout only)

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
1. **Home (`/`)** - Hero section, about section, value propositions, contact
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

## 🎮 Current Inventory

### Games Data Structure
Games are maintained in `src/data/games.ts` with TypeScript interfaces for:
- Product information (name, price, description)
- Game specifications (players, playtime, age)
- Categories and filtering
- Stock status and ratings

### Current Games
- **Freedom's Journey** ($29.99) - Educational game about the Underground Railroad
  - Category: Educational
  - Players: 2-6
  - Playtime: 45-60 minutes
  - Age: 8+

## 🚀 Current Status

### What's Working
- ✅ Complete page structure and navigation
- ✅ Responsive design with warm color theme
- ✅ Real product data for Freedom's Journey
- ✅ Product filtering and sorting with Educational category
- ✅ Dynamic routing for individual games
- ✅ Interactive cart functionality (frontend only)
- ✅ Contact form (frontend only)
- ✅ FAQ accordion interface
- ✅ Comprehensive policies page

### Frontend-Only Features (Ready for Integration)
- 🔄 **Cart Management:** Frontend-only cart state
- 🔄 **Checkout:** Button ready for Shopify redirect
- 🔄 **Contact Form:** Frontend form ready for backend
- 🔄 **Newsletter:** Input ready for email service

## 🔮 Next Steps (Integration Phase)

### 1. Shopify Integration (Optional)
```bash
# Environment variables to add if using Shopify:
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_TOKEN=your-storefront-access-token
```

**API Integration Tasks (if needed):**
- [ ] Connect cart to Shopify cart API
- [ ] Add checkout redirect to Shopify hosted checkout
- [ ] Sync inventory status with Shopify

### 2. Inventory Management
- [ ] Add more games to `src/data/games.ts`
- [ ] Add product images to `public/images/games/`
- [ ] Update game data as needed

### 3. Production Features
- [ ] Form submission handling (contact, newsletter)
- [ ] SEO optimization and metadata
- [ ] Performance optimization
- [ ] Error handling and loading states

## 🏃‍♂️ Getting Started

```bash
# Clone and install
git clone [your-repo-url]
cd given-ministry-boardgame-storefront
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
├── config/
│   └── company.ts              # Company configuration
├── data/
│   └── games.ts                # Games inventory data
└── [config files]
```

## 🎮 Adding New Games

To add a new game, update `src/data/games.ts`:

```typescript
{
  id: 2,
  name: "Your Game Name",
  price: 39.99,
  category: "family", // strategy, family, party, educational
  handle: "your-game-handle",
  players: "2-4 players",
  playtime: "30-60 minutes", 
  age: "10+",
  rating: 4.5,
  reviews: 23,
  isNew: true,
  inStock: true,
  description: "Short description for cards and listings",
  longDescription: "Detailed description for product page",
  features: [
    "Feature 1",
    "Feature 2", 
    "Feature 3"
  ],
  images: [] // Add image paths when available
}
```

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
- **Data:** Local TypeScript files for game inventory

## 🔄 Deployment Plan

### Current: Development Only
- Local development on `localhost:3000`
- No deployment setup yet

### Future: Production Deployment
1. **Vercel** (recommended for Next.js)
2. **Domain Setup** (client-owned)
3. **Environment Variables** (if Shopify integration added)
4. **SSL/HTTPS** (automatic with Vercel)

## 🏢 Business Requirements

### MVP Scope ✅
- [x] Product browsing and filtering
- [x] Individual product pages
- [x] Shopping cart functionality
- [x] Company information and policies
- [x] Contact methods and FAQ
- [x] Real game data (Freedom's Journey)

### Post-MVP Features 🔄
- [ ] Additional games in inventory
- [ ] Product images
- [ ] Shopify integration (optional)
- [ ] Email marketing integration
- [ ] Advanced search functionality

## 📞 Support & Contact

For development questions or business requirements, refer to the contact information in the About page or reach out through the integrated contact form.

---

**Status:** ✅ Frontend Complete with Real Game Data  
**Last Updated:** August 21, 2025  
**Version:** 1.0.0 (Real Inventory Added)
```

The key updates made to the documentation:

1. **Removed Sanity CMS** - No longer mentioned as a dependency
2. **Added Data Management** - Documented the local TypeScript approach
3. **Updated Current Status** - Reflects Freedom's Journey being added
4. **Added Inventory Section** - Documents the current games and data structure
5. **Added Adding Games Guide** - Shows how to add new games easily
6. **Updated Tech Stack** - Removed CMS dependencies
7. **Simplified Integration** - Shopify is now optional for checkout only
8. **Updated Version** - Bumped to 1.0.0 since you have real inventory

The documentation now accurately reflects your current setup with local data management and no external CMS dependencies.