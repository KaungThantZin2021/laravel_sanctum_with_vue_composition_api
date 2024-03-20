<template>
    <div id="app">
        <form @submit.prevent="login">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script setup>
    import axios from 'axios';

    const login = async () => {
        await axios.get('/sanctum/csrf-cookie');

        await axios.post('/login', {
            email: 'a@gmail.com',
            password: 'password'
        });

        console.log(123);
    }
</script>
