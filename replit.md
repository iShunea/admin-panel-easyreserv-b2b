# Admin Panel for iShunea

## Overview
This is a React-based admin panel built with Vite, Material-UI (MUI), and various modern libraries. It provides a comprehensive admin dashboard with features for managing customers, invoices, forms, tables, and more.

## Tech Stack
- **Framework**: React 18.2.0
- **Build Tool**: Vite 5.2.10  
- **UI Library**: Material-UI (MUI) v5
- **State Management**: React Context API
- **Routing**: React Router v6
- **Data Tables**: @tanstack/react-table
- **Charts**: ApexCharts
- **Forms**: Formik with Yup validation
- **HTTP Client**: Axios

## Project Structure
- `src/` - Main source code
  - `components/` - Reusable components
  - `pages/` - Page components
  - `sections/` - Section-specific components
  - `layout/` - Layout components
  - `themes/` - Theme configuration and overrides
  - `utils/` - Utility functions
  - `api/` - API integration
  - `contexts/` - React contexts
  - `routes/` - Route definitions

## Recent Changes (Oct 17, 2025)

### Latest Update: Critical Bug Fixes for Blog Article Creation 🐛
- **Fixed "setErrorIndex is not defined" Error**: ImageForm now receives setErrorIndex prop correctly
- **Relaxed Image Validation**: Only title image required (was blocking creation with 6 mandatory images)
  - titleImagePath: Required
  - carouselImagePath1-4, firstSubheadingImage: Now optional
- **Fixed 404 Handling**: Blog table treats 404 as empty list (backend returns 404 when no blogs exist)
- **Result**: Users can now create blog articles with just title text and one image ✅

### CRUD Action Buttons for Blog Management 🎯
- **Edit & Delete Buttons in Blog Table**: Complete CRUD management interface
  - Added "Actions" column with Edit (✏️) and Delete (🗑️) icon buttons
  - Edit button redirects to `/forms/edit/blog/{id}` for article editing
  - Delete button shows confirmation dialog: "Are you sure you want to delete '{title}'?"
  - Delete API call: `DELETE admin/blogs/{id}` with optimistic UI update
  - Color-coded buttons: Blue (Edit), Red (Delete) with tooltips
  - Removed row-click navigation for clearer UX

### Blog URL Auto-Generation ✨
- **Automatic Blog/* URL Structure**: All new blog articles automatically get URLs with "Blog/" prefix
  - Created `url-helpers.js`: Slug generation with EN/RO/RU character support (ă→a, ș→s, Cyrillic→Latin)
  - When user types English title → ID auto-generates as "Blog/title-slug"
  - Example: "How to Book a Table" → "Blog/how-to-book-a-table"
- **GooglePreview Enhanced**: Shows correct URL `easyreserv.com/Blog/article-slug` in SEO preview
- **Form Improvements**:
  - Page URL field is read-only for new articles (auto-generated), editable for existing
  - Helper text explains auto-generation from English title
  - Works in both Create and Edit forms

### Previous Updates
- Set up project in Replit environment
- Configured Vite to run on port 5000 with host 0.0.0.0
- Fixed import errors for EmptyReactTable component
- Updated base URL to "/" for Replit compatibility
- Configured deployment settings for autoscale
- **Connected frontend to external backend**: https://easyreserv-website-b-2-b-backen.replit.app/
- **Fixed Vite HMR for Replit**: Configured WebSocket to use wss protocol with REPLIT_DEV_DOMAIN
- **Improved HMR compatibility**: Added conditional logic for Replit vs local development
- **Authentication configured**: Backend JWT authentication working with /api/account/login and /api/account/me
- **Simplified admin panel structure**: 
  - Removed Services, Team, Jobs, Works sections from menu
  - Menu now shows only: Blog Management (create article + list) and Special Offer Form
  - Created Special Offer Form with 1-hour countdown timer, validation, backend integration
  - Form posts to `/api/forms/special-offer` and redirects to blog list on success
- **Default route updated**: Changed APP_DEFAULT_PATH to `/tables/blogs` (blog list is new landing page)
- **Multi-language Blog System (EN/RO/RU)** ✨:
  - **Reusable Components Created**:
    - `MultiLanguageTabs` - Language switcher (EN/RO/RU)
    - `GooglePreview` - Real-time Google SERP preview for SEO
    - `CharacterCounter` - Character counting with limits & progress bar
  - **33-Field Blog Article Structure**:
    - Global: id, publishingDate, label, titleImagePath, titleImageAltText (×3 languages)
    - Per-language (EN/RO/RU): blogTitle, blogIntro, 3× subheading (title+text), conclusion, metaDescription (max 160), metaKeywords
  - **Import/Export Workflow**:
    - Download templates: Excel (.xlsx), JSON (.json), Markdown (.md)
    - Import file → auto-populate all 33 fields instantly
    - ArticleImporter + TemplateDownloader components
    - Parsers: `blog-parsers.js`, `excel-template-generator.js`
  - **Form Consistency**:
    - Create form = Edit form (identical structure)
    - Both use `enableReinitialize: true` for auto-populate
    - Yup validation with max 160 chars for meta description
  - **SEO Optimization**:
    - Live Google SERP preview per language
    - Character counter prevents exceeding limits
    - Backward compatibility with legacy single-language fields

## Environment Setup
The project uses environment variables defined in `.env` file:
- `VITE_APP_BASE_NAME` - Base URL path (set to "/" for Replit)
- `VITE_APP_API_URL` - Backend API endpoint (currently: https://easyreserv-website-b-2-b-backen.replit.app/)
- Various API keys for Firebase, AWS, Auth0, Google Maps, etc.

## Replit-Specific Configuration
### Vite HMR (Hot Module Replacement)
The Vite config automatically detects Replit environment via `REPLIT_DEV_DOMAIN`:
- **In Replit**: Uses secure WebSocket (wss) on port 443
- **Local development**: Uses standard Vite HMR settings
- This ensures live reload works correctly in both environments

### External Backend Connection
Frontend connects to deployed backend at:
- URL: `https://easyreserv-website-b-2-b-backen.replit.app/`
- All API calls are routed through this endpoint
- CORS is enabled for cross-origin requests

### Authentication
Backend provides JWT-based authentication:
- **Login Endpoint**: `POST /api/account/login` (email, password)
- **User Profile**: `GET /api/account/me` (requires Bearer token)
- **Response Format**: `{ serviceToken: "JWT", user: {...} }`
- **Default Redirect**: After login → `/tables/works` (content management)

**Test Credentials:**
- Email: `admin@easyreserv.com`
- Password: `Admin123!`

## Running the Project
- Development: `npm start` (runs on port 5000)
- Build: `npm run build`
- Preview: `npm run preview`

## Deployment
The project is configured for autoscale deployment with:
- Build command: `npm run build`
- Run command: `npm run preview`
