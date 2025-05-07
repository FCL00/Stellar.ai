<template>
    <div class="flex items-center p-2 space-x-2 border rounded-full w-fit bg-black-0 border-black-30">
        <p class="px-2 py-1 tracking-wider rounded-full text-mobile-p md:text-desktop-p text-black-0 bg-violet-700 ">{{ label }}!</p>
        <h6 class="text-mobile-h6 md:text-desktop-h6 text-violet-500">{{ title }}</h6>
    </div>
</template>

<script>

export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        icon: {
            type: Boolean,
            required: true,
            default: false,
        },
        label: {
            type: String,
            required: true,
        },
        
    },

}
</script>

<style scoped>

</style>