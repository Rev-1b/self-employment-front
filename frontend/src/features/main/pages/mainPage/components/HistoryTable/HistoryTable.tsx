import { Box } from "@mui/material";
import { FC } from "react";
import { styles } from './HistoryTable.styles.ts'

const mockDocuments = [
    { id: 1, name: 'Договор с ИП', number: '23541', type: 'Договор', date: '25.06.2024' },
    { id: 2, name: 'Чек за окна', number: '13456f4hhf3', type: 'Чек', date: '13.05.2024' },
    { id: 3, name: 'Счет за оплату на Паркинг', number: '22563', type: 'Счет', date: '12.05.2024' },
].sort((a, b) => {
    const dateA = new Date(a.date.split('.').reverse().join('-'));
    const dateB = new Date(b.date.split('.').reverse().join('-'));
    return dateB.getTime() - dateA.getTime();
}).slice(0, 3);

const HistoryTable: FC = () => {
    return (
        <Box sx={styles.documentsSection}>
            <Box sx={styles.tableHeader}>
                <Box component={'span'}>Наименование</Box>
                <Box component={'span'}>Номер</Box>
                <Box component={'span'}>Тип</Box>
                <Box component={'span'}>Дата изменения</Box>
            </Box>
            {mockDocuments.map((record, index) => (
                <Box
                    key={record.id}
                    sx={{
                        ...styles.tableRow,
                        backgroundColor: index % 2 === 1 ? '#fff' : '#F8F8F8',
                    }}
                >
                    <Box component={'span'}>{record.name}</Box>
                    <Box component={'span'}>№ {record.number}</Box>
                    <Box component={'span'}>{record.type}</Box>
                    <Box component={'span'}>{record.date}</Box>
                </Box>
            ))}
        </Box>
    )
};

export default HistoryTable;