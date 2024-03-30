<template>
    <div class="text-center">
        <div v-if="authenticated">
            <h1 class="text-xl font-medium">{{ user.name }}</h1>
            <p>{{ user.email }}</p>
        </div>
        <div v-else>
            <h1 class="text-xl font-medium">Home</h1>
            <p>Add something....</p>
        </div>
    </div>
</template>

<script setup>
import useAuth from "../auth/useAuth";
const { getAuthenticated: authenticated, getUser: user } = useAuth();
</script>
