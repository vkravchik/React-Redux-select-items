import axios from 'axios';

export const getUser = async () => {
    try {
        const response = await fetch('https://randomuser.me/api');
        return await response.json();
    } catch (e) {
        console.log(e);
    }
};

export const getUserList = async () => {
    try {
        return await axios.get('https://jsonplaceholder.typicode.com/users');
    } catch (e) {
        console.log(e);
    }
};
