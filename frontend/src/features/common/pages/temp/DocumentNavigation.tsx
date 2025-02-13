import { FC } from "react";
import { Box } from '@mui/material';
import HeadNavButton from "../HeadNavButton/HeadNavButton";
import { useLocation } from "react-router-dom";

interface DocumentNavigationProps {
    agreementId?: string; // ID договора, если он уже создан
    onNavigate: (path: string) => void; // Функция для навигации
}

const DocumentNavigation: FC<DocumentNavigationProps> = ({ agreementId, onNavigate }) => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <Box sx={{ display: 'flex', gap: '16px' }}>
            <HeadNavButton
                label="Договор"
                size="small"
                state={currentPath.includes('/agreement') ? 'active' : 'default'}
                onClick={() => onNavigate(`agreement${agreementId ? `/${agreementId}` : '/create'}`)}
            />
            <HeadNavButton
                label="Приложение"
                size="small"
                state={currentPath.includes('/appendix') ? 'active' : 'disabled'}
                onClick={agreementId ? () => onNavigate(`appendix/${agreementId}`) : undefined}
            />
            <HeadNavButton
                label="Акт"
                size="small"
                state={currentPath.includes('/act') ? 'active' : 'disabled'}
                onClick={agreementId ? () => onNavigate(`act/${agreementId}`) : undefined}
            />
            <HeadNavButton
                label="Счет"
                size="small"
                state={currentPath.includes('/invoice') ? 'active' : 'disabled'}
                onClick={agreementId ? () => onNavigate(`invoice/${agreementId}`) : undefined}
            />
            <HeadNavButton
                label="Чек"
                size="small"
                state={currentPath.includes('/check') ? 'active' : 'disabled'}
                onClick={agreementId ? () => onNavigate(`check/${agreementId}`) : undefined}
            />
        </Box>
    );
};

export default DocumentNavigation;