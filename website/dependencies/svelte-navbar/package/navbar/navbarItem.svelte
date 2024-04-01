<script>// import Button, { Label } from '@smui/button';
import { createEventDispatcher } from 'svelte';
import { scrollTo as sscrollTo } from 'svelte-scrolling-plus';
const dispatch = createEventDispatcher();
export let scrollTo = null;
export let isCurrentlyActive = false;
export let color = 'white';
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

<style>:global(.navElem) {
  border-radius: 999px;
  padding: 0 1rem 0 1rem;
  border-width: 0;
  font-style: italic;
  transition: color 400ms, opacity 400ms, scale 400ms;
  z-index: 3;
}
:global(.navElem):not(:disabled) {
  background-color: var(--color);
}
:global(.navElem) .mdc-button__ripple {
  border-radius: 999px;
}
:global(.navElem).mdc-button--icon-trailing {
  padding: 0 12px 0 1rem;
}
:global(.navElem).mdc-button--icon-leading {
  padding: 0 1rem 0 12px;
}
:global(.navElem) .mdc-button__ripple {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-width: 0;
}
:global(.navElem) .mdc-button__touch {
  left: calc(-1 * 0);
  width: calc(100% + 2 * 0);
}
:global(.navElem):hover {
  opacity: 0.8;
  scale: 1.1;
}
:global(.navElem):active {
  opacity: 0.5;
}
:global(.navElem) * {
  transition: color 400ms, opacity 400ms, scale 400ms;
}</style>
