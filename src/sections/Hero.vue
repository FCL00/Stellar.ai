<script setup>
import { blocks } from '@/assets/backgrounds';
import Badge from '@/components/ui/Badge.vue';
import companies from '@/assets/companies';
import WaitlistForm from '@/components/ui/WaitlistForm.vue';
</script>

<template lang="">
    <section id="hero" class="relative flex items-center justify-center min-h-screen py-32 overflow-hidden text-white">
        <div class="container relative z-10 p-4 md:max-w-7xl">
            <div class="relative z-10 flex flex-col items-center justify-center space-y-5 md:block">
                <Badge label="NEW" title="Latest Integration have arrived"/>
                <h1 class="max-w-2xl text-6xl font-bold text-center md:text-left lg:text-7xl">
                    Elevate your SEO Efforts
                </h1>
                <p class="max-w-xl text-center md:text-left text-neutral-400 sm:text-lg md:text-xl">
                    Elevate your site's visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
                </p>
                <WaitlistForm />
            </div>
            <img id="image" class="hidden md:block absolute md:opacity-30 lg:opacity-[1] md:-top-[300px] md:-right-[200px]  lg:-top-[350px] lg:-right-[200px] z-0" width="1000px" height="900px" :src="blocks" loading="lazy">
        </div>
        <div class="absolute z-10 space-y-4 bottom-20">
            <p class="text-center text-md">Join the World's Most Trusted Engineering Teams</p>
            <ul class="relative flex gap-5 max-w-7xl">
                <li v-for="(company, index) in companies" :key="index" class="mx-4">
                    <img class="min-h-[20px] min-w-[50px] lg:min-h-[40px] lg:min-w-[100px] object-contain" :src="company" alt="Company logo" />
                </li>
            </ul>
        </div>
        <div className="w-full absolute z-10 -bottom-[50px] md:-bottom-20 h-32 md:h-[300px] lg:h-[400px] pointer-events-none bg-gradient-to-b from-transparent to-black-0 rounded-b-2xl" />
    </section>
</template>

<script>    
export default {

}
</script>

<style scoped>
    #hero{
        background-image: url("/starfield.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
    }

    .marquee-container {
        overflow: hidden;
        position: relative;
        width: 100%;
    }

    .marquee-track {
        display: flex;
        animation: marquee 20s linear infinite;
    }
    
</style>