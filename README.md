# Abinesh A S Portfolio

A modern React + Vite portfolio inspired by the provided purple-accent reference design.

## Setup

1. Install dependencies:
   `npm install`
2. Create your environment file from `.env.example`.
3. Run the app:
   `npm run dev`
4. Build for production:
   `npm run build`

## Assets

- Put the hospital token booking video at `src/assets/videos/hospital-token-booking.mp4`.
- Put the resume PDF at `src/assets/resume/abinesh-resume.pdf`.
- Replace placeholder image files in `src/assets/images/` as needed.

## Deployment

### Vercel

- Set the project root to this folder.
- Build command: `npm run build`
- Output directory: `dist`

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Use SPA routing so React Router routes work on refresh.
