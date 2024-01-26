<script lang="ts">

    export let i18nBaseName: string;

    import { _ } from 'svelte-i18n';
    //TODO: interpolate description by adding html for complexity and madiIn with style

    function addHTML(innerHtml: string) {
        return `
        <div style="
            // font-size: 1.1em;
            // font-weight: bold;
            transform: translateZ(3px);
            display: inline-block;
            text-shadow: 0 0 3px var(--primary-color);
            text-decoration: underline;
        ">
            ${innerHtml}
        </div>
    `;
    }

    $: durationHtml =  addHTML($_(i18nBaseName+'.duration'));
    $: complexityHtml = addHTML($_(i18nBaseName+'.complexity'));

    $: interpolatedDescription = $_(i18nBaseName + '.description', {values: {duration: durationHtml, complexity: complexityHtml}});
</script>

<p style="transform-style: preserve-3d;">{@html interpolatedDescription}</p>

<style lang="scss">
    p {
        --primary-color: #{$primary};
    }
</style>
