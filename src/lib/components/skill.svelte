<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { SkillData } from '$lib/data/skills';

	export let skill: SkillData;
	let activated: boolean = false;
</script>

<div
	id="skill"
	on:mouseenter={(e) => (activated = true)}
	on:mouseleave={(e) => (activated = false)}
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
	#skill {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: $std-margin;
		background-color: $surface;
		border-radius: 20px;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
		transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;
		margin: $std-margin;

		&.activated {
			background-color: azure;
			box-shadow: 0 0 10px 0 rgba(242, 242, 242, 0.5);
		}

		#icon {
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
