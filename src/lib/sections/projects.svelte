<script lang="ts">
		import { scrollRef } from '$lib/dependencies/navbar_cp'; //'svelte-navbar'; //FIXME: see page.svelte

	import refs from './refs';
	import { _ } from 'svelte-i18n';
	import CurvedDivider from '$lib/components/curvedDivider.svelte';
	//TO-DO: https://codepen.io/HannesGitH/pen/dyeQNQw (von education aus kommend schon)

	import projects from "$lib/data/projects";
	import Project from '$lib/components/projects/project.svelte';

</script>

<div class="divider">
</div>
<!-- <CurvedDivider/> -->
<div id="content" use:scrollRef={refs.projects}>
	<h1>{$_('projects.title')}</h1>

	<!-- TODO: localize: -->
	<p>The following is only a small selection, for a more complete picture check my <a href="https://github.com/HannesGitH">Github</a> and <a href="https://play.google.com/store/apps/developer?id=Hannepps">Play-Store entries.</a></p>

	<div>
		<div id="projects">
			{#each projects as p}
				<Project projectData={p}/>
			{/each}
		</div>
	</div>

	<!-- FIXME: hätte den lieber ausserhalb von #content um full-bleed zu primary zu machen, siehe style -->
</div>
<!-- <section class="divider big"></section>  -->
<!-- <div class="flipped"><CurvedDivider/></div> -->

<style lang="scss">

	.divider {
		height: 10rem;

		@include full-bleed($bg-color: transparent);
		&.big {
			height: 20rem;
		}
	}
	* {
		padding: $std-margin;
	}
	#content {
		padding-top: $std-margin;
		// @include full-bleed($bg-color: $primary);
		// @include full-bleed($bg-color: transparent); //FIXME: hätte lieber den drüber, siehe oben
		// white-space: pre-wrap;
		overflow: visible;
		display: block;
		position: relative;
		z-index: 1;
		// border: 1px solid $primary;
		// border-right: none;
		// margin-right: 0;
		// width: 100%;
		// margin:-10%;
		// background-color: gray;
		backdrop-filter: blur(2px);
		// filter: invert(1);
		--dot-color: #{$primary};
		padding: 2 * $std-margin;
		// @include full-bleed($bg-color: $surface);
		// margin:-10%;
		// backdrop-filter: invert(1);
		// filter: invert(1);
		// background-color: $on-surface;
		// color: $surface;
			overflow-clip-margin: 200rem;
		// padding-bottom: 30rem;
		
		& #projects {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			justify-content: stretch;
			justify-self: stretch;
			overflow: visible;
			overflow-clip-margin: 200rem;
		} 
	}
	.flipped {
		transform: rotate(180deg);
		padding-top: calc(4 * $std-margin);
		margin-bottom: -10px;
		// filter: invert(1);
	}


</style>
