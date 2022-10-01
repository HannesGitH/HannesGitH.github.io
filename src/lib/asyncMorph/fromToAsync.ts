import TweenCalculationWorker from "./morphWorker?worker";
import type {TweenInputMessage, TweenResultMessage} from './interface';
import type KUTE from "kute.js";


const fromToAsync = (elem:Element, from:KUTE.tweenProps, to:KUTE.tweenProps, opts:KUTE.tweenOptions):Promise<KUTE.Tween> => {
    const worker = new TweenCalculationWorker();
    worker.postMessage({elem, from, to, opts} as TweenInputMessage);
    return new Promise((resolve, reject) => {
        worker.onmessage = (e:MessageEvent<TweenResultMessage>) => {
            const m = e.data;
            if (m.error) reject(m.error);
            else resolve(m.data);
        }
    });
}

export default {fromToAsync};