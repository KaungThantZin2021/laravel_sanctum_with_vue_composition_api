import axios from 'axios';

export default function useAuth() {
    const login = async (credentials) => {
        await axios.get('/sanctum/csrf-cookie');
        await axios.post('/login', credentials);

        let response = await axios.get('api/user');

        console.log(response);
    }

    return {
        login
    }
}
