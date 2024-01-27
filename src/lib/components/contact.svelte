<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { ContactData } from '$lib/data/contacts';
	import { hover3dFactory } from '$lib/utils/hooks/transformHover3d';

	$: hideFromCrawler = contact.hideFromCrawler;

	export let contact: ContactData;
	export let isActivated : boolean = false;
	let activated: boolean = false;
</script>

<div
	id="contact"
	on:mouseenter={(e) => (activated = true)}
	on:mouseleave={(e) => (activated = false)}
	use:hover3dFactory(true)
	class:activated
	class:externally-activated={isActivated}
>
	<div id="a" >
		<!--  -->
		{#if !hideFromCrawler}
		<a href={contact.link}>
			<i id="icon" class={contact.iconClass} class:colored={activated} />
		</a>
		{:else}
			<i id="icon" class={contact.iconClass} class:colored={activated} />
		{/if}
		<!-- <h2 id="name">{contact.name}</h2> -->
	</div>
</div>

<style lang="scss">


	#contact {
		& * {
			transform-style: preserve-3d;
		}
		perspective: 1000px !important;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: $std-margin;
		background-color: $surface;
		border-radius: 20px;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
		transition: all 0.3s ease-in-out;
		margin: $std-margin;
		color: $on-surface;

		&:hover {
			transition: transform 0s linear;
			z-index: 5;
		}

		#a , a{
			text-decoration: none;
			color: inherit;
			transform: translateZ(20px);
		}

		&.externally-activated {
			// background-color: $primary;
			// color: $on-primary;
			box-shadow: $glow-shadow;
		}
		&.activated {
			background-color: azure;
			box-shadow: 0 0 10px 0 rgba(242, 242, 242, 0.5);
			color: $primary;
		}

		& i {
			font-size: 48pt;
		}

		#name {
			font-size: 1em;
			color: $surface;
		}

		#level {
			font-size: 1em;
			// margin-top: $std-margin;
		}

		$progress-height: 30px;

		.progress {
			background: rgba(255, 255, 255, 0.1);
			justify-content: flex-start;
			border-radius: 100px;
			align-items: center;
			position: relative;
			padding: 0 5px;
			display: flex;
			height: $progress-height;
			width: 6rem;
		}

		.progress-value {
			animation: load 3s normal forwards;
			box-shadow: 0 10px 40px -10px #fff;
			border-radius: 100px;
			background: var(--progress-color);
			height: calc(#{$progress-height} - 10px);
			width: 0;
		}

		@keyframes load {
			0% {
				width: 0;
			}
			100% {
				width: var(--skill);
			}
		}
	}
</style>
