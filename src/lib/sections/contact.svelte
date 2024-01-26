<script lang="ts">	
	import { scrollRef } from '$lib/navbarindex'; //'svelte-navbar'; //FIXME: see page.svelte
	import refs from './refs';
	import { _ } from 'svelte-i18n';
	import contacts from '$lib/data/contacts';
	import Contact from '$lib/components/contact.svelte';
	import { slide } from 'svelte/transition';


	let activeContactIdx = -1;
	$: active = activeContactIdx >= 0;
	$: activeContact = !active ? null : contacts[activeContactIdx];

	function handleHover(idx: number) {
		activeContactIdx = idx;
	}

</script>

<div id="content" use:scrollRef={refs.contact}>
	<h1 class="header" id="header">{$_('contact.title')}</h1>
	<!-- <p id="more_channels">More channels coming soon..</p> -->
	<div class="row">
		<div id="contacts">
			{#each contacts as contact, idx}
				<div 
				id="contact-wrapper"
					on:mouseenter={() => handleHover(idx)}
					on:mouseleave={() => handleHover(-1)}
				>
					<Contact {contact} />
				</div>
			{/each}
		</div>
		<div id="link-preview" class:active>
			{#if active}
				<a transition:slide href={activeContact?.link}> 
					<!-- <i class={activeContact?.iconClass}></i> -->{activeContact?.link}<i class="fa-solid fa fa-arrow-up-right-from-square"></i>
				</a>
			{/if}
		</div>
	</div>
	<h2 class="header"  id="impressum_header">{$_('impress.title')}</h2>
	<div id="impressum_body">
		<p><strong>Hannepps</strong> by:</p>
		<br>
		<p>Hannes Hattenbach</p>
		<p>Im Mühlenfelde 7, 14167 Berlin</p>
		<br>
		<p><a href="mailto:impressum@h-h.win">impressum@h-h.win</a></p>
		<br>
		<p>USt-Nr:  DE364767306</p>
		<br>
		<br>
	</div>
</div>

<style lang="scss">
	h1 , h2, #more_channels, #impressum_body, #content {
		padding: $std-margin;
	}
	#impressum_body{
		padding-top: 0;
		& a {
			color: aliceblue;
		}
	}

	#link-preview {
		position: relative;
		z-index: -1;
		pointer-events: none;
		padding: $std-margin;
		margin: auto calc(2 * $std-margin);
		background: $surface;
		transition: all 0.3s ease-in-out;
		border-radius: calc(3 * $std-margin);
		opacity: 0;
		transform: translateX(-20rem);
		&.active {
			opacity: 1;
			pointer-events: all;
			transform: translateX(0);
			// z-index: 1;
		}
		& a {
			color: aliceblue;
			// padding: $std-margin;
			& i {
				margin: 0 $std-margin;
			}
		}
	}
	
	#contacts , .row{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		justify-content: stretch;
		justify-self: stretch;
		position: relative;
		z-index: 0;
	}

	.header {
		display: inline-block;
		&#header{

			background: linear-gradient(0.1turn, $on-surface, $primary);
			background-size: 100%;
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
	#content {
		padding-top: $std-margin;
		@include full-bleed($bg-color: $surface);
		// margin:-10%;
		// background-color: $surface;
		// backdrop-filter: invert(1);
		// filter: invert(1);
	}

	br {
		font-size: xx-small;
	}
</style>
