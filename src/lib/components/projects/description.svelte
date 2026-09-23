<script lang="ts">

    export let projId: string;
    export let i18nProjBase = 'projects.'

    import { _ } from 'svelte-i18n';
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    // the page is prerendered in english and svelte doesn't patch {@html} while hydrating,
    // so switch to the client's (possibly different) locale once mounted
    let mounted = false;
    onMount(() => (mounted = true));

    function addHTML(innerHtml: string) {
        return `
        <span style="
            // font-size: 1.1em;
            // font-weight: bold;
            transform: translateZ(3px);
            display: inline-block;
            text-shadow: 0 0 3px var(--primary-color);
            text-decoration: underline;
        ">
            ${innerHtml}
        </span>
    `;
    }

    $: base = i18nProjBase+projId

    $: durationHtml =  addHTML($_(base+'.duration'));
    $: complexityHtml = addHTML($_(base+'.complexity'));

    $: interpolatedDescription = $_(base+'.description', {values: {duration: durationHtml, complexity: complexityHtml}});
</script>

<p style="transform-style: preserve-3d;">{@html !browser || mounted ? interpolatedDescription : ''}</p>

<style lang="scss">
    p {
        --primary-color: #{$primary};
    }
</style>
