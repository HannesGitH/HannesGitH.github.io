<script lang="ts">
	import { scrollRef, scrollTo } from 'svelte-navbar';
	import refs from './refs';
	import CurvedDivider from '$lib/components/curvedDivider.svelte';
	import { _ } from 'svelte-i18n';
	//TO-DO: https://codepen.io/HannesGitH/pen/dyeQNQw (kann bis experience rüberwachsen)
	//etwas entspannter https://codyhouse.co/gem/vertical-timeline/

	export let glitchy: boolean = false;

	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';

	import experience from '$lib/data/experience';
	import { Glitch2 } from 'svelte-glitch';
</script>

<div id="divider">
	<!-- <CurvedDivider /> -->
</div>


<div id="content" use:scrollRef={refs.experience}>
	<h1 id="title">
		{#if glitchy}
			<Glitch2 text={$_('experience.title')} />
		{:else}
			{$_('experience.title')}
		{/if}
	</h1>
	<Timeline position="right" style={'justify-content: start;'}>
		{#each experience as option, i}
			<TimelineItem>
				<TimelineOppositeContent slot="opposite-content" style="flex: unset; width:fit-content;">
					<p>{option.start}</p>
					<p>{option.year}</p>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot style={'background-color: var(--dot-color,#000);'} />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent style="flex:3">
					<h2 style="animation: smooth-sparkle 1s ease {i / experience.length}s infinite;">
						{option.name}
					</h2>
					<div>
						<p id="location">@ {option.place}</p>
						<div id="description">
							{#each option.description as desciptionItem}
								<p>{desciptionItem}</p>
							{/each}
						</div>
						<br />
					</div>
				</TimelineContent>
			</TimelineItem>
		{/each}
		<TimelineItem>
			<TimelineOppositeContent slot="opposite-content" style="flex: unset; width:fit-content;">
				<p>{'soon'}</p>
			</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineDot style={'background-color: var(--dot-color,#000);'} />
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent style="flex:3">
				<h2 style="animation: smooth-sparkle 1s ease {experience.length}s infinite;">
					{'YOU?'}
				</h2>
				<div>
					<p id="description">
						{'I am always looking for new opportunities. If you have a position that you think I would be a good fit for, please feel free to'} <strong use:scrollTo={refs.contact}>contact</strong> {'me.'}
					</p>
					<br />
			</TimelineContent>
		</TimelineItem>
	</Timeline>
</div>
<div class="flipped">
	<CurvedDivider />
</div>

<div style="height:10em"></div>


<style lang="scss">
	@keyframes -global-smooth-sparkle {
		0% {
			background-size: 300% 250%;
			// rotate: 0deg;
		}
		50% {
			background-size: 100% 250%;
			// rotate: 20deg;
		}
		100% {
			background-size: 300% 250%;
			// rotate: 0deg;
		}
	}
	* {
		padding: $std-margin;
	}

	#divider {
		// @include full-bleed($bg-color: white);
		// height: 20em;
		background: white;
		// filter: invert(1);
	}

	#topPadder {
		height: 0em;
		background: $surface;
		filter: invert(1);
	}
	#content {
		--dot-color: #{$primary};
		padding: calc( 2 * $std-margin) ;
		@include full-bleed($bg-color: $on-surface);
		// backdrop-filter: blur(2px);
		background: white;
		// filter: invert(1);
		color: black;
		
		strong{
			font-style: italic;
		}

		h2 {
			// letter-spacing: 1.5px;
			display: inline-block;
			background-size: 100%;
			background: linear-gradient(0.9turn, black, $primary);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
			margin: 0;
			padding: 0;
		}


		p {
			margin: 0;
			padding: 0.5em 1cm 1.5em 0;
		}
		#location {
			// color: $primary;
			padding-bottom: $std-margin;
		}

		#description {
			opacity: 0.5;
			font-weight: 300;
			font-size: smaller;
		}

		div{
			padding: 0;
		}

		:global(.timeline-opposite-content > p) {
			padding: 0;
			letter-spacing: 1.5px;
			margin: 0;
			// color: grey;
		}
	}

	.flipped {
		transform: rotate(180deg);
		padding-top: calc(4 * $std-margin);
		margin-bottom: -10px;
		// filter: invert(1);
	}

</style>
