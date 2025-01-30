import { FC, useState } from "react";
import { Box, TextField } from "@mui/material";

import { MidButton } from "../../components/MidButton/MidButton.tsx";
import "./profilePage.css";
import { styles } from "./profilePage.styles.ts";

import { PersonalInfo } from "../../components/PersonalInfo/PersonalInfo.tsx";
import { AccountingInfo } from '../../components/AccountingInfo/AccountingInfo.tsx'


const ProfilePage: FC = () => {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.profileTitle}>
                Профиль
            </Box>
            
            <Box>
                <PersonalInfo />
                <AccountingInfo />

                <Box sx={styles.actionButtons}>
                    <MidButton variant="primary" isSubmit={true}>
                        Сохранить
                    </MidButton>
                    <MidButton variant="secondary">
                        Отмена
                    </MidButton>
                </Box>
            </Box>
        </Box>
    );
};



const ProfilePage1: FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Box sx={styles.container}>
            <h2 className="profile-title">Профиль</h2>

            <Box>
                <h3 className="form-subtitle">Заполните ваши данные</h3>

                <Box sx={styles.inputGroup}>
                    <TextField
                        label="Фамилия"
                        variant="standard"
                        fullWidth
                    />
                    <TextField
                        label="Имя"
                        variant="standard"
                        fullWidth
                    />
                    <TextField
                        label="Отчество"
                        variant="standard"
                        fullWidth
                    />
                </Box>

                <Box sx={styles.inputGroup}>
                    <TextField
                        label="Логин"
                        variant="standard"
                        fullWidth
                    />
                    <TextField
                        label="E-mail"
                        variant="standard"
                        defaultValue="r.login@gmail.com"
                        fullWidth
                    />
                    <TextField
                        label="Телефон"
                        variant="standard"
                        fullWidth
                    />
                </Box>

                <Box sx={styles.additionalSection}>
                    <Box
                        sx={styles.collapsibleHeader}
                        onClick={handleToggleExpand}
                    >
                        <h3 className="form-description">Для ведения бухгалтерии в сервисе заполните следующие данные</h3>
                        <span
                            className="expand-icon"
                            style={{
                                transform: isExpanded ? 'rotate(180deg)' : 'none'
                            }}
                        >
                            ▼
                        </span>
                    </Box>

                    {isExpanded && (
                        <>
                            <Box sx={styles.collapsibleContent}>
                                <TextField
                                    label="ИНН"
                                    variant="standard"
                                    fullWidth
                                />
                                <TextField
                                    label="Адрес регистрации"
                                    variant="standard"
                                    fullWidth
                                />
                            </Box>

                            <h3 className="form-description">Паспортные данные</h3>
                            <Box sx={styles.passportGroup}>
                                <TextField
                                    label="Серия"
                                    variant="standard"
                                />
                                <TextField
                                    label="Номер"
                                    variant="standard"
                                />
                                <TextField
                                    label="Выдан"
                                    variant="standard"
                                    sx={{ gridColumn: 'span 3' }}
                                />
                                <TextField
                                    label="Дата выдачи"
                                    variant="standard"
                                    sx={{ gridColumn: 'span 3' }}
                                />
                                <TextField
                                    label="Код подразделения"
                                    variant="standard"
                                    sx={{ gridColumn: 'span 2' }}
                                />
                            </Box>

                            <h3 className="form-description">Платежные реквизиты</h3>
                            <Box sx={{
                                backgroundColor: '#f5f5f5',
                                padding: '16px',
                                borderRadius: '4px',
                                mb: 3
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    mb: 2
                                }}>
                                    <span>Создать</span>
                                    <span>+</span>
                                </Box>
                                <Box sx={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(6, 1fr)',
                                    gap: '8px',
                                    backgroundColor: '#333',
                                    color: 'white',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    fontSize: '14px'
                                }}>
                                    <span>Наименование счета</span>
                                    <span>Банк</span>
                                    <span>Карта</span>
                                    <span>Номер счета</span>
                                    <span>БИК</span>
                                    <span>Корреспондентский счет банка</span>
                                </Box>
                            </Box>
                        </>
                    )}

                    <MidButton
                        variant="outline"
                        onClick={() => { console.log('change password') }}
                    >
                        Сменить пароль
                    </MidButton>
                </Box>

                <Box sx={styles.actionButtons}>
                    <MidButton variant="primary" isSubmit={true}>
                        Сохранить
                    </MidButton>
                    <MidButton variant="secondary">
                        Отмена
                    </MidButton>
                </Box>
            </Box>
        </Box>
    );
};

export default ProfilePage;
