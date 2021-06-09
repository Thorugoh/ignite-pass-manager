import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LoginData {
    id: string;
    title: string;
    email: string;
    password: string;
};

const useStorageData = () => {
    const loginsKey = '@passmanager:logins';

    async function getLogins() {
        const result = await AsyncStorage.getItem('@passmanager:logins');
        return result ? JSON.parse(result) : [];
    }

    async function addNewLogin(login: LoginData[]) {
        await AsyncStorage.setItem('@passmanager:logins', JSON.stringify(login));
    }

    return { getLogins, addNewLogin }
}

export default useStorageData;