<script lang="ts">
	import { scrollRef } from 'svelte-navbar';
	import refs from './refs';
	import { _ } from 'svelte-i18n';
    import skills from '$lib/components/skills/all';
    import Skill from '$lib/components/skills/skill.svelte';

</script>

<div id="content" use:scrollRef={refs.skills}>
	<h1>{$_('skills.title')}</h1>
    <div id="skills">
        {#each skills as skill}
            <Skill {skill} />
        {/each}
    </div>
</div>

<style lang="scss">
	* {
		padding: $std-margin;
	}

    #skills {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        justify-content: stretch;
        justify-self: stretch;
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
