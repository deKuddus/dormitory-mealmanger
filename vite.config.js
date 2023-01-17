import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resoucres/css/app.css", "resources/js/app.jsx"],
            refresh: true,
        }),
    ],
    esbuild: { loader: "jsx" },
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                ".js": "jsx",
                ".ts": "tsx",
            },
        },
    },
});
