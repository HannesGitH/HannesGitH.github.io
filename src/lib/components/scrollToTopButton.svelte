<script lang="ts">
	import Fab, { Icon } from '@smui/fab';
	import { scrollTop } from 'svelte-scrolling';
	export const showWhenScrolledPast = 200;
	export const show: boolean | null = null;

	let scrollY = 0;
	$: exited = !(show ?? scrollY > showWhenScrolledPast);
</script>

<div class="flexy">
	<div class="margins">
		<Fab color="primary" on:click={() => scrollTop()} {exited}>
			<Icon class="material-icons">arrow_upward</Icon>
		</Fab>
	</div>
</div>

<svelte:window bind:scrollY/>

<style>
    .flexy {
        position: fixed;
        bottom: 0;
        right: 0;
    }
    .margins {
        margin: 1rem;
    }
</style>

