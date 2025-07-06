# 📷 Photo Portfolio

A modern, responsive photography portfolio built with **Next.js 15 App Router**, **React 18**, **TypeScript**, and **Tailwind CSS**.  
Features a stunning hero section, genre-based photo browsing, and interactive event carousels.

---

## ✨ Features

| Category         | Highlights |
|------------------|------------|
| ⚛️ **Frontend**  | • Next.js 15 App Router<br>• TypeScript throughout<br>• Tailwind CSS utility classes<br>• SEO-friendly metadata |
| 🖼️ **Photography** | • Hero section with "Capturing Moments"<br>• Genre-based photo browsing (6 categories)<br>• Responsive gallery with hover effects |
| 🎠 **Interactive** | • Swiper.js carousel for events<br>• Smooth hover & focus transitions<br>• Mobile-first responsive design |
| 🌐 **Performance** | • Built-in Image Optimization (`next/image`)<br>• Automatic code-splitting<br>• Optimized for Core Web Vitals |

---

## 🎨 Photography Genres

- **Landscape** - Nature and scenic photography
- **Portrait** - People and character photography  
- **Wildlife** - Animal and nature photography
- **Street** - Urban and candid photography
- **Astro** - Astrophotography and night sky
- **Events** - Weddings, celebrations, and special occasions

---

## 🏗️ Tech Stack

* **Next.js 15.3** with App Router & React 18  
* **TypeScript** for type safety
* **Tailwind CSS** for styling  
* **Swiper.js** for carousels
* **ESLint** (+ eslint-config-next)  
* **PostCSS** & **Autoprefixer**  

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/<your-username>/photo-portfolio.git
cd photo-portfolio
npm install
```

### 2. Development Server

```bash
npm run dev            # http://localhost:3000
```

The development server includes:
- Hot reload for instant feedback
- TypeScript compilation
- Tailwind CSS processing
- Automatic image optimization

### 3. Project Structure

```
src/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page with hero & genres
│   └── gallery/
│       └── page.tsx       # Photo gallery page
├── components/            # Reusable components
│   └── EventsByGenre.tsx  # Swiper carousel component
├── styles/
│   └── globals.css        # Tailwind directives & global styles
public/
├── assets/                # Static images (TODO: add your photos)
package.json
tailwind.config.js         # Tailwind configuration
next.config.js             # Next.js configuration
```

---

## 🎯 Key Pages & Components

### Home Page (`/`)
- **Hero Section**: Full-width background with "Capturing Moments" title
- **Genres Grid**: 6 photography categories with hover effects  
- **Events Carousel**: Swiper.js component showing upcoming events

### Gallery Page (`/gallery`)
- **Photo Grid**: Responsive masonry-style layout
- **Genre Filtering**: Browse by photography style
- **Hover Effects**: Smooth transitions and overlays

### EventsByGenre Component
- **Dynamic Content**: Shows events based on genre slug
- **Carousel Navigation**: Swiper.js with arrows & dots
- **Responsive**: 1→2→3 slides across breakpoints

---

## 🎨 Customization

### Adding Your Photos

1. **Replace placeholder images** in the following locations:
   ```typescript
   // src/app/page.tsx - Hero background
   src="https://picsum.photos/1920/1080?random=7" // TODO: Replace

   // src/app/page.tsx - Genre thumbnails  
   thumbnail: 'https://picsum.photos/400/300?random=1' // TODO: Replace

   // src/components/EventsByGenre.tsx - Event images
   image: 'https://picsum.photos/400/300?random=10' // TODO: Replace
   ```

2. **Update image domains** in `next.config.js`:
   ```javascript
   images: {
     remotePatterns: [
       {
         protocol: 'https',
         hostname: 'your-image-cdn.com',
       },
     ],
   }
   ```

### Styling with Tailwind

All styles use Tailwind CSS classes. Key design features:
- **Mobile-first**: `grid-cols-2 md:grid-cols-3`
- **Hover effects**: `hover:scale-105 transition-transform`
- **Focus states**: `focus:ring-4 focus:ring-blue-500`
- **Responsive spacing**: `px-4 sm:px-6 lg:px-8`

---

## 🔮 Future Enhancements

- [ ] **CMS Integration**: Connect to Contentful/Sanity for easy photo management
- [ ] **Search & Filtering**: Advanced gallery filtering by date, location, etc.
- [ ] **Contact Form**: Client inquiry form with email integration  
- [ ] **Blog Section**: Photography tips and behind-the-scenes content
- [ ] **Performance**: Implement next/image blur placeholders
- [ ] **Analytics**: Add Google Analytics or similar tracking

---

## 🐳 Containerized Development

### 2. Docker Development (Hot Reload)

```bash
docker compose build   # builds the dev target
docker compose up      # mounts source & runs next dev
```

### 3. Production Build

```bash
docker compose build --no-cache   # builds production image  
docker compose up -d              # runs npm start
# └─ http://localhost:3000
```

---

## 🚀 Deployment

### AWS App Runner Example

```bash
# 1. Create ECR repository (one-time)
aws ecr create-repository --repository-name photo-portfolio

# 2. Build & push
IMAGE=<account>.dkr.ecr.<region>.amazonaws.com/photo-portfolio:latest
docker build -t $IMAGE .
aws ecr get-login-password | docker login --username AWS --password-stdin $(dirname $IMAGE)
docker push $IMAGE
```

In the App Runner console → Create service → Source ECR → select the image tag.  
ECS Fargate + ALB works the same if you need VPC control.

### Vercel Deployment (Recommended)

```bash
npm install -g vercel
vercel --prod
```

Next.js + Vercel provides optimal performance with:
- Automatic image optimization
- Edge functions for dynamic content
- Built-in CDN and caching

---

## 📄 License

MIT License - feel free to use this project for your own photography portfolio!

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**Built with ❤️ for photographers who want to showcase their work beautifully.**
