<script lang="ts">
	import { scrollRef } from 'svelte-navbar';
	import refs from '$lib/sections/refs';
	import { Glitch1, Glitch2 } from 'svelte-glitch';
</script>

<div >
	<div id="my-name">
		<Glitch1 text="Hannes" />
		<!-- <br /> -->
		<Glitch2 text="Hattenbach" />
	</div>
</div>
<div use:scrollRef={refs.me}></div>

<style lang="scss">
	#my-name {
		font-size: 96pt;
		letter-spacing: -7px;

		> * {
			margin: $std-margin;
			padding-left: $std-margin;
		}
	}
</style>
