<script lang="ts">
	import { _ } from 'svelte-i18n';
    import Description from "./description.svelte";

    const madeInDuration = '3 days' //TODO: localize
    const complexityDescription = 'very small' //TODO: localize
    const toInterpolateDescription = "A {complexity} Progressive Web App made with Svelte, that evaluates how secure a given password is. Creating this or something similar takes me around {duration}."//TODO: localize
</script>

<Description {madeInDuration} {complexityDescription} {toInterpolateDescription} />
