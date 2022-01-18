<template>

    <section id="universal_container">


        <HeaderTitle title="G E J M &nbsp;&nbsp; O U V R" />


        <p id="total_score" class="pt-4 sm:pt-6 text-center text-4xl font-bold outline_score text-green-700">
            Score: {{ this.score }}
        </p>

        <p id="highscore" class="pt-1 sm:pt-2 text-center text-sm font-bold text-gray-800">
            Highscore: {{ this.highscore }}
        </p>

        <p id="new_highscore" v-if="score >= highscore && score != 0" class="animate-pulse pt-6 sm:pt-9 text-center text-2xl font-bold text-red-600">
            ⭐ NOVÝ REKORD ⭐
        </p> 

        <p class="text-center mt-10 mb-8">
            <router-link class="font-bold color-1 text-shadow-1 text-xl underline" to="/">RESTART GAME</router-link>
        </p>

        <div id="score" class="text-right font-bold pb-2 mt-4 ">
                
            <span class="float-left mt-1 ml-1 sm:ml-3 text-sm sm:text-lg text-gray-500" title="Celkový čas" >
                ⏳ {{ this.time }}
            </span>

            <span class="pr-1 sm:pr-4 text-sm sm:text-lg text-gray-600" title="Počet tahů" >
                👆 {{ this.moves }}
            </span>

            <span class="whitespace-nowrap pr-1 sm:pr-4 text-sm sm:text-lg text-green-500" title="Počet vyřešených">
                ✔️ {{ this.solved }}
            </span>

            <span class="whitespace-nowrap pr-1 sm:pr-3 text-md sm:text-2xl text-green-700 underline" title="Score">
                ⭐ {{ this.score }}
            </span>

        </div> 


        <footer class="mt-2 text-xs text-gray-300 text-right"> 
            https://github.com/martyd420/testing-vue-vite-tailwind
        </footer>

    </section>


</template>


<script>
    import HeaderTitle from '../components/HeaderTitle.vue';


    export default {

        components: {
            HeaderTitle,
        },

        props: ['score', 'moves', 'solved', 'time'],

        data() {
            return {
                random: 4, // selected by random dice roll. Přísahám!!!
                highscore: 0,
            }
        },
        
        mounted() {
            if (localStorage.highscore) {
                this.highscore = parseInt(localStorage.highscore);
            }
            if (this.highscore < this.score && this.score > 0) {
                localStorage.highscore = this.score
                this.highscore = this.score
            }
        },    
        
    }
</script>