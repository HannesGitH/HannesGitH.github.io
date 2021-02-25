<script lang="ts">
	export let name: string;
	import PWBar from './pw.svelte'
	import {elapsed} from './store'
	import {color, seconds, security} from './pw_store'

	let hasFootNote:Boolean = true;
</script>

<main style="background-color: #{$color};">
	<h1>{name}</h1>
	<PWBar withAsterix={hasFootNote}/>
	<p mini>{$elapsed>$seconds? "(thats shorter than you've been here)" : ""}</p>
</main>
{#if hasFootNote}
<p mini style="padding: 0 10em;">
	* if using a normal PC trying around 10000000000 passwords per Second, on an online Service it would probably take like {$security.crack_times_display.online_no_throttling_10_per_second}

</p>
{/if}

<style>
	main {
		text-align: center;
		padding: 2em;
		margin: 1em ;
		color: white;
		border-radius: 2em;
	}
	p[mini]{
		font-size: 11px;
	}

	h1 {
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>