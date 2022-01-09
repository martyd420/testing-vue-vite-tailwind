<script>

    import Item from './components/Item.vue';
    import Question from './components/Question.vue';
    
    import draggable from "vuedraggable";

    
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
                current_question_id: 1, // question 1 = hint
                current_question: 'Vítejte v pseudohře  > SeřaďTo <',
                current_answers: [
                    /** ty description by tam vůbec nemusely být...  ale už tam jsou :D  */
                        { id: "1", title: "První", description: "Přesuňte na 1. místo" },
                        { id: "2", title: "Druhá", description: "Přesuňte na 2. místo" },
                        { id: "3", title: "Třetí", description: "Přesuňte na 3. místo" },
                        { id: "4", title: "Čtrvrtá", description: "Přesuňte na 4. místo" },
                ],

                questions: [
                        {
                            current_question_id: 2,
                            current_question: "Seřeďte logicky jednotlivé příkazy",
                            current_answers: [
                                { id: "1", title: "init", description: "git init" },
                                { id: "2", title: "add", description: "git add ." },
                                { id: "3", title: "commit", description: "git commit -m \"Allahváč Nabar!\"" },
                                { id: "4", title: "push", description: "git push origin master" },
                            ],
                        },
                        {
                            current_question_id: 3,
                            current_question: "Seřaďte písmena podle abecedy",
                            current_answers: [
                                { id: "1", title: "M", description: "" },
                                { id: "2", title: "O", description: "" },
                                { id: "3", title: "T", description: "" },
                                { id: "4", title: "U", description: "" },
                                { id: "5", title: "X", description: "" },
                                { id: "6", title: "Z", description: "" },
                            ],
                        },
                        {
                            current_question_id: 4,
                            current_question: "Seřeďte vývojové stádia",
                            current_answers: [
                                { id: "1", title: "Vajíčko", description: "Ale velikonoční není" },
                                { id: "2", title: "Larva", description: "Není první" },
                                { id: "3", title: "Kukla", description: "Poslední je jiný" },
                                { id: "4", title: "Imago", description: "Hádej, můžeš jednou" },
                            ],
                        },
                        {
                            current_question_id: 5,
                            current_question: "Seřaďte čísla od nejnižšího",
                            current_answers: [
                                { id: "1", title: "1", description: "" },
                                { id: "2", title: "2", description: "" },
                                { id: "3", title: "11", description: "" },
                                { id: "4", title: "12", description: "" },
                                { id: "5", title: "21", description: "" },
                                { id: "6", title: "22", description: "" },
                            ],
                        },
                        {
                            current_question_id: 6,
                            current_question: "Seřaďte",
                            current_answers: [
                                { id: "1", title: "Čáry", description: "" },
                                { id: "2", title: "máry", description: "" },
                                { id: "3", title: "pod", description: "" },
                                { id: "4", title: "kočáry.", description: "" },
                            ],
                        },
                        {
                            current_question_id: 7,
                            current_question: "Zmrzlá voda pozpátku",
                            current_answers: [
                                { id: "1", title: "H", description: "" },
                                { id: "2", title: "Í", description: "" },
                                { id: "3", title: "N", description: "" },
                                { id: "4", title: "S", description: "" },
                            ],
                        },
                        {
                            current_question_id: 8,
                            current_question: "Seřaďte od nejvyššího",
                            current_answers: [
                                { id: "1", title: "M", description: "" },
                                { id: "2", title: "X", description: "" },
                                { id: "4", title: "VI", description: "" },
                                { id: "3", title: "V", description: "" },
                                { id: "5", title: "IV", description: "" },
                                { id: "6", title: "I", description: "" },
                            ],
                        },
                        {
                            current_question_id: 9,
                            current_question: "Seřaďte od α",
                            current_answers: [
                                { id: "1", title: "alfa", description: "α ἄλφα" },
                                { id: "2", title: "beta", description: "β βῆτα" },
                                { id: "3", title: "gama", description: "γ γάμμα" },
                                { id: "4", title: "delta", description: "δ δέλτα" },
                            ],
                        },
                        {
                            current_question_id: 10,
                            current_question: "Seřaďte pozpátku",
                            current_answers: [
                                { id: "1", title: "Z", description: "" },
                                { id: "2", title: "Y", description: "" },
                                { id: "3", title: "X", description: "" },
                                { id: "4", title: "A", description: "" },
                            ],
                        },
                        {
                            current_question_id: 11,
                            current_question: "Jaké je pořadí?",
                            current_answers: [
                                { id: "1", title: "Závorky", description: "(1 + 2) + 3 * 4 = 15" },
                                { id: "2", title: "Násobení", description: "(1 + 2) + 3 * 4 = 15" },
                                { id: "3", title: "Sčítání", description: "(1 + 2) + 3 * 4 = 15" },
                            ],
                        },
                        {
                            current_question_id: 12,
                            current_question: "Jaké je pořadí?",
                            current_answers: [
                                { id: "1", title: "Odmocňování", description: "√(4) / 2 - 1 = 0" },
                                { id: "2", title: "Dělení", description: "√(4) / 2 - 1 = 0" },
                                { id: "3", title: "Odčítání", description: "√(4) / 2 - 1 = 0" },
                            ],
                        },
                        {
                            current_question_id: 13,
                            current_question: "Seřaď zlomky od nejmenšího",
                            current_answers: [
                                { id: "1", title: "1/12", description: "" },
                                { id: "2", title: "1/4", description: "" },
                                { id: "3", title: "polovina", description: "" },
                                { id: "4", title: "1", description: "" },
                            ],
                        },
                        {
                            current_question_id: 14,
                            current_question: "Klávaesy",
                            current_answers: [
                                { id: "1", title: "A", description: "" },
                                { id: "2", title: "S", description: "" },
                                { id: "3", title: "D", description: "" },
                                { id: "4", title: "F", description: "" },
                            ],
                        },
                        {
                            current_question_id: 15,
                            current_question: "Sčítání",
                            current_answers: [
                                { id: "1", title: "1 + 6", description: "" },
                                { id: "2", title: "3 x 3", description: "" },
                                { id: "3", title: "4 + 7", description: "" },
                                { id: "4", title: "6 + 6", description: "" },
                            ],
                        },
                    
                ]
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

