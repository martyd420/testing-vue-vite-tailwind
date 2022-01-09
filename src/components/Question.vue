<template>
    <h1 class="text-shadow font-bold shadow-2xl text-center text-xl m-4 mb-6 p-3 border-2 border-opacity-95 rounded-md bg-orange-500 text-white ">
        {{ question }}
    </h1>

    <section id="qlist">

        <draggable :onEnd="onDrop" v-model="rlist" group="qlist" item-key="id">

            <template #item="{ element }">
                <Item :title="element.title" :description="element.description" /> 
            </template>  

        </draggable>

    </section>

    <button @click="dbgDumpList">dump</button>
</template>


<script>
    import draggable from "vuedraggable";
    import Item from './Item.vue';

    export default {

        components: {
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
                //this.dbgDumpList();
                this.$emit('next-move')
                let poradi = '';
                this.rlist.forEach(element => {
                    poradi += element.id
                });
                if ('0123456789'.includes(poradi)) {
                    console.log('Question ' + this.id + ' solved.');
                    this.$emit('solved')
                }
            },

            onMove: function(e) {
                /* no action */
            },

            dbgDumpList: function () {
                console.log('Aktualni stav pole:');
                this.rlist.forEach(element => {
                    console.log (element.id);
                });
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