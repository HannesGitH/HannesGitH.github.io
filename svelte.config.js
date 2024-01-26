import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-auto';//use this when it gets interactive
import preprocess from 'svelte-preprocess';
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const filePath = dirname(fileURLToPath(import.meta.url))
const sassPath = `${filePath}/src/theme/dark/`

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: `@use '${sassPath}smui-theme' as *;`
		}
	}),

	kit: {
		adapter: adapter(),
	}
};

export default config;
