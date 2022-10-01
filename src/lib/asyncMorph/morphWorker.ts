import {interpolate} from 'flubber';
import type {TweenInputMessage, TweenResultMessage} from './interface';

onmessage = (e:MessageEvent<TweenInputMessage>):void => {
  const {from, to,} = e.data;
  try {
    const interpolator = interpolate(from, to);
    postMessage({data: interpolator} as TweenResultMessage);
  } catch (error) {
    postMessage({error} as TweenResultMessage);
  }
};

export {};
