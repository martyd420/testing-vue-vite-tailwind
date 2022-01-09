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
                timeout: 10,
                add_timeout_first_question: 10,
                add_timeout_on_question_solved: 8,
                count: 0,
                count_solved: 0,
                fails: 0,
                max_fails: 3,
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
                 alert('GAME OVER');
                 window.location.reload(); // :) 
            },
            

        },

        watch: {
            count_solved() {
                /** add global score and load new question here */
                this.timeout += this.add_timeout_on_question_solved
                this.nextQuestion()
            }
        },   
        
    }


</script>


<template>

    <Question @next-move="++count" @solved="++count_solved" :id="current_question_id" :question="current_question" :answers="current_answers"/>

    <footer>
        <button @click="nextQuestion">debug next</button><br>
        <span class="pr-6">Počet tahů: {{ count }}</span>
        <span class="pr-6">Zbývající čas: {{ timeout }}</span>
        <span class="pr-6">Chyby: {{ fails }}/3</span>
        <span class="pr-6">Vyřešeno: {{ count_solved }}</span>
    </footer>

</template>