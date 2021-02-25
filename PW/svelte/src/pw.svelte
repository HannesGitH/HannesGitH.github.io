<script  lang="ts" >
    import {password,security} from './pw_store'
    export let withAsterix:Boolean = false
</script>
  
<input type=password bind:value={$password}>

<p>
    it takes
    <b style="text-transform: uppercase;">
        {$security.crack_times_display.offline_fast_hashing_1e10_per_second}
    </b>
    to break your password {withAsterix? "*": ""}
</p>

<style>
    input {
        margin: 0 auto;
        width: 100%;
        outline: none;
        text-align: center;
        border: none;
    }
    input:focus {
        
    }
</style>