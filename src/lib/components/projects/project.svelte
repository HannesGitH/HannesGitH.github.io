<script lang="ts">
	import type { ProjectData } from "$lib/data/projects";

	import { _ } from 'svelte-i18n';

    export let projectData : ProjectData;

    $: imgSrc = projectData.icon;
    $: imgAlt = projectData.name+" image"
    $: name = projectData.name
    $: content = projectData.description
    $: link = projectData.link
</script>

<div class="wrapper">
    <img src={imgSrc} alt={imgAlt}>
    <h3>{name}</h3>
    <svelte:component this={content}/>
    <p><a href={link}>
    {$_('projects.checkout')}
    <!-- TODO: O->NO-knickpfeil -->
    </a></p>
    
</div>