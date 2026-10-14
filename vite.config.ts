import { defineConfig } from 'vite';

// Relative assets support both a custom domain and a GitHub Pages repository path.
// Override with `npm run build -- --base=/portfolioHub/` when an explicit path is needed.
export default defineConfig({ base: './' });
