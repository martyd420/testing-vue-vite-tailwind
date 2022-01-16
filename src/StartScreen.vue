<template>

    <section id="universal_container">

        <HeaderTitle title="SEŘAZOVAČKA [dev-test]" />

        <img class="w-40 sm:w-44 md:w-52 float-left pr-2" src="./assets/screenshot.png">

        <p class="font-semibold text-sm sm:text-lg md:text-xl text-center">
            Principem hry je seřazení nabízených odpovědí do správného pořadí dle otázky/nápovědy v titulku. 
            Za každou správnou odpověď hráč získává score vycházející z přesnosti a rychlosti.
        </p>

    <br class="clear-both" />

    <div class="text-center text-xl underline sm:text-2xl md:text-3l mb-4 pt-2 sm:pt-3 md:pt-4">
        <router-link class="font-bold color-1 text-shadow-1 border-orange-800" to="/questions">SPUSTIT HRU</router-link>
    </div>
    

    </section>

</template>


<script>
    import HeaderTitle from './components/HeaderTitle.vue';


    export default {

        components: {
            HeaderTitle,
        },

        
        props: ['autostart'],

        created: function () {
            /** constructor */
        },    
        
        data() {
            return {
                random: 4, // selected by true random dice roll
            }
        }, 
        
        methods: {

            // https://bost.ocks.org/mike/shuffle/
            startGame: function() {
                alert ('start game?');
            }

        }

    }
   

</script>