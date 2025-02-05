import { FC } from "react";
import { Box } from "@mui/material";

import { MidButton } from "../../components/MidButton/MidButton.tsx";
import { styles } from "./ProfilePage.styles.ts";

import ContentBox from "../../components/ContentBox/ContentBox.tsx";
import HeadNavButton from "../../components/HeadNavButton/HeadNavButton.tsx";
import { PersonalInfo } from "./components/PersonalInfo/PersonalInfo.tsx";
import { AccountingInfo } from './components/AccountingInfo/AccountingInfo.tsx'


const ProfilePage: FC = () => {
    return (
        <ContentBox>
            <HeadNavButton
                label="Профиль"
                state="active" 
            />

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
        </ContentBox>
    );
};


export default ProfilePage;
