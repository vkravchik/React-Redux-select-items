import axios from 'axios';

export const getUser = async (user) => {
    return await axios.get('https://jsonplaceholder.typicode.com/users/' + user.id);
};

export const getUserList = async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/users');
};
