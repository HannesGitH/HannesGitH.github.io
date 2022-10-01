import KUTE from 'kute.js';
import type {TweenInputMessage, TweenResultMessage} from './interface';

onmessage = (e:MessageEvent<TweenInputMessage>):void => {
  const {elem, from, to, opts} = e.data;
  try {
    const tween = KUTE.fromTo(elem, from, to, opts)
    postMessage({data: tween} as TweenResultMessage);
  } catch (error) {
    postMessage({error} as TweenResultMessage);
  }
};

export {};
