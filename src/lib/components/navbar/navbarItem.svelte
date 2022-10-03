<script lang="ts">
	import Button, { Label } from '@smui/button';
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function onClick() {
		dispatch('click', {
			text: 'button clicked'
		});
	}
</script>

<Button class="navElem"  color="secondary" on:click={onClick}><Label><slot></slot></Label></Button>

<style lang="scss">
	@use '@material/button/index' as mdc-button;

	:global(.navElem) {
		@include mdc-button.shape-radius(999px);
		background-color: $on-surface;
		font-style: italic;
		color: red;
		z-index: 3;
	}
</style>
