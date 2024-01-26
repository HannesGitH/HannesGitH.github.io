<script lang="ts">
	import type { ProjectData } from "$lib/data/projects";
	import { hover3dFactory } from "$lib/utils/hooks/transformHover3d";

    import Button, {Label} from '@smui/button'

	import { _ } from 'svelte-i18n';
	import { slide } from "svelte/transition";

    export let projectData : ProjectData;

    $: logoImgSrc = projectData.iconUrl;
    $: logoImgAlt = projectData.name+" image"
    $: previewImgSrc = projectData.previewUrl;
    $: previewImgAlt = projectData.name+" preview"
    $: name = projectData.name
    $: content = projectData.description
    $: link = projectData.link

    let buttonHovered = false;

</script>

    <!-- svelte-ignore missing-declaration -->
    
    <div 
    class="wrapper" 

    use:hover3dFactory(false)
    >
    <div id="previewplaceholder">
        <img src={previewImgSrc} alt={previewImgAlt} id="preview">
    </div>
    <div class="fakeborder" >
        <!-- <div class="light-blob"></div> -->
        <div id="inner">
            <img src={logoImgSrc} alt={logoImgAlt} id="logo">
            <h3>{name}</h3>
            <div id="description">
                <svelte:component this={content}/>
            </div>
            <p class="button-shaped-round" class:activated={buttonHovered}
                on:mouseenter={()=> buttonHovered = true}
                on:mouseleave={()=> buttonHovered = false}
            >
            <!-- <Button on:click={()=> location.href = link} variant="raised" class="button-shaped-round">
                <Label>{$_('projects.checkout')}</Label>
            </Button> -->
            <a href={link} transition:slide>
                {buttonHovered ? $_('projects.checkout-hovered') : $_('projects.checkout')}
            <i class="fa-solid fa fa-arrow-up-right-from-square" class:activated={buttonHovered}></i>
            </a>
        </p>
        </div>
    </div>
    </div>


<style lang="scss">
    @use '@material/button/mixins' as mdc-button;
    @use 'sass:color';

	// .light-blob {
	// 	filter: blur(40px);
	// 	position: absolute;
	// 	z-index: -1; /* to keep it at below everything else */
	// 	top: 0; /* to align it at top */
	// 	left: 0; /* to align it at left */
	// 	width: 250px;
	// 	height: 250px;
	// 	border-radius: 50%; /* to make it circular */
	// 	background: color.adjust($color: $primary, $alpha: -.2);
	// }



    .button-shaped-round {
        // @include mdc-button.shape-radius(100%);
        height: 3rem;
        background-color: $primary;
        color: $on-primary;
        border-radius: 20px;
        padding: 0;
        margin: calc($std-margin * .7);
        transform: translateZ(15px);
        margin-top: calc($std-margin * 2);

        & a {
            text-decoration: none;
            color: inherit;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;

            & i {
                margin-left: $std-margin;
                transition: all 0.3s ease-in-out;
                &.activated {
                    transform: translate3d(10rem, 0, 5px);
                    background-color: $primary;
                    padding: $std-margin;
                    border-radius: 100%;
                }
            }
        }

        transition: all 0.3s ease-in-out;
        &.activated {
            background-color: $on-primary;
            color: white;
            transform: translateZ(5px);
        }
        &:active {
            transform: translateZ(0);
        }
    }

    .fakeborder {
        // color: red;
        background: color.adjust($color: $primary, $alpha: -.9); /* border color */
        padding : 3px; /* border width */
        border-radius: 21px;
        transform-style: preserve-3d;
        // transform: perspective(800px) translateZ(0) rotateX(var(--hover3d-xAngle)) rotateY(var(--hover3d-yAngle));
        // margin-right: 10rem;
        // transition: all 0.3s ease-in-out;
        transform: translateZ(5px);
        // overflow: ;
        // // margin: $std-margin;
        // &:hover {
		// 	transition: transform 0s linear;
		// 	z-index: 5;
		// // }
        // & * {
        //     transform-style: preserve-3d;
        // }
        margin-left: $std-margin;
        // background-blend-mode: multiply;
        // backdrop-filter: blur(5px); //schade, macht leider den 3d effekt futsch
    }

    .wrapper {
        z-index: 0;
        background-color: $surface;
        background: color.adjust($color: $primary, $alpha: -.9); /* border color */
        border-radius: 20px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out;
        margin: $std-margin;
        padding: $std-margin;
        // margin-right: 10rem;
        position: relative;
        color: $on-surface;
        width: 32rem;
        transform-style: preserve-3d;
        transition: transform 0.3s ease-in-out;
        transform: perspective(800px) translateZ(0) rotateX(var(--hover3d-xAngle)) rotateY(var(--hover3d-yAngle));

		&:hover {
			transition: transform 0s linear;
			z-index: 5;
		}

        // & i {
        //     color: white;
        // }
        
        //children are in row
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: flex-start;

        & * {
            transform-style: preserve-3d;
        }
       
        &  #inner {
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
            margin: calc($std-margin / 2);
            margin-right: 0;
            transition: all 0.3s ease-in-out;
            z-index: 2;
            &#preview {
                border: 5px solid black;
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