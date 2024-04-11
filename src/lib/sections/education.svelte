<script lang="ts">
		import { scrollRef } from '$lib/navbarindex'; //'svelte-navbar'; //FIXME: see page.svelte

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
		{#each education as entry, i}
			<TimelineItem>
				<TimelineOppositeContent slot="opposite-content" style="flex: unset; width:fit-content;">
					<p>{entry.year}</p>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot style={'background-color: var(--dot-color,#000);'} />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent style="flex:3">
					<div id="header">
						<h2 style="animation: smooth-sparkle 1s ease {i / education.length}s infinite;">
							{entry.degree}{entry.name ? ', ' + entry.name : ''}
						</h2>
						<p id="gpa">{entry.gpa}</p>
						<div class="pdfbuttonrow" style="">
							{#if entry.degreePdfFileUrl}
								<a href={entry.degreePdfFileUrl}>
									<i id="icon" class="fa fas fa-solid fa-file-pdf" class:colored={true} />
									{$_('certificate')}
								</a>
							{/if}
							{#if entry.thesisPdfFileUrl}
								<a href={entry.thesisPdfFileUrl}>
									<i id="icon" class="fa fas fa-solid fa-file-pdf" class:colored={true} />
									{$_('thesis')}
								</a>
							{/if}
						</div>
					</div>
					<div>
						<p id="location">@ {entry.place}</p>
						<p id="description">
							{entry.description}
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

	#header {
		display: flex;
		align-items: center;
		> * {
			margin: 1rem;
		}
	}

	.pdfbuttonrow > a {
		background-color: adjust-color($color: $primary, $alpha: -.7);
		color: #fff;
		padding: 0.5rem 1.5rem !important;
		margin-left: 1rem;
		text-align: center;
		line-height: 2rem;
		font-size: small;
		z-index: 100;
		// margin: auto;
		border-radius: 20rem;
		cursor: pointer;
		transition: background-color 400ms, color 400ms;
		&:hover {
			background-color: black;
			color: $primary;
		}
		text-decoration: none;
		* {
			// margin: 0;
			padding: 0;
			// scale: .2;
		}
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
			padding: 0 .5rem ;
			padding-right: 0;
			// display:inline;
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
