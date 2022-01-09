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
        }
        ,
        methods: {
            nextQuestion: function() {
                console.log('NEXT')
                this.timeout += 8
            },
            gameOver: function() {
                 this.count = 0;
                 this.count_solved = 0
                 alert('GAME OVER');
                 this.fails = 0;
                 this.nextQuestion()
            }
        },
        watch: {
            count_solved() {
                /** add score and load new question here */
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
                current_question_id: 1,
                current_question: 'SEŘAĎ TO! [pseudogame]',
                current_answers: [
                    /** ty description by tam vůbec nemusely být...  ale už tam jsou :D  */
                        { id: "1", title: "První", description: "Přesuňte na první místo" },
                        { id: "2", title: "Ne třetí", description: "Tahle položka bude druhá" },
                        { id: "3", title: "Předposlední", description: "Přesuňte na 3. místo" },
                        { id: "4", title: "4.", description: "Čtyřka by možná mohla být poslední" }
                ],
                questions: [
                    [
                        {
                            current_question_id: 32,
                            current_question: "Seřeďte logicky jednotlivé příkazy",
                            current_answers: [
                                { id: "1", title: "init", description: "git init" },
                                { id: "2", title: "add", description: "git add ." },
                                { id: "3", title: "commit", description: "git commit -m \"Allahváč Nabar!\"" },
                                { id: "4", title: "push", description: "git push origin master" }
                            ],
                        },
                        {
                            current_question_id: 42,
                            current_question: "Zadruhí sem řek",
                            current_answers: [
                                { id: "1", title: "První", description: "To je ten před druhým" },
                                { id: "2", title: "Ne čtvrtý", description: "Není na 4 místě" },
                                { id: "3", title: "ne poslední", description: "Poslední je jiný" },
                                { id: "4", title: "Čtvrtý", description: "Hádej, můžeš jednou" }
                            ],
                        },
                        {
                            current_question_id: 64,
                            current_question: "Seřeďte vývojové stádia",
                            current_answers: [
                                { id: "1", title: "Vajíčko", description: "Ale velikonoční není" },
                                { id: "2", title: "Larva", description: "Není první" },
                                { id: "3", title: "Kukla", description: "Poslední je jiný" },
                                { id: "4", title: "Imago", description: "Hádej, můžeš jednou" }
                            ],
                        },
                    ],
                    
                ]
            }
        }
    }


</script>


<template>

    <Question @next-move="++count" @solved="++count_solved" :id="current_question_id" :question="current_question" :answers="current_answers"/>

    <footer>
        <span class="pr-6">Počet tahů: {{ count }}</span>
        <span class="pr-6">Zbývající čas: {{ timeout }}</span>
        <span class="pr-6">Chyby: {{ fails }}/3</span>
        <span class="pr-6">Vyřešeno: {{ count_solved }}</span>
    </footer>

</template>

