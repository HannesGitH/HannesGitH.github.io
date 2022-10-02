<script lang="ts">
    export const color = '#a7c347';
</script>

<div id="wrapper">
	<svg
		height="100%"
		stroke-miterlimit="10"
		style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"
		version="1.1"
		viewBox="0 0 1024 1024"
		width="100%"
		xml:space="preserve"
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
				d="M-2.80431 832.639C149.28 967.343 546.309 912.255 663.523 912.658C780.315 913.06 908.14 926.341 942.73 1023.43C977.32 1120.52-3.0222 1026.48-3.0222 1026.48C-3.0222 1026.48-3.4469 832.07-2.80431 832.639Z"
				fill-rule="nonzero"
				opacity="1"
				stroke="none"
			/>
		</g>
	</svg>
</div>

<style lang="scss">
    #wrapper {
        position: fixed;
        bottom: -10px;
        left:0;
        width: 100%;
    }
    #main {
        // @include smui;
        fill: theme.$primary;
    }
</style>
