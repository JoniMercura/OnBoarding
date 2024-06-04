import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const CONFIGPANEL = {
	target: "http://config.localhost",
	changeOrigin: false,
	ws: true,
	secure: false,
};

export default defineConfig(() => {
	return {
		plugins: [react()],
		build: {
			outDir: "./build",
		},
		server: {
			proxy: {
				"/api": CONFIGPANEL,
				"/storage/uploads": CONFIGPANEL,
				"/dashboard": CONFIGPANEL,
				"/packages": CONFIGPANEL
			},
		},
	};
});
