import { api } from '../../common/api/config';

export interface IRegisterFormData {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
}

export interface IRegisterData {
    email: string;
    username: string;
    password: string;
}

export const registerAPI = {
    register: async (data: IRegisterData) => {
        return api.post('/users/register/', data);
    },
};