<template>
    <header class="text-gray-600 bg-white">
        <div class="container mx-auto flex items-center p-5">
            <router-link
                to="/"
                class="font-medium text-gray-900 flex justify-center items-center"
            >
                <svg
                    style="width: 24px; height: 24px"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    ></path>
                </svg>
                <span class="text-xl ml-3">Laravel and Vue Auth</span>
            </router-link>
            <nav class="ml-auto flex items-center justify-center">
                <router-link class="mr-5 hover:text-gray-900" to="/"
                    >Home</router-link
                >
                <template v-if="authenticated">
                    <router-link
                        class="mr-5 hover:text-gray-900"
                        to="/dashboard"
                        >Dashboard</router-link
                    >
                    <a href="#"
                        class="mr-5 hover:text-gray-900"
                        @click="logout()"
                        >Logout</a
                    >
                </template>

                <template v-else>
                    <router-link
                        class="mr-5 hover:text-gray-900"
                        to="/auth/login"
                        >Login</router-link
                    >
                    <router-link
                        class="mr-5 hover:text-gray-900"
                        to="/auth/register"
                        >Register</router-link
                    >
                </template>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import useAuth from "../auth/useAuth";

const { getAuthenticated: authenticated, logout } = useAuth();

</script>
