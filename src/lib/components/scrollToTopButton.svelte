<script lang="ts">
	import Fab, { Icon } from '@smui/fab';
	import { scrollTop } from 'svelte-navbar';
	export let showWhenScrolledPast = 1000;
	export let show: boolean | null = null;

	let scrollY = 0;
	$: exited = !(show ?? scrollY > showWhenScrolledPast);
</script>

<div class="flexy">
	<div class="wrapper">
		<Fab on:click={() => scrollTop()} {exited}>
			<Icon class="material-icons">arrow_upward</Icon>
		</Fab>
	</div>
</div>

<svelte:window bind:scrollY/>

<style lang="scss">
    .flexy {
		z-index: 10;
        position: fixed;
        bottom: 0;
        right: 0;
    }
    .wrapper {
        margin: $std-margin;
        color: $primary !important;
    }
</style>

