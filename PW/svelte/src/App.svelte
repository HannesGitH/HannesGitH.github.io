<script lang="ts">
	export let name: string;
	import PWBar from './pw.svelte'
	import {elapsed} from './store'
	import {color, seconds} from './pw_store'
</script>

<main style="background-color: #{$color};">
	<h1>{name}</h1>
	<PWBar/>
	<p>{$elapsed>$seconds? "thats shorter than you've been here" : ""}</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		color: white;
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