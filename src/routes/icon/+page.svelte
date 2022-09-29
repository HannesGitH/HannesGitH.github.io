<script lang="ts">
    import Icon from "$lib/icon.svelte";
    import { tweened } from 'svelte/motion';

	const progress = tweened(0,{duration:1000});
</script>
<Icon animataionprogress={$progress} amplitude={1}/>
<button on:click="{() => progress.set(0)}">0</button>
<button on:click="{() => progress.set(.5)}">.5</button>
<button on:click="{() => progress.set(1)}">1</button>
<button on:click="{() => progress.set(2)}">2</button>
<button on:click="{() => progress.set(100)}">100</button>