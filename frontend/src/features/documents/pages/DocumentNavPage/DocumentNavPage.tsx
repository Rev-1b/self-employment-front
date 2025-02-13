import { FC } from "react";
import { Box } from '@mui/material'
import { styles } from './DocumentNavPage.styles.ts'


import ContentBox from "../../../common/components/ContentBox/ContentBox.tsx"
import HeadNavButton from "../../../common/components/HeadNavButton/HeadNavButton.tsx";
import { useNavigate, useLocation, Outlet } from "react-router-dom";


const DocumentNavPage: FC = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <ContentBox>
            <Box sx={styles.navSection}>
                <HeadNavButton
                    label="Договоры"
                    state={
                        location.pathname.startsWith('/base/documents') &&
                            !location.pathname.startsWith('/base/documents/templates') &&
                            !location.pathname.startsWith('/base/documents/history') ? 'active' : 'default'
                    }
                    onClick={() => { navigate('/base/documents/agreements/list/') }}
                />
                <HeadNavButton
                    label="Шаблоны"
                    state={location.pathname.startsWith('/base/documents/templates') ? 'active' : 'default'}
                    onClick={() => { navigate('/base/documents/templates/') }}
                />
                <HeadNavButton
                    label="История"
                    state={location.pathname.startsWith('/base/documents/history') ? 'active' : 'default'}
                    onClick={() => { navigate('/base/documents/history/') }}
                />
            </Box>
            <Box sx={{ marginTop: '40px' }}>
                <Outlet />
            </Box>
        </ContentBox>
    );
};

export default DocumentNavPage;