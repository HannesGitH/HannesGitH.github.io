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
		{$_('skills.more-before')} <strong class="link" use:scrollTo={refs.contact}>{$_('skills.more-link')}</strong> {$_('skills.more-after')}
	</p>
<div style="height: 2rem;"></div>

</div>
<!-- the blur fades out in a few wavy steps instead of ending in a straight line -->
<div id="waveend">
	<div class="fade" id="fade1"></div>
	<div class="fade" id="fade2"></div>
</div>
<div style="height: 2rem;"></div>

<style lang="scss">

	// height of the wavy transition at the end of the section,
	// has to fit into the empty space below the last paragraph (7rem), otherwise the text gets blurred
	$wave-band: 5.5rem;
	@function wave-mask($viewbox-height, $wave) {
		@return url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 #{$viewbox-height}' preserveAspectRatio='none'><path d='M0 0L#{$wave}L1440 0Z'/></svg>");
	}
	$wave-a: wave-mask(100, '0 40C180 20 360 20 540 38S900 62 1080 48S1350 26 1440 36');
	$wave-b: wave-mask(150, '0 112C220 134 440 136 660 118S1000 96 1200 110S1400 132 1440 128');
	$wave-c: wave-mask(150, '0 136C160 148 380 150 600 140S940 124 1160 134S1380 148 1440 146');

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
		$mask: linear-gradient(#000, #000) top / 100% calc(100% - #{$wave-band} + 1px) no-repeat,
			$wave-a bottom / 100% #{$wave-band} no-repeat;
		-webkit-mask: $mask;
		mask: $mask;
		& h1 {
			z-index: 10;
			//hide
			opacity: 0;
			position: relative;
		}
	}

	#waveend {
		position: relative;
		height: 0;
		padding: 0;

		.fade {
			position: absolute;
			top: calc(-1 * $wave-band);
			left: 0;
			width: 100%;
			height: calc(1.5 * $wave-band);
			padding: 0;
			pointer-events: none;
			-webkit-mask: var(--wave) top / 100% 100% no-repeat;
			mask: var(--wave) top / 100% 100% no-repeat;
		}
		#fade1 {
			--wave: #{$wave-b};
			backdrop-filter: blur(1.2px);
		}
		#fade2 {
			--wave: #{$wave-c};
			backdrop-filter: blur(0.5px);
		}
	}
</style>
