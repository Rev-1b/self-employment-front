import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ru } from 'date-fns/locale';
import AdditionalTable from './components/AdditionalTable.tsx';
import { styles } from './AdditionalPage.styles.ts';

const mockAdditional = [
    {
        id: 1,
        name: 'Приложение к договору №14',
        number: '№1234',
        startDate: '2023-12-31',
        status: 'Создан',
    },
    {
        id: 2,
        name: 'Undefined',
        number: '№23423432',
        startDate: '2023-12-31',
        status: 'Отклонен',
    },
    {
        id: 3,
        name: 'Приложение разработки',
        number: '№3423',
        startDate: '2023-12-31',
        status: 'Закрыт',
    },
];


const AdditionalLayout: FC = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const currentSection = pathSegments[pathSegments.indexOf('documents') + 1]; // 'additional', 'act', 'invoice', 'check'
    
    const showForm = location.pathname.includes(`/${currentSection}/create`) || 
                    location.pathname.includes(`/${currentSection}/edit`);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
            <Box>
                <AdditionalTable
                    data={mockAdditional}
                />
                {showForm && (
                    <Box sx={styles.form}>
                        <Outlet />
                    </Box>
                )}
            </Box>
        </LocalizationProvider>
    );
};

export default AdditionalLayout; 