<script lang="ts">
	export const color = '#a7c347';
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
				d="M-73.6978 920.009L1094.31 920.009C1149.02 920.009 1193.37 964.357 1193.37 1019.06L1193.37 1043.08C1193.37 1097.79 1149.02 1142.14 1094.31 1142.14L-73.6978 1142.14C-128.405 1142.14-172.753 1097.79-172.753 1043.08L-172.753 1019.06C-172.753 964.357-128.405 920.009-73.6978 920.009Z"
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
