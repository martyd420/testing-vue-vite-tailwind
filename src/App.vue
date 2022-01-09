<script>

    import Item from './components/Item.vue';
    import Question from './components/Question.vue';
    
    import draggable from "vuedraggable";

    import questions_data from './questions.json'
    

    export default {
        components: {
            Question,
            Item,
            draggable,
        },
        
        data() {
            return {
                timeout: 20,
                add_timeout_first_question: 10,
                add_timeout_on_question_solved: 8,
                count: 0, // moves
                count_solved: 0,
                fails: 0,
                max_fails: 3,
                score: 0,
                questions: questions_data,
                current_question_id: 1, // question 1 = hint
                current_question: 'Vítejte v pseudohře  > SeřaďTo <',
                current_answers: [
                    /** ty description by tam vůbec nemusely být...  ale už tam jsou :D  */
                        { id: "1", title: "První", description: "Přesuňte na 1. místo" },
                        { id: "2", title: "Druhá", description: "Přesuňte na 2. místo" },
                        { id: "3", title: "Třetí", description: "Přesuňte na 3. místo" },
                        { id: "4", title: "Čtrvrtá", description: "Přesuňte na 4. místo" },
                ],
            }
        },

        created: function () {
            setInterval(() => {
                if(this.timeout == 0) {
                    if (++this.fails == this.max_fails) this.gameOver()
                    this.timeout += Math.floor(this.add_timeout_on_question_solved / 2)
                    this.nextQuestion()
                } else {
                    --this.timeout;
                };
            }, 1000);

            this.timeout += this.add_timeout_first_question
        },

        
        methods: {
            nextQuestion: function() {
                var rndi = Math.floor(Math.random() * this.questions.length);
                var nq = this.questions.at(rndi);

                this.current_question_id    = nq.current_question_id
                this.current_question       = nq.current_question
                this.current_answers        = nq.current_answers
            },

            gameOver: function() {
                 alert('GAME OVER  -  Score: ' + this.score);
                 window.location.reload(); // :) 
            },
            

        },

        watch: {
            count_solved() {
                this.score += (this.count_solved * this.timeout) * (1 + (this.fails/3))
                this.timeout += this.add_timeout_on_question_solved
                this.nextQuestion()
            }
        },   
        
    }


</script>


<template>

    <div class="w-128 m-auto mt-10 p-1 rounded-lg border-2 border-orange-400 bg-gray-300 bg-gradient-to-b from-gray-400 to-gray-50">

        <Question @next-move="++count" @solved="++count_solved" :id="current_question_id" :question="current_question" :answers="current_answers"/>

        <section id="score" class="text-right font-bold pb-4">
            <!-- button @click="nextQuestion">debug next</button><br -->
            <span title="Zbývající čas na otázku" class="float-left mt-1 ml-6 text-lg text-gray-500">⏳ {{ timeout }}</span>
            <span title="Počet tahů" class="pr-6 text-xl text-gray-600">Tahy: {{ count }}</span>
            <span title="Počet nestihnutých / chyb" class="pr-5 text-2xl text-red-500">✖️ {{ fails }}/3</span>
            <span title="Počet vyřešených" class="pr-5 text-2xl text-green-500">✔️ {{ count_solved }}</span>
            <span title="Score" class="pr-5 text-2xl text-red-600">⭐ {{ score }}</span>
        </section>
    </div>

</template>