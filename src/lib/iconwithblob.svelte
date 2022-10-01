<script lang="ts">
	import Icon from '$lib/icon.svelte';
	import Blob from '$lib/blob.svelte';
	import { tweened } from 'svelte/motion';
	export let color = '#c7f347';
    export let animationduration = 1000;
	let progress = tweened(0, { duration: animationduration });

    
    let loopi:any = () =>
    progress
    .update((v) => ++v)
    //   .set(1)
    //   .then(() => progress.set(0))
      .then(() => loopi());
  loopi();
</script>

<div id="wrapper ">
    <div id="mainBlob">
        <Blob animationprogress={$progress} />
    </div>
    <div id="mainIcon">
        <Icon animationprogress={$progress} amplitude={0.1} asymmetric sideColor={color} />
    </div>
</div>

<style>
	:global body {
		background-color: #000;
	}
    #wrapper {
        aspect-ratio: 1;
        position: relative;
        margin: 0 auto;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
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
