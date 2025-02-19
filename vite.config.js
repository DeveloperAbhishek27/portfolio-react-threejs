import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [react(), viteCompression()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});

// export default defineConfig({
//   plugins: [react(), viteCompression()],
//   server: {
//     hmr: {
//       clientPort: 5173, // HMR के लिए क्लाइंट पोर्ट सेट करें
//     },
//   },
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes("node_modules")) {
//             return "vendor";
//           }
//         },
//       },
//     },
//   },
// });
