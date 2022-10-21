<script lang="ts">
	import { scrollRef } from 'svelte-navbar';
	import refs from './refs';
	import { _ } from 'svelte-i18n';
	import contacts from '$lib/data/contacts';
	import Contact from '$lib/components/contact.svelte';
</script>

<div id="content" use:scrollRef={refs.contact}>
	<h1 id="header">{$_('contact.title')}</h1>
	<p>More channels coming soon..</p>
	<div id="contacts">
		{#each contacts as contact}
			<Contact {contact} />
		{/each}
	</div>
</div>

<style lang="scss">
	* {
		padding: $std-margin;
	}

	#contacts {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		justify-content: stretch;
		justify-self: stretch;
	}

	#header {
		display: inline-block;
		background: linear-gradient(0.1turn, $on-surface, $primary);
		background-size: 100%;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	#content {
		padding-top: $std-margin;
		@include full-bleed($bg-color: $surface);
		// margin:-10%;
		// background-color: $surface;
		// backdrop-filter: invert(1);
		// filter: invert(1);
	}
</style>
