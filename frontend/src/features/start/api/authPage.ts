import { api } from '../../common/api/config';

export interface IAuthFormData {
    email: string;
    password: string;
}

export const authAPI = {
    login: async (data: IAuthFormData) => {
        return api.post('/users/auth/jwt/create/', data);
    },
};