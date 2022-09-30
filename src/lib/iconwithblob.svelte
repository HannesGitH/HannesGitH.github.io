<script lang="ts">
	import Icon from '$lib/icon.svelte';
	import Blob from '$lib/blob.svelte';
	import { tweened } from 'svelte/motion';
	export let color = '#c7f347';
    export let animationduration = 1000;
	let progress = tweened(0, { duration: animationduration });
    
    let loopi:any = () =>
    progress
      .set(1)
      .then(() => progress.set(0))
      .then(() => loopi());
  loopi();
</script>

<div id="wrapper">
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
        position: relative;
        margin: 0 auto;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #mainBlob, #mainIcon {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    #mainBlob {
        z-index: 1;
    }
    #mainIcon {
        object-fit: contain;
        z-index: 2;
        max-width: 30%;
        aspect-ratio: 1;
        margin:  auto auto;
    }

</style>
