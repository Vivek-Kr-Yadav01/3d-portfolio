# 🌌 3D Interactive Portfolio — Vivek Kumar Yadav

An immersive, bright-themed interactive 3D portfolio website built with **React**, **Three.js**, **React Three Fiber (R3F)**, and **Tailwind CSS**.

🔗 **Live Demo**: [https://Vivek-Kr-Yadav01.github.io/3d-portfolio/](https://Vivek-Kr-Yadav01.github.io/3d-portfolio/)

---

## 🎨 Theme & Experience

The site features a bright, clean, slate-white visual aesthetic combining standard responsive web sections with a WebGL background layer. 
As the user scrolls through the portfolio, the background camera dynamically rotates and moves, translating the user's position relative to floating 3D geometric shapes and soft pastel sky particles.

---

## 💻 Tech Stack

- **Framework**: React 19 + Vite 6
- **3D Graphics**: Three.js + React Three Fiber
- **3D Helpers**: `@react-three/drei`
- **Icons**: `react-icons`
- **Hosting**: GitHub Pages via GitHub Actions

---

## 📂 Project Structure

```
src/
├── App.jsx                           # Main layout & scroll tracking
├── main.jsx                          # React entry point
├── index.css                         # Bright theme & card layout styles
├── data/
│   └── portfolio.js                  # Centralized bio, skills, & project info
└── components/
    ├── canvas/
    │   ├── Scene.jsx                 # WebGL lighting & canvas layout
    │   ├── FloatingGeometry.jsx      # Soft-colored pastel geometries
    │   └── ParticleField.jsx         # Lavender & blue background particles
    ├── sections/
    │   ├── Hero.jsx                  # Header, title, and action buttons
    │   ├── About.jsx                 # Bio, stats, and key strengths
    │   ├── Skills.jsx                # Technical skills, soft skills, tools
    │   ├── Projects.jsx              # Scroll-activated project cards
    │   └── Contact.jsx               # Quick connections (GitHub, LinkedIn)
    └── ui/
        └── Navbar.jsx                # Navigation with active state scroll tracking
```

---

## 🛠️ Local Development

### 1. Clone the repository
```bash
git clone https://github.com/Vivek-Kr-Yadav01/3d-portfolio.git
cd 3d-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

---

## 🚀 How to Publish to GitHub Pages

This project is pre-configured to build and deploy automatically using **GitHub Actions**.

1. Create a new repository named **`3d-portfolio`** on your GitHub account (`Vivek-Kr-Yadav01`).
2. Push this local directory to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 3D Bright-Themed Portfolio"
   git branch -M main
   git remote add origin https://github.com/Vivek-Kr-Yadav01/3d-portfolio.git
   git push -u origin main
   ```
3. Go to your repository settings on GitHub:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The deployment pipeline will trigger automatically on your commit and publish the site.
