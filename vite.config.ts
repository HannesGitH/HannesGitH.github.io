import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type Plugin } from 'vite';
import { fileURLToPath } from 'url';

const sassPath = fileURLToPath(new URL('./src/theme/dark/', import.meta.url));
const svelteInternalShim = fileURLToPath(
	new URL('./src/lib/compat/svelte-internal.ts', import.meta.url)
);

// svelte-scrolling-plus (used by svelte-navbar) still imports svelte 3 internals
const svelteScrollingPlusCompat: Plugin = {
	name: 'svelte-scrolling-plus-compat',
	enforce: 'pre',
	resolveId(id, importer) {
		if (id === 'svelte/internal' && importer?.includes('svelte-scrolling-plus')) {
			return svelteInternalShim;
		}
	}
};

export default defineConfig({
	plugins: [svelteScrollingPlusCompat, sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use '${sassPath}smui-theme' as *;`,
				// @smui / @material still use deprecated sass syntax; only show warnings for our own code
				quietDeps: true
			}
		}
	},
	optimizeDeps: {
		include: ['svgpath'],
		exclude: ['svelte-scrolling-plus']
	},
	server: {
		fs: {
			allow: ['./dependencies/svelte-navbar/']
		}
	}
});
