import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuración mínima de Vite: solo necesitamos el plugin de React.
// Bootstrap se carga vía CDN en index.html, no como dependencia de este bundler.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});
