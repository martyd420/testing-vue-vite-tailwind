<script>

    import Item from '../components/Item.vue';
    import Question from '../components/Question.vue';
    
    import draggable from "vuedraggable";

    import questions_data from '../questions.json'
    

    export default {
        components: {
            Question,
            Item,
            draggable,
        },
        
        data() {
            return {
                total_time: 0,
                timeout: 20,
                add_timeout_first_question: 10,
                add_timeout_on_question_solved: 8,
                count: 0, // moves
                count_solved: 0,
                fails: 0,
                max_fails: 3,
                score: 0,
                timer_handle: null,
                questions: questions_data,
                current_question_id: 1, // question 1 = hint
                current_question: 'Seřaďte položky',
                current_answers: [
                    // ty description by tam vůbec nemusely být...  ale už tam jsou :D
                    { id: "1", title: "První", description: "Přesuňte na 1. místo" },
                    { id: "2", title: "Druhá", description: "Přesuňte na 2. místo" },
                    { id: "3", title: "Třetí", description: "Přesuňte na 3. místo" },
                    { id: "4", title: "Čtrvrtá", description: "Přesuňte na 4. místo" },
                ],
            }
        },

        created: function () {
            this.timer_handle = setInterval(() => {
                if(this.timeout === 0) {
                    if (++this.fails === this.max_fails) this.gameOver()
                    this.timeout += Math.floor(this.add_timeout_on_question_solved / 2)
                    this.nextQuestion()
                } else {
                    --this.timeout;
                    ++this.total_time;
                }
            }, 1000);

            this.timeout += this.add_timeout_first_question
        },

        
        methods: {
            nextQuestion: function() {
                let rndi = Math.floor(Math.random() * this.questions.length);
                let nq = this.questions.at(rndi);

                this.current_question_id    = nq.current_question_id
                this.current_question       = nq.current_question
                this.current_answers        = nq.current_answers

                // show qestions after bounceout animation (after next question is ready)
                let el = document.getElementById('qcontainer')

                el.classList.remove('hidden')
            },

            gameOver: function() {
                clearTimeout(this.timer_handle);
              
                let time_min = Math.floor(this.total_time / 60);
                if (time_min.toString().length < 2) time_min = '0' + time_min

                let time_sec = Math.floor(this.total_time - (time_min * 60));
                if (time_sec.toString().length < 2) time_sec = '0' + time_sec

                this.$router.push({ 
                    name: 'GameOver', 
                    params: {
                        score: this.score,
                        moves: this.count,
                        solved: this.count_solved,
                        time: time_min + ':' + time_sec,
                    } 
                });
                 
            }, // end game over
            

        },



        watch: {
            // if count_solved is changed - calc score, and load next question
            count_solved() {
                let el = document.getElementById('qcontainer')
                el.classList.add('bounceOut')

                this.score += Math.floor((this.count_solved/4) * this.timeout) * (1 + (this.fails/3))
                this.timeout += this.add_timeout_on_question_solved

                // wait for bounceOut animation end and then hide question
                // container before next question is ready
                setTimeout(() => {
                    el.classList.remove('bounceOut')
                    el.classList.add('hidden')
                    this.nextQuestion()
                }, 1385)


            }
        },   
        
    }


</script>


<template>

    <div class="question_container">

        <span @click="gameOver" style="position: absolute; margin-top: -6px; cursor: pointer;">🢀</span>

        <div id="qcontainer">
            <Question @next-move="++count" @solved="++count_solved" :id="current_question_id" :question="current_question" :answers="current_answers"/>
        </div>

        <section id="score" class="text-right font-bold pb-2">
            
            <span class="float-left mt-1 ml-5 sm:ml-3 text-md sm:text-xl text-gray-500" title="Zbývající čas na otázku" >
                ⏳ {{ timeout }}
            </span>

            <span class="pr-3 sm:pr-6 text-md sm:text-xl text-gray-600" title="Počet tahů" >
                👆 {{ count }}
            </span>

            <span class="pr-3 sm:pr-6 text-md sm:text-xl text-red-500" title="Počet nestihnutých / chyb">
                ✖️ {{ fails }}<span class="text-xs font-normal">/{{ max_fails }}</span>
            </span>

            <span class="pr-3 sm:pr-6 text-md sm:text-xl text-green-500" title="Počet vyřešených">
                ✔️ {{ count_solved }}
                </span>

            <span class="pr-5 sm:pr-3 text-xl sm:text-2xl text-green-700" title="Score">
                ⭐ {{ score }}
            </span>

        </section>
        
    </div>

</template>