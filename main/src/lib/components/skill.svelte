<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { SkillData } from '$lib/data/skills';
	import { hover3dFactory } from '$lib/utils/hooks/transformHover3d';

	import { isActive } from '$lib/stores/project-skill-relation';

	$: active = isActive(skill.name);

	export let skill: SkillData;
	let _activated: boolean = false;
	$: activated = _activated || $active;

</script>

<!-- svelte-ignore missing-declaration -->
<div
	id="skill"
	on:mouseenter={(e) => (_activated = true)}
	on:mouseleave={(e) => (_activated = false)}
	use:hover3dFactory(true)
	class:activated
>
	<i id="icon" class={skill.iconClass} class:colored={activated} />
	<h2 id="name">{skill.name}</h2>
	<div id="level" style="
    --skill: {skill.level*10}%;
    --progress-color: {activated ? '#000' : '#fff'};
    ">
		<div class="progress" >
            <div class="progress-value"></div>
        </div>
	</div>
</div>

<style lang="scss">
	@use 'sass:color';
	#skill {

		& * {
			transform-style: preserve-3d;
		}

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

		&:hover {
			transition: transform 0s linear;
			z-index: 5;
		}

		&.activated {
			background-color: azure;
			box-shadow: 0 0 10px 0 rgba(242, 242, 242, 0.5);
		}

		#icon {
			font-size: 48pt;
			transform: translateZ(10px);
			transition: color 0.5s ease-in-out;
			&.fa-bolt.colored {
				//supabase
				color: #37996b
			}
		}

		#name {
			font-size: 1em;
			color: $surface;
			transform: translateZ(12px);
		}

		#level {
			font-size: 1em;
			transform: translateZ(2px);
			// margin-top: $std-margin;
		}

        $progress-height: 30px;

		.progress {
			background: adjust-color($color: gray, $alpha: -.7);
			justify-content: flex-start;
			border-radius: 100px;
			align-items: center;
			position: relative;
			padding: 0 5px;
			display: flex;
			height: $progress-height;
			transform: translateZ(2px);
			width: 6rem;
		}

		.progress-value {
			animation: load 3s normal forwards;
			box-shadow: 0 10px 40px -10px #fff;
			border-radius: 100px;
			background: var(--progress-color);
			height: calc(#{$progress-height} - 10px);
			transform: translateZ(5px);
			transition: background 0.3s ease-in-out;
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
