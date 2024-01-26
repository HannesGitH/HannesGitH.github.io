<script lang="ts">
	// import Button, { Label } from '@smui/button';
	import { createEventDispatcher } from 'svelte';
	import { scrollTo as sscrollTo } from 'svelte-scrolling-plus';

	const dispatch = createEventDispatcher();

	export let scrollTo: string | null = null;

	export let isCurrentlyActive: boolean = false;
	export let color: string = 'white';

	function onClick() {
		dispatch('click', {
			text: 'button clicked'
		});
	}
</script>

<div id="defs" style="--color: {color}" />

{#if scrollTo}
	<!-- remove on:click? -->
	<button
		use:sscrollTo={{
			ref: scrollTo,
			onStateChange: ({ active }) => {
				isCurrentlyActive = active;
			},
			duration: 1000
		}}
		class="  navElem {isCurrentlyActive ? 'active' : ''}
			mdc-button__ripple mdc-button--unelevated"
		on:click={onClick}><slot /></button
	>
{:else}
	<button
		class="  navElem {isCurrentlyActive ? 'active' : ''}
		mdc-button__ripple mdc-button--unelevated"
		on:click={onClick}><slot /></button
	>
{/if}

<style lang="scss">
	@use '@material/button/index' as mdc-button;
	@use 'sass:color';
	$secondary: var(--color);

	:global(.navElem) {
		@include mdc-button.container-fill-color($secondary);
		// @include mdc-button.ink-color($secondary);
		@include mdc-button.shape-radius(999px);
		@include mdc-button.outline-width(0, 1rem);
		// @include mdc-button.height(1rem);
		font-style: italic;
		transition: color 400ms, opacity 400ms, scale 400ms;

		z-index: 3;

		&:hover {
			opacity: 0.8;
			scale: 1.1;
		}
		&:active {
			opacity: 0.5;
		}

		& * {
			transition: color 400ms, opacity 400ms, scale 400ms;
		}

		// .active {
		// 	scale: 1.2;
		// 	color: red;
		// }
	}
</style>
