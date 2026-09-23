import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-auto';//use this when it gets interactive
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// scss prependData lives in vite.config.ts (css.preprocessorOptions)
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter()
	}
};

export default config;
