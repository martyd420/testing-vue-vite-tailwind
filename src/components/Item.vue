<script>
    export default {
        props: {
            title: {
                type: String
            },
            description: {
                type: String,
                default: ''
            },
        },
    }
</script>


<template>

    <article>
        <h3>{{ title }}</h3>
        <p>
            {{ description }}
        </p>
    </article> 
    
</template>


<style scoped>
    /* styled by tailwind component */
</style>