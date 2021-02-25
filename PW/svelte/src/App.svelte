<script lang="ts">
	export let name: string;
	import PWBar from './pw.svelte'
	import {elapsed} from './store'
	import {color, seconds, security} from './pw_store'
	import { slide } from 'svelte/transition';

	let hasFootNote:Boolean = true;
</script>

<main 
	style="background-color: #{$color};"
>
	<h1>{name}</h1>
	<PWBar withAsterix={hasFootNote}/>
	{#if $elapsed>$seconds }<p mini transition:slide="{{ duration: 1000 }}" >(thats shorter than you've been here)</p> {/if}
</main>
{#if hasFootNote}
<p mini style="padding: 0 10em;">
	* if using a normal PC trying around 10000000000 passwords per second. On an online-service it would probably take like {$security.crack_times_display.online_no_throttling_10_per_second}

</p>
{/if}

<style>
	main {
		text-align: center;
		padding: 2em;
		margin: 1em ;
		color: white;
		border-radius: 2em;
		transition: background-color 0.8s ease;
	}
	p[mini]{
		font-size: 11px;
	}

	h1 {
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (max-width: 740px) {
		main {
			max-width: none;
		}
		h1 {
			font-size: 1.5em;
		}
	}
</style>