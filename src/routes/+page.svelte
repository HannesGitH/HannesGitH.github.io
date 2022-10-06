<script lang="ts">
	import sectionrefs from '$lib/sections/refs';

	import MeSection from '$lib/sections/me.svelte';
	import EducationSection from '$lib/sections/education.svelte';
	import ExperienceSection from '$lib/sections/experience.svelte';
	import SkillsSection from '$lib/sections/skills.svelte';
	import ProjectsSection from '$lib/sections/projects.svelte';
	import ContactSection from '$lib/sections/contact.svelte';

	interface SectionData {
		id: string;
		name: string;
		component: any;
	}

	const sections: SectionData[] = [
		{
			id: sectionrefs.me,
			name: 'Me',
			component: MeSection
		},
		{
			id: sectionrefs.education,
			name: 'Education',
			component: EducationSection
		},
		{
			id: sectionrefs.experience,
			name: 'Experience',
			component: ExperienceSection
		},
		{
			id: sectionrefs.skills,
			name: 'Skills',
			component: SkillsSection
		},
		{
			id: sectionrefs.projects,
			name: 'Projects',
			component: ProjectsSection
		},
		{
			id: sectionrefs.contact,
			name: 'Contact',
			component: ContactSection
		}
	];

	let activeSectionBools: boolean[] = [false, false, false, false, false, false];

	import Background from '$lib/components/background.svelte';
	import ScrollToTopButton from '$lib/components/scrollToTopButton.svelte';
	import Navbar, { NavbarItem, scrollTop, scrollRef, scrollTo } from 'svelte-navbar';
	// import { scrollTop, scrollTo, scrollRef } from 'svelte-scrolling';
	import { goto } from '$app/navigation';
	import LogoWithBlob from '$lib/components/iconwithblob.svelte';

	const navBarScroll = {
		startY: 100,
		endY: 500,
		get length() {
			return this.endY - this.startY;
		},
		progress: function (scroll: number) {
			return Math.min(Math.max(0, scrollY - this.startY) / this.length, 1);
		}
	};

	let scrollY = 0;
	let navBarSizeInPx = 60;

	function routeToPage(route: string, replaceState: boolean) {
		goto(`/${route}`, { replaceState });
	}

	let meSectionActive = false;
</script>

<Background offsetTop={scrollY/30} animationprogress={scrollY/20}/>
<div
	id="body"
	style="--scroll-prog: {navBarScroll.progress(scrollY)}; margin-left:{navBarScroll.progress(
		scrollY
	) *
		1.1 *
		navBarSizeInPx}px;"
>
	<div id="logo">
		<LogoWithBlob animationduration={5000} />
	</div>
	{#each sections as section, i}
		<section id={section.id}>
			<svelte:component this={section.component} />
		</section>
	{/each}
</div>

<Navbar
	scrollProgress={navBarScroll.progress(scrollY)}
	rowSizeInPx={navBarSizeInPx}
	color="#a7c347"
>
	<NavbarItem on:click={(e) => scrollTop()}>Home</NavbarItem>
	{#each sections as section, i}
		<div class="smooth" class:activated={activeSectionBools[i]}>
			<NavbarItem bind:isCurrentlyActive={activeSectionBools[i]} scrollTo={section.id}>
				{section.name}</NavbarItem
			>
		</div>
	{/each}
</Navbar>
<ScrollToTopButton />

<svelte:window bind:scrollY />

<style lang="scss">
	$logo-height: min(70vh, 70vw);
	:global(body, html) {
		color: $on-surface;
	}

	.activated {
		filter: invert(1);
		& * {
			//todo: fix this is not workinf
			color: $on-surface !important;
			text-decoration: underline solid $on-surface 2px !important;
		}
	}
	.smooth {
		transition: scale 400ms, color 400ms, filter 400ms;
	}

	#logo {
		height: $logo-height;
		aspect-ratio: 1;
		margin: 0 auto;
		margin-top: 100px;
		transform: rotateZ(calc(var(--scroll-prog) * 90deg));

		& + * {
			margin-top: calc(100vh - $logo-height);
			position: relative;
			z-index: 1;
			transform-origin: 50% calc(-2 * $logo-height);
			rotate: calc((var(--scroll-prog) - 1) * 90deg);
		}
	}
</style>
