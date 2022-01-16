<script>
    export default {
        props: {
            title: {
                type: String
            },
        },
    }
</script>


<template>

    <h1 class="
        text-gray-100
        text-shadow 
        font-bold 
        shadow-2xl 
        text-center 
        text-sm 
        sm:text-base 

        m-4 
        mb-6 
        p-3 

        border-2 
        border-opacity-95 
        rounded-md 
        bg-orange-500 
        
    ">
        {{ this.title }}
    </h1>
    
</template>