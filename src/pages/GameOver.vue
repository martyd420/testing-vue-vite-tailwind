<script>
    import HeaderTitle from '../components/HeaderTitle.vue';

    export default {

        components: {
            HeaderTitle,
        },

        props: ['score', 'moves', 'solved', 'time'],

        data() {
            return {
                show_form: true,
                show_message: false,
                message: '',
                random: 4, // selected by random dice roll. Přísahám!!!
                highscore: 0,
                score_table: [],
                nick: ''
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
        
        beforeMount: function() {
            this.downloadScoreList();
        },

        methods: {

            downloadScoreList: function() {
                fetch("https://serazovacka.pcdr.cz/score-table/get-scores")
                    .then(r => r.json())
                    .then(json => {
                        this.score_table = json;
                        }
                    );
            },

            sendScore: function() {
                if (this.nick.length < 1) {
                    alert('Zadejte prosím nick.');
                    return false
                }
                
                let score_obj = {
                    score: this.score, speed: Math.floor(1+this.score / this.moves),
                    moves: this.moves,
                    nick: this.nick
                }
                let score_data = JSON.stringify(score_obj);

                fetch('https://serazovacka.pcdr.cz/score-table/upload-score', {
                    method: 'post',
                    headers: {'Content-Type' : 'application/json'},
                    body: score_data
                }).then(r => r.json())
                    .then(json => {
                        this.message = json.message
                        this.show_form = false
                        this.show_message = true

                        this.downloadScoreList() // and refresh scores from server
                    });
            }

        } // end methods

    }
</script>



<template>

    <section id="universal_container">


        <HeaderTitle title="G A M E &nbsp;&nbsp; O V E R" />


        <p id="total_score" class="pt-4 sm:pt-6 text-center text-4xl font-bold outline_score text-green-700">
            Score: {{ this.score }}
        </p>

        <p id="highscore" class="pt-1 sm:pt-2 text-center text-sm font-bold text-gray-800">
            Lokální highscore: {{ this.highscore }}
        </p>

        <p id="new_highscore" v-if="score > highscore && score !== 0" class="animate-pulse pt-6 sm:pt-9 text-center text-2xl font-bold text-red-600">
            ⭐ NOVÝ REKORD ⭐
        </p>

        <div class="text-center">
            <table class="
                overflow-y-scroll
                h-72
                inline-block
                ml-auto
                mr-auto
                mt-5
                text-sm
                font-semibold
                text-gray-700
            ">

                <tr v-for="(item, index) in score_table" :key="item.id">

                    <td class="pr-3">
                        {{ ++index }}.
                    </td>

                    <td class="pr-3">
                        {{ item.nick }}
                    </td>

                    <td class="font-bold">
                        {{ item.score }}
                    </td>

                </tr>

            </table>
        </div>

        <div v-if="show_form" id="score-form" class="text-center mt-5 text-sm font-semibold text-gray-700">
            <input class="rounded-sm outline-none border p-0.5 border-gray-700" v-model="nick" type="text" placeholder="Zadejte svůj nick" />
            <button class="ml-2 p-0.5 border rounded-sm border-gray-700 bg-orange-100 font-semibold" v-on:click="sendScore">ODESLAT</button>
        </div>

        <div v-if="show_message" id="score-message" class="text-center mt-5 text-xl font-bold text-gray-700">
            {{ this.message }}
        </div>

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
