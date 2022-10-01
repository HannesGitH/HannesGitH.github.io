<script lang="ts">
	//TODO: clippath left side and reintroduce right and asyymetric
	export let animationprogress: number;
	export let amplitude: number = 1;
	// export let asymmetric: boolean = false;
	export let withText: boolean = false;
	// export let monochrome: boolean = false;
	$: angle = (Math.sin(animationprogress * Math.PI) % 2) / 2;
	$: lprogress = Math.asin(angle) * (amplitude * 95) + 30;
	// $: rprogress = Math.asin((asymmetric ? -1 : 1) * angle) * (amplitude * 95) + 30;
	export let bgColor = '#000000';
	export let fgColor = '#ffffff';
	export let sideColor = '#808080FF';
	export let textColorUserDevice = '#1ed31e';
	export let textColorDirectory = '#45aae4';
	export let textColor = '#ffffff';
</script>

<svg
	class="main Icon"
	width="100%"
	viewBox="0 0 80 80"
	version="1.1"
	id="svg75953"
	style="--text-color: {textColor}"
>
	<defs id="defs75947">
		<clipPath id="clipPath-text-1" clipPathUnits="userSpaceOnUse">
			<rect
				y="1.5600179e-05"
				x="85.215118"
				height="219.69759"
				width="117.00888"
				id="rect863-7"
				style="fill:{fgColor};stroke:{bgColor};stroke-width:1.04463;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill"
			/>
		</clipPath>
	</defs>
	<g id="outer" transform="translate(7,-5.36218) scale(0.8)">
		<g
			id="logoSkewLeft"
			class="logoSkewLeft"
			style="display:inline"
			transform="scale(-1, 1) translate(-39.5) skewY({lprogress}) translate(39.5) scale(-1, 1)"
			><!--translate(0 23)-->
			<g
				id="layer1"
				style="display:inline"
				transform="matrix(0.46573393,0.26889161,0,0.46573393,-6.8217847e-5,-23)"
			>
				<text
					xml:space="preserve"
					id="text77060"
					style="font-style:normal;font-weight:normal;font-size:10.5833px;line-height:1.25;font-family:sans-serif;white-space:pre;shape-inside:url(#rect77062);fill:#000000;fill-opacity:1;stroke:none;"
				/>
				<g id="g1080">
					<path
						d="M 85.215112,1e-5 1.5e-4,49.199074 v 98.398136 l 85.214962,49.19906 m 0,0 V 1e-5 196.79627 L 170.43058,147.59721 V 49.199074 L 85.215112,1e-5 m 0,98.398126 L 59.45131,113.2732 V 83.523075 L 33.687005,98.398136 V 128.14826 L 7.9226745,143.02332 V 68.648015 L 33.687005,53.772955 v 29.75012 L 59.45131,68.648015 V 38.898411 l 25.763802,-14.87506 m 51.528638,29.749604 v 29.75012 l -25.76431,-14.87506 z m 0,44.625181 v 29.750124 l -25.76431,14.87506 V 113.2732 Z"
						style="display:inline;fill:{bgColor};fill-opacity:1;stroke:none;stroke-width:0.517964px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
						id="path76540-4-1-9-0-8"
					/>
					<path
						id="path76540-4-1-9-04"
						style="display:inline;fill:{sideColor};fill-opacity:1;stroke:none;stroke-width:0.517964px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
						d="m 59.450961,143.0232 -25.76425,-14.875 25.76425,-14.875 z m -25.76425,-44.625004 25.76425,14.875004 -25.76425,14.875 z m 0,-44.625002 25.76425,14.875 -25.76425,14.875 z m 103.056979,0 25.76424,14.875 V 143.0232 l -25.76424,-14.875 z m -25.76425,14.875 25.76425,14.875 V 98.398196 L 110.97944,83.523194 Z m -25.764239,-44.625 25.764239,14.875 V 113.2732 L 85.215201,98.398196 Z"
					/>
					{#if withText}
						<text
							transform="skewY(-30)"
							id="text77068"
							y="62.828415"
							x="5.5889101"
							style="font-style:normal;font-weight:normal;font-size:6.99484px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.174872"
							xml:space="preserve"
							><tspan style="stroke-width:0.174872" y="62.828415" x="5.5889101" id="tspan77066"
								><tspan
									id="tspan77070"
									style="fill:{textColorUserDevice};fill-opacity:1;stroke-width:0.174872"
									>Hannes@Hat</tspan
								><tspan
									>:<tspan
										id="tspan77160"
										style="fill:{textColorDirectory};fill-opacity:1;stroke-width:0.174872"
										>/dev</tspan
									>$ ./</tspan
								></tspan
							><tspan
								id="tspan77242"
								style="stroke-width:0.174872"
								y="71.571968"
								x="5.5889101"
							/></text
						>
					{/if}
				</g>
			</g>
		</g>
		<!-- <g
			id="logoSkewRight"
			class="logoSkewRight"
			style="display:inline ; "
			transform="translate(39.5) skewY({rprogress}) "
		>
			<g
				style="display:inline"
				id="g1070"
				transform="matrix(0.46573121,-0.26889004,0,0.46573121,-72.175758,86.815987)"
			>
				<path
					d="M 85.215112,1e-5 1.5e-4,49.199074 v 98.398136 l 85.214962,49.19906 m 0,0 V 1e-5 196.79627 L 170.43058,147.59721 V 49.199074 L 85.215112,1e-5 m 0,98.398126 L 59.45131,113.2732 V 83.523075 L 33.687005,98.398136 V 128.14826 L 7.9226745,143.02332 V 68.648015 L 33.687005,53.772955 v 29.75012 L 59.45131,68.648015 V 38.898411 l 25.763802,-14.87506 m 51.528638,29.749604 v 29.75012 l -25.76431,-14.87506 z m 0,44.625181 v 29.750124 l -25.76431,14.87506 V 113.2732 Z"
					style="display:inline;fill:{bgColor};fill-opacity:1;stroke:none;stroke-width:0.517964px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
					id="path76540-4-1-9-0-8-6"
					clip-path="url(#clipPath-text-1)"
					transform="translate(69.757871,-96.93413)"
				/>
				<path
					id="right-side"
					style="display:inline;fill:{sideColor};fill-opacity:1;stroke:none;stroke-width:0.517964px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
					d="m 59.450961,143.0232 -25.76425,-14.875 25.76425,-14.875 z m -25.76425,-44.625004 25.76425,14.875004 -25.76425,14.875 z m 0,-44.625002 25.76425,14.875 -25.76425,14.875 z m 103.056979,0 25.76424,14.875 V 143.0232 l -25.76424,-14.875 z m -25.76425,14.875 25.76425,14.875 V 98.398196 L 110.97944,83.523194 Z m -25.764239,-44.625 25.764239,14.875 V 113.2732 L 85.215201,98.398196 Z"
					transform="translate(69.757871,-96.93413)"
				/>
			</g>
		</g> -->
	</g>
</svg>

<style>
	tspan {
		fill: var(--text-color);
		fill-opacity: 1;
		stroke-width: 0.174872;
	}
	svg {
		aspect-ratio: 0.85;
	}
</style>
