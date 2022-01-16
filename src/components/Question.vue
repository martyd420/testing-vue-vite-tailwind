<template>

    <section id="qlist">
        
        <HeaderTitle :title="this.question" />

        <draggable :onEnd="onDrop" v-model="rlist" group="qlist" item-key="id">

            <template #item="{ element }">
                <Item :title="element.title" :description="element.description" /> 
            </template>  
            
        </draggable>

    </section>

</template>


<script>
    import HeaderTitle from './HeaderTitle.vue';
    import draggable from "vuedraggable";
    import Item from './Item.vue';


    export default {

        components: {
            HeaderTitle,
            Item,
            draggable, 
        },

        emits: ['next-move', 'solved'],

        props: ['id', 'question', 'answers'],

        created: function () {
            this.rlist = this.randomizeArray(this.answers);
        },    
        
        data() {
            return {
                count: 0,
                rlist: [],
            }
        }, 
        
        watch: {
            answers() {
                this.rlist = this.randomizeArray(this.answers);
            }
        },

        methods: {

            onDrop: function(e) {
                this.$emit('next-move')
                let poradi = '';
                this.rlist.forEach(element => {
                    poradi += element.id
                });
                if ('0123456789'.includes(poradi)) {
                    this.$emit('solved')
                }
            },

            // https://bost.ocks.org/mike/shuffle/
            randomizeArray: function(array) {
                let currentIndex = array.length,  randomIndex;
                while (currentIndex != 0) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex--;
                    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
                }
                return array;
            },
      
        }

    }
   

</script>