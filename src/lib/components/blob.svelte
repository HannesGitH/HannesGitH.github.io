<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';

	import { interpolateSequence } from 'flubber2';
	import type { Interpolator } from 'flubber2';

	export let color = '#ffffff';
	/**
	 * animationprogress: number
	 * currently does not work, animation runs & loops automatically
	 */
	export let animationprogress: number;
	export let animationduration: number = 3000;

	const opacity = tweened(0, { duration:5000 });

	type Interpolator = (t: number) => string;

	let interpolator: Interpolator = (_: number) =>
		'M167.9 -198.8C235.1 -182.3 319.2 -156.7 340.9 -106.8C362.7 -56.9 322.1 17.3 296.5 96.4C270.9 175.6 260.4 259.7 213.5 285.6C166.5 311.6 83.3 279.3 19.6 252.3C-44.1 225.3 -88.2 203.7 -126.8 175.1C-165.5 146.5 -198.8 110.9 -248.1 57.4C-297.4 3.9 -362.7 -67.6 -362.2 -132.7C-361.7 -197.9 -295.5 -256.7 -224.2 -271.9C-152.8 -287 -76.4 -258.5 -13 -240.6C50.4 -222.6 100.7 -215.3 167.9 -198.8';

	let mounted = false;
	$: {
		// TODO: set tween animation progress to animationprogress
		// if (mounted) tween.update(Math.sin(animataionprogress * Math.PI));
		if (mounted) {
			// tween.start(animationprogress);
		}
	}

	onMount(async () => {
		opacity.set(0.5);
		const paths = [
			'M167.9 -198.8C235.1 -182.3 319.2 -156.7 340.9 -106.8C362.7 -56.9 322.1 17.3 296.5 96.4C270.9 175.6 260.4 259.7 213.5 285.6C166.5 311.6 83.3 279.3 19.6 252.3C-44.1 225.3 -88.2 203.7 -126.8 175.1C-165.5 146.5 -198.8 110.9 -248.1 57.4C-297.4 3.9 -362.7 -67.6 -362.2 -132.7C-361.7 -197.9 -295.5 -256.7 -224.2 -271.9C-152.8 -287 -76.4 -258.5 -13 -240.6C50.4 -222.6 100.7 -215.3 167.9 -198.8',
			'M184.6 -271.7C220.2 -228.1 217.1 -148.8 217.8 -85.3C218.4 -21.7 222.9 26.1 218.9 81.3C215 136.6 202.7 199.4 164.8 262.1C127 324.7 63.5 387.4 7.6 376.9C-48.2 366.3 -96.4 282.7 -145.9 223.7C-195.3 164.8 -246 130.6 -280.9 78.3C-315.8 26 -334.8 -44.5 -312 -97.2C-289.2 -150 -224.5 -185 -165.6 -221C-106.6 -257 -53.3 -294 10.6 -308.6C74.5 -323.1 148.9 -315.3 184.6 -271.7',
			'M239.1 -318.6C301.9 -283.5 339.2 -202.9 359 -121.5C378.8 -40.1 381.1 42.2 348.2 103.8C315.3 165.3 247.3 206 183.4 226.3C119.5 246.5 59.8 246.3 1.4 244.4C-57 242.5 -114 238.9 -155.6 211.4C-197.1 183.9 -223.1 132.4 -230.3 81.6C-237.5 30.8 -225.7 -19.4 -217.4 -78.6C-209.1 -137.8 -204.2 -206 -168.5 -249.9C-132.8 -293.8 -66.4 -313.4 10.9 -328.4C88.2 -343.4 176.3 -353.7 239.1 -318.6',
			'M187.1 -228.1C257 -206.7 338.2 -171.5 359 -114.9C379.8 -58.3 340.2 19.7 310.2 97.4C280.3 175.1 260.1 252.6 210 283.2C159.9 313.7 79.9 297.4 17.9 272.7C-44.1 248 -88.2 215 -132.7 182.7C-177.3 150.3 -222.3 118.6 -249 72.4C-275.8 26.2 -284.4 -34.5 -283.9 -109.7C-283.5 -184.8 -274 -274.4 -225.2 -302.7C-176.3 -331 -88.2 -298 -14.8 -277.7C58.6 -257.3 117.2 -249.6 187.1 -228.1',
			'M162.4 -221.8C232.3 -172.7 325.8 -154.5 366.9 -101.8C408 -49.1 396.6 38 369.8 120C343 202.1 300.8 279 236.6 310.7C172.4 342.3 86.2 328.7 17.8 304.1C-50.5 279.6 -101.1 244.2 -159.4 210.6C-217.8 177.1 -283.9 145.4 -294.3 99C-304.7 52.6 -259.3 -8.4 -245.1 -88.1C-230.8 -167.7 -247.7 -265.9 -212 -326.1C-176.3 -386.4 -88.2 -408.7 -21 -379.8C46.2 -351 92.5 -271 162.4 -221.8'
		];
		interpolator = await interpolateSequence(paths,{loop:true});
	});
</script>

<svg
	id="visual"
	viewBox="0 0 900 900"
	width="100%"
	height="100%"
	preserveAspectRatio="none"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	version="1.1"
>
	<g transform="translate(457.545794298902 440.49383887006405)" opacity={$opacity}>
		<path id="blob0" d={interpolator(animationprogress%1)} fill={color} />
	</g>
	<g transform="rotate({animationprogress*0.2} 0 0) translate(457.545794298902 440.49383887006405) " opacity={$opacity}>
		<path id="blob1" d={interpolator((animationprogress*1.7)%1)} fill={color} />
	</g>
	<g transform="rotate({Math.sin(animationprogress*0.3)} 0 0) translate(457.545794298902 440.49383887006405) " opacity={$opacity}>
		<path id="blob2" d={interpolator((animationprogress*1.25)%1)} fill={color} />
	</g>
</svg>

<!-- <style>
	#blob1,
	#blob2,
	#blob3,
	#blob4,
	#blob5 {
		visibility: hidden;
	}
</style> -->
