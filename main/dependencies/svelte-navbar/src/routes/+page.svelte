<script lang="ts">
	import Navbar, { NavbarItem } from "$lib";
	import { scrollTop } from "svelte-scrolling-plus";

    var progress:number;


    const fakedata = ['1', 'sec2', 'sec3', 'sec4'];

</script>


<Navbar
	scrollProgress={progress/100}
	rowSizeInPx={50}
	color="#a7c347"
>
	<NavbarItem on:click={() => scrollTop()}>Home</NavbarItem>
	{#each fakedata as d}
        <NavbarItem>{d}</NavbarItem>
    {/each}
</Navbar>

<input type="number" bind:value={progress}>