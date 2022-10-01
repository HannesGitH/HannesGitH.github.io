export interface TweenResultMessage {
	error?: String;
	data?: KUTE.Tween;
}

export interface TweenInputMessage {
	elem: Element;
	from: KUTE.tweenProps;
	to: KUTE.tweenProps;
	opts?: KUTE.tweenOptions;
}