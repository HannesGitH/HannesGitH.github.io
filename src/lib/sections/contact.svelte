<script lang="ts">	
	import { scrollRef } from '$lib/navbarindex'; //'svelte-navbar'; //FIXME: see page.svelte
	import refs from './refs';
	import { _ } from 'svelte-i18n';
	import contacts from '$lib/data/contacts';
	import Contact from '$lib/components/contact.svelte';
</script>

<div id="content" use:scrollRef={refs.contact}>
	<h1 class="header" id="header">{$_('contact.title')}</h1>
	<!-- <p id="more_channels">More channels coming soon..</p> -->
	<div id="contacts">
		{#each contacts as contact}
			<Contact {contact} />
		{/each}
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
	
	#contacts {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		justify-content: stretch;
		justify-self: stretch;
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
