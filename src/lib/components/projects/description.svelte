<script lang="ts">
    export let madeInDuration: string;
    export let complexityDescription: string;
    export let toInterpolateDescription: string;
    //TODO: interpolate description by adding html for complexity and madiIn with style
    $: interpolatedDescription = toInterpolateDescription;
</script>

<p>{interpolatedDescription}</p>
