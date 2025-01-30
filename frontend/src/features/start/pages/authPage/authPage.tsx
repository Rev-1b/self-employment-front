import { Box, TextField, Button } from "@mui/material";
// import "./authPage.css";
import "../../common/css/leftSideCommon.css"
import { useNavigate, Link } from "react-router-dom";
import { FC, FormEvent, useState } from "react";
import axios from 'axios';
import { buttonStyles, linkContainerStyles } from '../../common/mui/leftSideCommon.ts';
import { IAuthFormData, authAPI } from "../../api/authPage.ts";

const AuthPage: FC = () => {
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    async function sendAuthData(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Сбрасываем ошибки перед новой попыткой
        setEmailError('');
        setPasswordError('');

        const authFormData = new FormData(event.currentTarget);
        const authData: IAuthFormData = {
            email: authFormData.get("email") as string,
            password: authFormData.get("password") as string,
        };

        try {
            const response = await authAPI.login(authData);
            // Здесь можно добавить логику сохранения токена
            console.log(response);
            // navigate("/layout");
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status && [400, 401].includes(error.response.status)) {
                const errorData = error.response.data;
                if (errorData.email) {
                    setEmailError(errorData.email);
                }
                if (errorData.password) {
                    setPasswordError(errorData.password);
                }
                // Если пришла общая ошибка аутентификации
                if (errorData.detail) {
                    setPasswordError(errorData.detail);
                }
            } else {
                alert('Произошла неизвестная ошибка');
                console.log(error);
            }
        }
    }

    return (
        <>
            <form onSubmit={sendAuthData} className="left-input-field">
                <h2 className="left-title">Авторизация</h2>
                <TextField
                    label="E-mail"
                    variant="standard"
                    type="email"
                    name="email"
                    error={!!emailError}
                    helperText={emailError}
                />
                <TextField
                    label="Пароль"
                    variant="standard"
                    type="password"
                    name="password"
                    error={!!passwordError}
                    helperText={passwordError}
                />

                <Button
                    sx={buttonStyles}
                    type="submit"
                >
                    Войти
                </Button>

                <Box sx={linkContainerStyles}>
                    <Link to="/register" className="left-main-link">
                        Регистрация
                    </Link>
                    <Link to="/pass-recovery" className="left-sub-link">
                        Забыли пароль?
                    </Link>
                </Box>
            </form>
        </>
    );
}

export default AuthPage;
