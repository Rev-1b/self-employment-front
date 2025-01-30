import { Box, Button, Typography, Paper } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { FC } from 'react';
import { styles } from './mainPage.styles';

const mockChartData = [
    { date: '25.04.2024', amount: 0 },
    { date: '10.05.2024', amount: 8000 },
    { date: '15.05.2024', amount: 5000 },
    { date: '20.05.2024', amount: 12000 },
    { date: '26.05.2024', amount: 25000 },
];

const mockDocuments = [
    { name: 'Договор с ИП', number: '23541', type: 'Договор', date: '29.06.2024' },
    { name: 'Чек за окна', number: '13450/ккм3', type: 'Чек', date: '13.05.2024' },
    { name: 'Счет за оплату на Паркинг', number: '22563', type: 'Счет', date: '12.05.2024' },
];

const statistics = {
    contracts: 5,
    acts: 16,
    invoices: 46,
    checks: 43,
};

const MainPage: FC = () => {

    const userName = 'Oleg Petrovitch'
    const profit = 233300


    return (
        <Box sx={styles.container}>
            <Typography variant="h5" sx={styles.userName}>
                {userName}
            </Typography>

            <Box sx={styles.buttonGroup}>
                <Button
                    variant="contained"
                    startIcon={<span>+</span>}
                    sx={styles.button}
                >
                    Добавить платеж
                </Button>
                <Button
                    variant="contained"
                    startIcon={<span>+</span>}
                    sx={styles.button}
                >
                    Добавить документ
                </Button>
                <Button
                    variant="contained"
                    startIcon={<span>+</span>}
                    sx={styles.button}
                >
                    Добавить заказчика
                </Button>
            </Box>

            <Box sx={styles.profitSection}>
                <Typography variant="h6">
                    Прибыль за последний месяц
                </Typography>
                <Typography variant="h4" sx={styles.profitAmount}>
                    {profit.toLocaleString()} ₽
                </Typography>
            </Box>

            <Box sx={styles.chartSection}>
                <Typography variant="h6">
                    Доходы за текущий месяц
                </Typography>
                <LineChart
                    width={600}
                    height={300}
                    data={mockChartData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                </LineChart>
            </Box>

            <Box sx={styles.contentSection}>
                <Paper sx={styles.documentsSection}>
                    <Typography variant="h6">
                        Последние измененные документы
                    </Typography>
                    <Box component="table" sx={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        '& th, & td': {
                            padding: '8px',
                            textAlign: 'left',
                            borderBottom: '1px solid #ddd'
                        }
                    }}>
                        <thead>
                            <tr>
                                <th>Наименование</th>
                                <th>Номер</th>
                                <th>Тип</th>
                                <th>Дата изменения</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockDocuments.map((doc, index) => (
                                <tr key={index}>
                                    <td>{doc.name}</td>
                                    <td>{doc.number}</td>
                                    <td>{doc.type}</td>
                                    <td>{doc.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Box>
                </Paper>

                <Paper sx={styles.statisticsSection}>
                    <Typography variant="h6">
                        Общее количество
                    </Typography>
                    <Box sx={styles.statsGrid}>
                        <Box sx={styles.statItem('blue')}>
                            <Typography>Договоров</Typography>
                            <Typography variant="h4">{statistics.contracts}</Typography>
                        </Box>
                        <Box sx={styles.statItem('purple')}>
                            <Typography>Актов</Typography>
                            <Typography variant="h4">{statistics.acts}</Typography>
                        </Box>
                        <Box sx={styles.statItem('lightBlue')}>
                            <Typography>Счетов</Typography>
                            <Typography variant="h4">{statistics.invoices}</Typography>
                        </Box>
                        <Box sx={styles.statItem('cyan')}>
                            <Typography>Чеков</Typography>
                            <Typography variant="h4">{statistics.checks}</Typography>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
};

export default MainPage