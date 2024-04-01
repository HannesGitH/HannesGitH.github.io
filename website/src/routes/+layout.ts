export const prerender = true;

import type { LayoutLoad } from './$types';

import { browser } from '$app/environment';
import { getLocaleFromNavigator, init, register, waitLocale } from 'svelte-i18n';

register('en', () => import('$lib/locales/en.json'));
register('de', () => import('$lib/locales/de.json'));

if (browser) {
    init({
        fallbackLocale: "en",
        initialLocale: getLocaleFromNavigator(),
    });
}


export const load : LayoutLoad = ({ params }:any) => {
	if (!browser) {
		// init on server side only, need to get query from `page.query.get("lang")`
		init({
			fallbackLocale: "en",
			initialLocale: params.lang,
		});
	}
};