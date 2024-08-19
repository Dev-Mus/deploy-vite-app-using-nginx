import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Specify the development server port
    port: 3001,
  },
  // Base name of your app
  base: "/", // Replace this with the subdirectory path if needed
});
