import { sveltekit } from '@sveltejs/kit/vite';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [viteCommonjs(),sveltekit(), ],
	optimizeDeps: {
		include: ['svgpath']
	  },
	// ssr: {
	// 	noExternal: Object.keys(pkg.dependencies || {})
	// },
	
};

export default config;
