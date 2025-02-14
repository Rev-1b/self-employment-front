import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ru } from 'date-fns/locale';



const AdditionalLayout: FC = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
            <Box>
                <Outlet />
            </Box>
        </LocalizationProvider>
    );
};

export default AdditionalLayout; 