import axios from 'axios';
import { computed, reactive, ref } from 'vue';
import router from '../router';

const state = reactive({
    authenticated: false,
    user: {}
});

export default function useAuth() {

    const errors = ref({});

    const getAuthenticated = computed(() => state.authenticated);
    const getUser = computed(() => state.user);

    const setAuthenticated = (authenticated) => state.authenticated = authenticated;
    const setUser = (user) => state.user = user;

    const attempt = async () => {
        try {
            let response = await axios.get('/api/user');
            setAuthenticated(true);
            setUser(response.data);

            return response;

        } catch (error) {
            setAuthenticated(false);
            setUser({});

            return error;
        }
    }

    const login = async (credentials) => {
        try {
            await axios.get('/sanctum/csrf-cookie');
            await axios.post('/login', credentials);
            attempt();

            router.push('/');
            
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    }

    const logout = async () => {
        try {
            await axios.post('/logout');
            setAuthenticated(false);
            setUser({});

            router.push('/auth/login');

        } catch (error) {
            console.log(error);
        }
    }

    return {
        login,
        getAuthenticated,
        getUser,
        attempt,
        errors,
        logout
    }
}
