<script>

    import Questions from './Questions.vue';
    import StartScreen from './StartScreen.vue';

    export default {
        components: {
            Questions,
            StartScreen
        },
        
        data() {
            return {
                autostart: false,
            }
        },

        created: function () {
          /** constructor */
        },

        
        methods: {
            startGame: function() {
                
            },

            stopGame: function() {
                 alert('GAME OVER  -  Score: ' + this.score);
                 window.location.reload(); // :) 
            },
            

        },

        watch: {
            autostart() {
                /** autostart mode changed */
            }
        },   
        
    }


</script>


<template>
  <router-view />
</template>