<script lang="ts">

    export let projId: string;
    export let i18nProjBase = 'projects.'

    import { _ } from 'svelte-i18n';

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

    $: base = i18nProjBase+projId

    $: durationHtml =  addHTML($_(base+'.duration'));
    $: complexityHtml = addHTML($_(base+'.complexity'));

    $: interpolatedDescription = $_(base+'.description', {values: {duration: durationHtml, complexity: complexityHtml}});
</script>

<p style="transform-style: preserve-3d;">{@html interpolatedDescription}</p>

<style lang="scss">
    p {
        --primary-color: #{$primary};
    }
</style>
