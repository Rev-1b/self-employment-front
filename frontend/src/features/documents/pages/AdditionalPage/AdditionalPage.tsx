import { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AdditionalTable from './components/AdditionalTable';
import AdditionalForm from './components/AdditionalForm';
import { AdditionalTableData } from './types.ts';


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


const AdditionalPage: FC = () => {
    const [tableData, setTableData] = useState<AdditionalTableData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Загрузка данных таблицы
    const fetchTableData = async () => {
        try {
            setIsLoading(true);
            setTableData(mockAdditional)
            // const response = await api.getAdditionalList();
            // setTableData(response.data);
        } finally {
            setIsLoading(false);
        }
    };

    // Первичная загрузка данных
    useEffect(() => {
        fetchTableData();
    }, []);

    // Функция для обновления таблицы после изменений
    const handleDataUpdate = async () => {
        await fetchTableData();
    };

    // if (isLoading) {
    //     return <LoadingSpinner />;
    // }

    if (tableData.length === 0) {
        return <AdditionalForm onSuccess={handleDataUpdate} />;
    }

    return (
        <Box sx={{ display: 'flex', gap: '24px', flexDirection: 'column' }}>
            <AdditionalTable data={tableData} />
            <Outlet context={{ onSuccess: handleDataUpdate }} />
        </Box>
    );
};

export default AdditionalPage; 