import type { Shape } from 'flubber';

export type { Shape } from 'flubber';

export type Interpolator = (t: number) => string;

export interface TweenResultMessage {
	error?: string;
	data?: Interpolator;
}

export interface TweenInputMessage {
	from: Shape;
	to: Shape;
}
