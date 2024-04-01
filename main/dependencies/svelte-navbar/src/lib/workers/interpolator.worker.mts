
import {interpolateSequence } from 'flubber2';

let interpolator: (p: number) => string = () => '';

onmessage = (e) => {
	const d = e.data;
	switch (d.task) {
		case 'load':
			const paths = d.paths;
			interpolator = (interpolateSequence(paths, { loop: false })) as (p: number) => string;
			postMessage({msg:'loaded'});
			break;
		case 'interpolate':
			postMessage({path:interpolator(d.t),t:d.t, id:d.id});
		default:
			break;
	}

};

export {};
