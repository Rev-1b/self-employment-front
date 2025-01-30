import { IconButton } from "@mui/material";
import { Box } from "@mui/material";
import { FC } from "react";
import { styles } from "./PaymentDetails.styles";

import SpreadIcon from '../../../../assets/tableImages/spreadIcon.svg'


export const TableHeader: FC = () => {
    return (
        <>
            <Box sx={styles.tableHeader}>
                <Box component={'span'}>Наименование счета</Box>
                <Box component={'span'}>Банк</Box>
                <Box component={'span'}>Карта</Box>
                <Box component={'span'}>Номер счета</Box>
                <Box component={'span'}>БИК</Box>
                <Box component={'span'}>Корреспондентский счет банка</Box>
                <Box component={'span'}></Box>
                <IconButton size="small">
                    <img src={SpreadIcon} alt="spread" />
                </IconButton>
            </Box>
        </>
    )
}