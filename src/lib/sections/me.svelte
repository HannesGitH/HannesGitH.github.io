<script lang="ts">
	import { scrollRef } from 'svelte-navbar';
	import refs from '$lib/sections/refs';
	import { Glitch1, Glitch2 } from 'svelte-glitch';
	import { _ } from 'svelte-i18n';
</script>

<div >
	<div id="my-name">
		<Glitch1 text={$_('me.surname')} />
		<!-- <br /> -->
		<Glitch2 text={$_('me.name')} />
	</div>
</div>

<div id="description">
	<p>{$_('me.description')}</p>
</div>

<div use:scrollRef={refs.me}></div>

<div id="placeholder">
	<!-- yap, hier soll noch bissl was hin -->
</div>

<style lang="scss">
	#my-name {
		font-size: 96pt;
		letter-spacing: -7px;

		// > * {
		// 	margin: $std-margin;
		// 	padding-left: $std-margin;
		// }
	}

	#description {
		font-size: 1.5em;
		max-width: calc(96pt * 9);
	}

	#placeholder{
		height: 20vh;
	}

	* {
		padding: $std-margin;
	}
</style>
