<script lang="ts">
	import { onMount } from "svelte";
	import { interpolateSequence } from 'flubber2';

	export const color = '#a7c347';
    let paths = {
        left: "M-107.884 1120.17L-105.799-47.8354C-105.701-102.542-61.2735-146.811-6.56687-146.714L17.4523-146.671C72.159-146.573 116.428-102.145 116.331-47.4388L114.245 1120.57C114.148 1175.27 69.7198 1219.54 15.0132 1219.45L-9.00604 1219.4C-63.7127 1219.3-107.982 1174.88-107.884 1120.17Z",
        bottom: "M-73.6978 920.009L1094.31 920.009C1149.02 920.009 1193.37 964.357 1193.37 1019.06L1193.37 1043.08C1193.37 1097.79 1149.02 1142.14 1094.31 1142.14L-73.6978 1142.14C-128.405 1142.14-172.753 1097.79-172.753 1043.08L-172.753 1019.06C-172.753 964.357-128.405 920.009-73.6978 920.009Z" 
    }
    export let scrollProgress = 0;
    let interpolator = (p:number)=>paths.bottom;
    onMount(async () => {
		const pathls = [paths.bottom, paths.left];
		interpolator = await interpolateSequence(pathls,{loop:false});
	});
</script>

<div id="elemts-row">
	<slot>
		<p>Lorem ipsum dolor sit amet.</p>
	</slot>
</div>
<div id="wrapper">
	<svg
		height="100%"
		stroke-miterlimit="10"
		style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"
		version="1.1"
		viewBox="0 0 1024 1024"
		preserveAspectRatio="none"
		width="100%"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<defs />
		{#if color}
			<rect style="--side-color: {color} " />{/if}
		<clipPath id="ArtboardFrame">
			<rect height="100%" width="100%" x="0" y="0" />
		</clipPath>
		<g clip-path="url(#ArtboardFrame)" id="Layer-1">
			<path
				id="main"
				d={interpolator(scrollProgress)}
				fill-rule="nonzero"
				opacity="1"
				stroke="none"
			/>
		</g>
	</svg>
</div>

<style lang="scss">
	//this depends on the actual svg used for the bottom bar, it has a viewBoxHeight of 1024 and the actual content starts at 920
	$svgVBHeight: 1024;
	$svgContentStart: 920;
	$barheight: calc(100% * (($svgVBHeight - $svgContentStart) / $svgVBHeight));

	@mixin bottom {
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
	}
	#wrapper {
		@include bottom;
		height: 100%;
	}
	#elemts-row {
		@include bottom;
		height: $barheight;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		// background-color: #fff;
		z-index: 1;
	}
	#main {
		// @include smui;
		fill: $primary;
	}
</style>
