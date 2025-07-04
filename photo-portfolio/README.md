# 📷 Photo-Portfolio

A modern, responsive photo-portfolio built with **Next.js 15**, **React 18**, and **Tailwind CSS**.  
Hot-reload in development (Docker Compose) and a slim, multi-stage production image ready for AWS (App Runner, ECS Fargate, etc.).

---

## ✨ Features

| Category         | Highlights |
|------------------|------------|
| ⚛️ **Frontend**  | • Next.js App Router<br>• Tailwind utility classes<br>• SEO-friendly metadata |
| 🖼️ **Gallery**   | • Masonry grid layout<br>• Lightbox modal with keyboard navigation |
| 🌐 **Performance** | • Built-in Image Optimisation (`next/image`)<br>• Automatic code-splitting |
| 🐳 **Containers** | • Multi-stage **Dockerfile**<br>• Dev image with hot reload (`next dev`)<br>• ~60 MB prod image (`next start`) |

---

## 🏗️ Tech Stack

* Next.js 15.3 & React 18  
* TypeScript  
* Tailwind CSS  
* ESLint (+ eslint-config-next)  
* Docker Desktop / Compose v2  

---

## 🚀 Getting Started

### 1  Clone & run locally

```bash
git clone https://github.com/<you>/photo-portfolio.git
cd photo-portfolio
npm install
npm run dev            # http://localhost:3000

2 Containerised dev (hot reload)
docker compose build   # builds the `dev` target once
docker compose up      # mounts source & runs `next dev`

Edit any file → browser refreshes automatically.

3 Production image
bash
Copy
Edit
docker compose build --no-cache   # builds slim prod image (default target)
docker compose up -d              # runs `npm start`
# └─ http://localhost:3000
Prod image contains only runtime deps and the compiled .next/ output.
🐑 Deployment (AWS App Runner example)
bash
Copy
Edit
# 1.  Create ECR repository (one-time)
aws ecr create-repository --repository-name photo-portfolio

# 2.  Build & push
IMAGE=<acct>.dkr.ecr.<region>.amazonaws.com/photo-portfolio:latest
docker build -t $IMAGE .
aws ecr get-login-password | docker login --username AWS --password-stdin $(dirname $IMAGE)
docker push $IMAGE
In the App Runner console → Create service → Source ECR → select the image tag.
ECS Fargate + ALB works the same if you need VPC control.

🗄️ Project Structure
csharp
Copy
Edit
/
├── app/                  # Next.js routes (App Router)
├── components/           # Reusable UI
├── public/               # Static assets
├── styles/               # Tailwind globals
├── Dockerfile
├── docker-compose.yml
├── docker-compose.override.yml
├── .dockerignore
└── README.md
