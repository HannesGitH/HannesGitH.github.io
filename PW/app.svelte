<script>
    import zxcvbn from 'zxcvbn'
    let password = ''
    $: security = zxcvbn(password)
</script>
  
<input type=password bind:value={password}>

<p>
    {security.crack_times_display.offline_fast_hashing_1e10_per_second}
</p>