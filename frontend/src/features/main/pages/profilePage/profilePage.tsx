import { FC } from "react";
import { Box } from "@mui/material";

import { MidButton } from "../../components/MidButton/MidButton.tsx";
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


export default ProfilePage;
