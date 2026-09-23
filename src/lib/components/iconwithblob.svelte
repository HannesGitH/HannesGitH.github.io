<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	import Blob from '$lib/components/blob.svelte';
	import { tweened } from 'svelte/motion';
	import { onMount } from 'svelte';
	export let color = '#c7f347';
    export let animationduration = 1000;
	let progress = tweened(0, { duration: animationduration });

    // runs in the browser only and stops once the component is gone
    let running = false;
    const loopi = (): void => {
        if (!running) return;
        progress.update((v) => ++v).then(loopi);
    };
    onMount(() => {
        running = true;
        loopi();
        return () => (running = false);
    });
</script>

<div id="wrapper">
    <div id="mainBlob">
        <Blob animationprogress={$progress} />
    </div>
    <div id="mainIcon">
        <Icon animationprogress={$progress} amplitude={0.1} sideColor={color} />
    </div>
</div>

<style>
	:global body {
		background-color: #000;
	}
    #mainBlob, #mainIcon {
        object-fit: contain;
        position: absolute;
        width: 100%;
        max-height: 100%;
    }
    #mainBlob {
        z-index: 1;
        aspect-ratio: 1;
    }
    #mainIcon {
        transform: scale(0.5);
        z-index: 2;
        margin:  auto auto;
    }

</style>
