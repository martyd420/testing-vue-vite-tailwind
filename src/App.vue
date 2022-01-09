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
        
        created: function () {
            setInterval(() => {
                if(this.timeout == 0) {
                    this.timeout = 2
                    if (++this.fails == 3) this.gameOver()
                    this.nextQuestion()
                } else {
                    --this.timeout;
                };
            }, 1000);

            this.timeout += 10
        }
        ,
        methods: {
            nextQuestion: function() {
                this.timeout += 8

                var rndi = Math.floor(Math.random() * this.questions.length);
                var nq = this.questions.at(rndi);

                this.current_question_id    = nq.current_question_id
                this.current_question       = nq.current_question
                this.current_answers        = nq.current_answers
            },

            gameOver: function() {
                 this.count = 0;
                 this.count_solved = 0
                 alert('GAME OVER');
                 window.location.reload();
            },
            

        },
        watch: {
            count_solved() {
                /** add global score and load new question here */
                console.log('this.watch.count_solved')
                this.nextQuestion()
            }
        },   
        data() {
            return {
                timeout: 10,
                count: 0,
                count_solved: 0,
                fails: 0,
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
        }
    }


</script>


<template>

    <Question @next-move="++count" @solved="++count_solved" :id="current_question_id" :question="current_question" :answers="current_answers"/>

    <footer>
        <button @click="nextQuestion">next</button><br>
        <span class="pr-6">Počet tahů: {{ count }}</span>
        <span class="pr-6">Zbývající čas: {{ timeout }}</span>
        <span class="pr-6">Chyby: {{ fails }}/3</span>
        <span class="pr-6">Vyřešeno: {{ count_solved }}</span>
    </footer>

</template>

