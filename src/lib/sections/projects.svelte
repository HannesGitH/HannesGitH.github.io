<script lang="ts">
	import { scrollRef } from 'svelte-navbar';
	import refs from './refs';
	import { _ } from 'svelte-i18n';
	import CurvedDivider from '$lib/components/curvedDivider.svelte';
	//TODO: https://codepen.io/HannesGitH/pen/dyeQNQw (von education aus kommend schon)

	import projects from "$lib/data/projects";
	import Project from '$lib/components/projects/project.svelte';

</script>

<CurvedDivider/>
<div id="content" use:scrollRef={refs.projects}>
	<h1>{$_('projects.title')}</h1>

	<!-- TODO: localize: -->
	<p>The following is only a small selection, for a more complete picture check my <a href="https://github.com/HannesGitH">Github</a> and <a href="https://play.google.com/store/apps/developer?id=Hannepps">Play-Store entries.</a></p>

	<!-- TODO -->
	{#each projects as p}
		<Project projectData={p}/>
	{/each}

</div>
<div class="flipped"><CurvedDivider/></div>

<style lang="scss">
	* {
		padding: $std-margin;
	}
	#content {
		padding-top: $std-margin;
		@include full-bleed($bg-color: $surface);
		// margin:-10%;
		// background-color: $surface;
		// backdrop-filter: invert(1);
		// filter: invert(1);
	}
	.flipped {
		transform: rotate(180deg);
		padding-top: calc(4 * $std-margin);
		margin-bottom: -10px;
	}


	#content {
		--dot-color: #{$primary};
		padding: 2 * $std-margin;
		@include full-bleed($bg-color: $surface);
		// margin:-10%;
		background-color: $surface;
		// backdrop-filter: invert(1);
		filter: invert(1);
	}

</style>
