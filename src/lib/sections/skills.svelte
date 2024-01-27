<script lang="ts">
		import { scrollRef, scrollTo } from '$lib/navbarindex'; //'svelte-navbar'; //FIXME: see page.svelte

	import refs from './refs';
	import { _ } from 'svelte-i18n';
    import skills from '$lib/data/skills';
    import Skill from '$lib/components/skill.svelte';

</script>

<div class="relative">
	<h1>{$_('skills.title')}</h1>
</div>
<div id="content" use:scrollRef={refs.skills}>
	<h1>{$_('skills.title')}</h1>
    <div id="skills">
        {#each skills as skill}
            <Skill {skill} />
        {/each}
    </div>
	<p id="theresmore">
		Of course this is also just a selection of tools, frameworks and languages I am quite familiar with and deemed worth mentioning. If you are interested in more niche technologies I have worked with, feel free to <strong class="link" use:scrollTo={refs.contact}>contact</strong> me. There are is also a lot of stuff i have touched on a few times that would need some refreshing, but I am always eager to learn new things.
	</p>
<div style="height: 2rem;"></div>

</div>
<div style="height: 2rem;"></div>

<style lang="scss">

	#theresmore {
		padding: $std-margin;
		margin: $std-margin;
	}

	
	* {
		padding: $std-margin;
	}

	.link {
		padding: 0;
		text-decoration: underline;
	}

    #skills {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        justify-content: stretch;
        justify-self: stretch;
		// & :global( > div ) {
		// 	filter: invert(1);
		// 	& :global( i.colored ) {
		// 		filter: invert(1);
		// 	}
		// }
    }
	.relative {
		position: relative;
		height: 0;
		width: 0;
		margin: 0;
		padding: 0;
	}
	h1 {
		z-index: 10;
		position: absolute;
		top: $std-margin;
		left: calc( 1.5 * $std-margin) ;
	}

	#content {
		padding-top: $std-margin;
		// @include full-bleed($bg-color: $surface);
		// margin:-10%;
		// background-color: $surface;
		backdrop-filter: blur(2px);
		// filter: invert(1);
		// background: gray;
		position: relative;
		z-index: 0;
		& h1 {
			z-index: 10;
			//hide
			opacity: 0;
			position: relative;
		}
	}
</style>
