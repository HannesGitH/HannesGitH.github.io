<script lang="ts">
	// import Button, { Label } from '@smui/button';
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function onClick() {
		dispatch('click', {
			text: 'button clicked'
		});
	}
</script>

<button class=" mdc-button mdc-button__ripple mdc-button--unelevated navElem" on:click={onClick}><slot></slot></button>

<style lang="scss">
	@use '@material/button/index' as mdc-button;
	@use 'sass:color';

	:global(.navElem) {
		@include mdc-button.container-fill-color($secondary);
		@include mdc-button.shape-radius(999px);
		@include mdc-button.ink-color($on-surface);
		@include mdc-button.outline-width(0, $std-margin);
		// @include mdc-button.height(1rem);
		font-style: italic;

		z-index: 3;

		&:hover {
			@include mdc-button.container-fill-color(color.scale($secondary, $lightness: -10%));
		}
		&:active {
			@include mdc-button.container-fill-color(color.scale($secondary, $lightness: -50%));
		}
	}
</style>
