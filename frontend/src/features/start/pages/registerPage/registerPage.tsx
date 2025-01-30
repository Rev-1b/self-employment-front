import { FC, FormEvent, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Box, TextField, Button, Checkbox } from "@mui/material";
import axios from 'axios';
import "./registerPage.css"
import { buttonStyles, linkContainerStyles } from '../../common/mui/leftSideCommon';
import { IRegisterFormData, IRegisterData, registerAPI } from '../../api/registerPage';

const RegisterPage: FC = () => {
    const [firstIsChecked, setFirstIsChecked] = useState<boolean>(false);
    const [secondIsChecked, setSecondIsChecked] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [usernameError, setUsernameError] = useState<string>('');

    async function sendData(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setEmailError('');
        setUsernameError('');
        setPasswordError('');

        const sendFormData = new FormData(event.currentTarget);
        const password = sendFormData.get("password") as string;
        const confirmPassword = sendFormData.get("confirmPassword") as string;

        if (password !== confirmPassword) {
            setPasswordError("Пароли не совпадают");
            return;
        }

        const registerData: IRegisterData = {
            email: sendFormData.get("email") as string,
            username: sendFormData.get("username") as string,
            password: password,
        };

        try {
            const response = await registerAPI.register(registerData);
            console.log(response.data);
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 400) {
                const errorData = error.response.data;
                if (errorData.email) {
                    setEmailError(errorData.email);
                }
                if (errorData.username) {
                    setUsernameError(errorData.username);
                }
            } else {
                alert('Произошла неизвестная ошибка');
            }
        }
    }

    return (
        <>

            <form onSubmit={sendData} className="left-input-field">
                <h2 className="left-title">Регистрация</h2>
                <TextField
                    name="email"
                    label="E-mail"
                    variant="standard"
                    type="email"
                    required
                    error={!!emailError}
                    helperText={emailError}
                />
                <TextField
                    name="username"
                    label="Имя пользователя"
                    variant="standard"
                    type="text"
                    required
                    error={!!usernameError}
                    helperText={usernameError}
                />
                <TextField
                    name="password"
                    label="Пароль"
                    variant="standard"
                    type="password"
                    required
                    error={!!passwordError}
                    helperText={passwordError}
                />
                <TextField
                    name="confirmPassword"
                    id="standard-basic"
                    label="Подтвердить пароль"
                    variant="standard"
                    type="password"
                    required
                    error={!!passwordError}
                    helperText={passwordError}
                />

                <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
                    <Checkbox
                        checked={firstIsChecked}
                        onChange={() => setFirstIsChecked(!firstIsChecked)}
                    />
                    {/* Здесь будет ссылка на условия сервиса */}
                    <Link to="*" className="accept-service-link">
                        Я принимаю условия сервиса
                    </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
                    <Checkbox
                        checked={secondIsChecked}
                        onChange={() => setSecondIsChecked(!secondIsChecked)}
                    />
                    {/* Здесь будет ссылка на политику конфедициальности */}
                    <Link to="*" className="accept-policy-link">
                        Я согласен(а) с политикой конфедициальности
                    </Link>
                </Box>

                <Button
                    sx={buttonStyles}
                    type="submit"
                    disabled={!firstIsChecked || !secondIsChecked}
                >
                    Зарегистрироваться
                </Button>


                <Box sx={linkContainerStyles}>
                    <Link to="/" className="left-sub-link">
                        Уже зарегистрированы?
                    </Link>
                </Box>

            </form>
        </>
    );
};

export default RegisterPage;   
