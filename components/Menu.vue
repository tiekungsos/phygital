<template>
    
</template>
<script>
import { VBurger } from 'vue-burger';
import 'animate.css';

export default {
    data() {
        return {
            burgerStyle: {
          '--padding': '0px',
          '--layer-bg-color': 'yellow',
          '--active-layer-bg-color': '#ABABAB',
          '--layer-width': '10px',
        },
        }
    },
    components : {
        VBurger
    }
}
</script>