<script lang="ts">
	import { scrollRef } from 'svelte-navbar';
	import refs from '$lib/sections/refs';
	import { Glitch1, Glitch2 } from 'svelte-glitch';
</script>

<div use:scrollRef={refs.me}>
	<div id="my-name">

			<Glitch1 text="Hannes" delayMs={500} />
            <br />
			<Glitch2 text="Hattenbach" />

	</div>
</div>

<style lang="scss">
	#my-name {
		font-size: 96pt;
		letter-spacing: -7px;
        display: flex;
        align-items: center;
        justify-content: start;
        > * {
            margin: $std-margin;
            padding-left: $std-margin;
        }
	}
</style>
