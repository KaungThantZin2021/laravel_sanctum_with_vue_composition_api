<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
    <div class="bg-gray-200 min-h-screen">
        <Header/>

        <section
            class="bg-white max-w-xl w-full mt-40 mx-auto border rounded p-5 shadow"
        >
            <RouterView></RouterView>
        </section>
    </div>
</template>
