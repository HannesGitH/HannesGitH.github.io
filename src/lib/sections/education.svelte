<script lang="ts">
		import { scrollRef } from '$lib/dependencies/navbar_cp'; //'svelte-navbar'; //FIXME: see page.svelte

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

	import education from '$lib/data/education';
	import { Glitch2 } from 'svelte-glitch';
</script>

<CurvedDivider />
<div id="content" use:scrollRef={refs.education}>
	<h1 id="title">
		{#if glitchy}
			<Glitch2 text={$_('education.title')} />
		{:else}
			{$_('education.title')}
		{/if}
	</h1>
	<Timeline position="right" style={'justify-content: start;'}>
		{#each education as option, i}
			<TimelineItem>
				<TimelineOppositeContent slot="opposite-content" style="flex: unset; width:fit-content;">
					<p>{option.year}</p>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot style={'background-color: var(--dot-color,#000);'} />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent style="flex:3">
					<h2 style="animation: smooth-sparkle 1s ease {i / education.length}s infinite;">
						{option.degree}{option.name ? ', ' + option.name : ''}
					</h2>
					<p id="gpa">{option.gpa}</p>
					<div>
						<p id="location">@ {option.place}</p>
						<p id="description">
							{option.description}
						</p>
						<br />
					</div>
				</TimelineContent>
			</TimelineItem>
		{/each}
	</Timeline>
</div>


<style lang="scss">
	@keyframes -global-smooth-sparkle {
		0% {
			background: linear-gradient(0.9turn, #{$on-surface}, #{$primary});
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
			// rotate: 0deg;
		}
		50% {
			background: linear-gradient(0.9turn, #{$on-surface}, #{$on-surface}, #{$primary});
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
			// rotate: 20deg;
		}
		100% {
			background: linear-gradient(0.9turn, #{$on-surface}, #{$primary});
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
			// rotate: 0deg;
		}
	}
	* {
		padding: $std-margin;
	}
	#content {
		--dot-color: #{$primary};
		padding: 2 * $std-margin;
		@include full-bleed($bg-color: $surface);
		// margin:-10%;
		background-color: $surface;
		// backdrop-filter: invert(1);
		filter: invert(1);

		h2 {
			// letter-spacing: 1.5px;
			display: inline-block;
			background-size: 100%;
			background: linear-gradient(0.9turn, $on-surface, $primary);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
			margin: 0;
			padding: 0;
		}

		.timeline-item {
			flex: unset !important;
		}

		p {
			margin: 0;
			padding: 0.5em 1cm 1.5em 0;
		}
		#location {
			// color: $primary;
			padding-bottom: $std-margin;
		}
		#gpa {
			padding: 0;
			display:inline;
			opacity: 0.5;
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
	}
</style>
