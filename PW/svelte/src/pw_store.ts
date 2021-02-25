import { readable, derived, writable } from 'svelte/store';
import zxcvbn from './zxcvbn'
import { getColorMix } from './color'

export const password = writable('');

export const security = derived(
    password,
	($password:String)=> zxcvbn($password)
);

export const seconds = derived(
    security,
	$security=>$security.crack_times_seconds.offline_fast_hashing_1e10_per_second
);

export const color = derived(
    seconds,
	($seconds)=> {
        const green = "00FF00" 
        const red   = "FF0000" 
        let ratio = between(0,Math.log10(Math.log10($seconds)),1);
        let color = getColorMix(green, red, ratio);
        return color
    }
);

const between=(min:number,x:number,max:number)=>
    Math.min(max,
        Math.max(min,
            Number.isNaN(x)?0:x
        )
    )
