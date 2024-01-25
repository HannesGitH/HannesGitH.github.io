<script lang="ts">
	import type { ProjectData } from "$lib/data/projects";
	import { onMount } from "svelte";

	import { _ } from 'svelte-i18n';

    export let projectData : ProjectData;

    $: logoImgSrc = projectData.iconUrl;
    $: logoImgAlt = projectData.name+" image"
    $: previewImgSrc = projectData.previewUrl;
    $: previewImgAlt = projectData.name+" preview"
    $: name = projectData.name
    $: content = projectData.description
    $: link = projectData.link

    let wrapper : HTMLElement | undefined;
    let m = { x: 0, y: 0};
    let rm = { x: 0, y: 0};
    $: ws = {
        w: wrapper?.offsetWidth ?? 1,
        h: wrapper?.offsetHeight ?? 1,
    };
    $: cardAngle = {
        x: rm.x == 0 ? 0 :  (0.5 - (rm.y / ws.h)) * 20,
        y: rm.y == 0 ? 0 : -(0.5 - (rm.x / ws.w)) * 20
    };
	function handleMousemove(event: MouseEvent) {
		m.x = event.clientX;
		m.y = event.clientY;
        const rect = wrapper?.getBoundingClientRect();
        // rm.x = event.pageX - (wrapper?.offsetLeft ?? 0);
        // rm.y = event.pageY - (wrapper?.offsetTop ?? 0);
        rm.x = m.x - (rect?.left ?? 0); 
        rm.y = m.y - (rect?.top ?? 0);
	}

    function handleMouseleave(event: MouseEvent) {
        rm.x = 0;
        rm.y = 0;
    }

</script>

<div id="variableParent"
    style="--rx:{cardAngle.x}deg; --ry:{cardAngle.y}deg;"
    >
    <div 
    class="wrapper" 
    on:mousemove={handleMousemove} 
    on:mouseleave={handleMouseleave}
    bind:this={wrapper}
    >
    <div id="previewplaceholder">
            <img src={previewImgSrc} alt={previewImgAlt} id="preview">
        </div>
        <div id="inner">
            <img src={logoImgSrc} alt={logoImgAlt} id="logo">
            <h3>{name}</h3>
            <div id="description">
                <svelte:component this={content}/>
            </div>
            <p><a href={link}>
            {$_('projects.checkout')}
            <!-- TODO: O->NO-knickpfeil -->
            </a></p>
        </div>
    </div>
</div>


<style lang="scss">
    .wrapper {
        z-index: 0;
        background-color: $surface;
        border-radius: 20px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out;
        margin: $std-margin;
        padding: $std-margin;
        margin-right: 10rem;
        position: relative;
        color: $on-surface;
        width: 30rem;
        transform-style: preserve-3d;
        transition: transform 0.3s ease-in-out;
        transform: perspective(500px) translateZ(0) rotateX(var(--rx)) rotateY(var(--ry));
        &:hover{
            transition: none;
            z-index: 5;
        }
        
        //children are in row
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: flex-start;

        & * {
            transform-style: preserve-3d;
        }
       
        & > #inner {
            z-index: 1;
            transform: translateZ(20px);
            margin: $std-margin;
            padding: $std-margin;
            border: 2px solid $primary;
            border-radius: 20px;
            & img#logo{
            width: 10rem;
            height: 10rem;
            transform: translateZ(30px);

            }
            & h3 {
                transform: translateZ(30px);
            }
            & #description {
                transform: translateZ(30px);
                font-size: smaller;
            }
        }
        & img#preview , #previewplaceholder{
            width: 40rem;
            transform: translateZ(5px);
            border-radius: 40px;
            margin: $std-margin;
            margin-right: 0;
            transition: all 0.3s ease-in-out;
            z-index: 2;
            border: 5px solid black;
            &#preview {
                margin: 0;
                position: absolute;
                transform-origin: top left;
                width: calc(100% / 0.25);
                scale: 0.25;
                top: 0;
                left: 0;
                &:hover {
                    transform: translate3d(20rem, 2rem, 250px);
                    scale: 0.35;
                }
            }
        }
    }
</style>