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
	server: {
		fs: {
		  allow: ['./dependencies/svelte-navbar/package/'],
		},
	  },

	  build: {
		rollupOptions: {
		//   external: ['svelte-navbar', '../../dependencies/svelte-navbar/package'],
		},
	  },		
	
};

export default config;
