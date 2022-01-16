<template>

    <section id="universal_container">

        <HeaderTitle title="SEŘAZOVAČKA [dev-test]" />

        <img class="w-40 sm:w-44 md:w-52 float-left pr-2" src="./assets/screenshot.png">

        <p class="font-semibold text-sm sm:text-lg md:text-xl text-center">
            Principem hry je seřazení nabízených odpovědí do správného pořadí dle otázky/nápovědy v titulku. 
            Za každou správnou odpověď hráč získává score vycházející z přesnosti a rychlosti.
        </p>

        <br class="clear-both" />

        <div class="text-center text-2xl underline sm:text-3xl sm:mt-6 md:text-4xl mb-1 pt-2 sm:pt-3 md:pt-4">
            <router-link class="font-bold color-1 text-shadow-1" to="/questions">SPUSTIT HRU</router-link>
        </div>
        
        <p class="mt-5 sm:mt-8 md:mt-9 font-semibold text-sm sm:text-lg md:text-xl text-center">
            ⬇️ Ve spodní části se bude zobrazovat ⬇️
        </p>


        <div id="score" class="text-right font-bold pb-2 mt-4 border-blue-200 border-2 rounded-lg">
                
            <span class="float-left mt-1 ml-1 sm:ml-3 text-sm sm:text-lg text-gray-500" title="Zbývající čas na otázku" >
                ⏳ Čas
            </span>

            <span class="pr-1 sm:pr-4 text-sm sm:text-lg text-gray-600" title="Počet tahů" >
                👆 Tahy
            </span>

            <span class="pr-1 sm:pr-4 text-sm sm:text-lg text-red-500" title="Počet nestihnutých / chyb">
                ✖️ Chyby
            </span>

            <span class="whitespace-nowrap pr-1 sm:pr-4 text-sm sm:text-lg text-green-500" title="Počet vyřešených">
                ✔️ OK
            </span>

            <span class="whitespace-nowrap pr-1 sm:pr-3 text-md sm:text-2xl text-green-700 underline" title="Score">
                ⭐ Score
            </span>

        </div>



        <footer class="mt-2 text-xs text-gray-300 text-right"> 
            https://github.com/martyd420/testing-vue-vite-tailwind
        </footer>

    </section>


</template>


<script>
    import HeaderTitle from './components/HeaderTitle.vue';


    export default {

        components: {
            HeaderTitle,
        },

        data() {
            return {
                random: 4, // selected by random dice roll
            }
        }, 
        
    }
</script>