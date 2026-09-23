<script lang="ts">
		import { scrollRef, scrollTo } from '$lib/navbarindex'; //'svelte-navbar'; //FIXME: see page.svelte

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
	let hoveredPdf : string | null | undefined;
	let showPdfPreview = false;
	let pdfPreview : HTMLDivElement;

	const mouseover = (url : string | undefined) => {
		hoveredPdf = url + "#scrollbar=0&toolbar=0&navpanes=0";
		setTimeout(() => {
			showPdfPreview = true;
		}, 100);
	}
	const mouseleave = () => {
		showPdfPreview = false;
		setTimeout(() => {
			hoveredPdf = null;
		}, 500);
	}

</script>


<div id="divider">
	<!-- <CurvedDivider /> -->
</div>
<div id="pdfpreview" bind:this={pdfPreview} class:active={showPdfPreview}>
	{#if hoveredPdf}
		<!-- <embed src={hoveredPdf} type="application/pdf" /> -->
		<object data={hoveredPdf} type="application/pdf" title="PDF preview">
			<p>It appears you don't have a PDF plugin for this browser. No biggie... you can <a href={hoveredPdf}>click here to download the PDF file.</a></p>
		</object>
	{/if}
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
		{#each experience as entry, i}
			<TimelineItem>
				<TimelineOppositeContent slot="opposite-content" style="flex: unset; width:fit-content;">
					<p>{entry.start}</p>
					<p>{entry.year}</p>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot style={'background-color: var(--dot-color,#000);'} />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent style="flex:3">
					<div id="header" style="display: flex;">
						<h2 style="animation: smooth-sparkle 1s ease {i / experience.length}s infinite;">
							{entry.name}
						</h2>
						<div class="pdfbuttonrow" style="">
							{#if entry.pdfFileUrl}
								<!-- svelte-ignore a11y-mouse-events-have-key-events -->
								<a href={entry.pdfFileUrl}
									on:mouseover={() => mouseover(entry.pdfFileUrl)}
									on:mouseleave={() => mouseleave()}
								>
									<i id="icon" class="fa fas fa-solid fa-file-pdf" class:colored={true}></i>
									{$_('certificate')}
								</a>
							{/if}
						</div>
					</div>
					<div>
						<p id="location">@ {entry.place}</p>
						<div id="description">
							{#each entry.description as desciptionItem}
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
				</div>
			</TimelineContent>
		</TimelineItem>
	</Timeline>
</div>
<!-- blurred background below the wave, painted before it so the wave itself stays sharp -->
<div id="waveblurwrapper">
	<div id="waveblur"></div>
</div>
<div class="flipped">
	<CurvedDivider blurred />
</div>


<style lang="scss">
	@use 'sass:color';
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


	#pdfpreview {
		position: fixed;
		// align-self: center;
		z-index: 10000;
		top:10vh;
		right: 0;
		// margin: auto;
		width: 30vw;
		height: 80vh;
		// background-color: rgba(0, 0, 0, 0.5);
		// display: flex;
		// justify-content: center;
		// align-items: center;
		justify-self: stretch;
		justify-content: stretch;
		align-items: stretch;
		z-index: 1000;
		transition: transform 1000ms, opacity 400ms;
			display: flex;
		// display: none;
		opacity: 0;
		pointer-events: none;
		transform: perspective(2000px) translateX(100%) rotateY(-100deg) ;
		&.active {
			transform: perspective(2000px) rotateY(-20deg);
			opacity: 1;
		}
		object {
			width: 100%;
			height: 100%;
			border-radius: 2rem;
		}
	}

	.pdfbuttonrow > a {
		background-color: color.adjust($color: $primary, $alpha: -.7);
		color: #000;
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
			background-color: white;
			color: $primary;
		}
		text-decoration: none;
		* {
			// margin: 0;
			padding: 0;
			// scale: .2;
		}
	}

	#divider {
		// @include full-bleed($bg-color: white);
		// height: 20em;
		background: white;
		// filter: invert(1);
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

		// no font dependent baseline gap below the divider, #waveblur relies on its exact position
		& :global(#visual) {
			vertical-align: top;
		}
	}

	#waveblurwrapper {
		position: relative;
		height: 0;
		padding: 0;
	}
	// spans from the top of the (opaque) white wave down to where the projects section starts,
	// continuing its blurred background up underneath the wave
	#waveblur {
		position: absolute;
		top: -1rem;
		left: 0;
		width: 100%;
		height: 0;
		padding: 0;
		// + 2px overlap with the projects section, otherwise a subpixel gap can show up
		padding-top: calc(30% + 44px + 2px);
		backdrop-filter: blur(2px);
		pointer-events: none;
	}

</style>
