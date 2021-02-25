<script>
    import zxcvbn from './zxcvbn'
    //import readable from 'svelte/store'
    let password = ''
    $: security = zxcvbn(password)
    $: color = security.crack_times_seconds.offline_fast_hashing_1e10_per_second
    
    export const crackseconds = color
</script>
  
<input type=password bind:value={password}>

<p>
    {security.crack_times_display.offline_fast_hashing_1e10_per_second}
</p>