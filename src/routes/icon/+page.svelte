<script lang="ts">
	import Icon from '$lib/icon.svelte';
    import Blob from '$lib/blob.svelte';
	import { tweened } from 'svelte/motion';
	export let color = '#c7f347';
	const progress = tweened(0, { duration: 1000 });
</script>

<Icon animationprogress={$progress} amplitude={0.1} asymmetric sideColor={color}/>
<Blob animationprogress={$progress} />
<button on:click={() => progress.set(-0.5)}>-.5</button>
<button on:click={() => progress.set(0)}>0</button>
<button on:click={() => progress.set(0.5)}>.5</button>
<button on:click={() => progress.set(1)}>1</button>
<button on:click={() => progress.set(2)}>2</button>
<button on:click={() => progress.set(100)}>100</button>

<style>
    :global body {
        background-color: #000;
    }
</style>