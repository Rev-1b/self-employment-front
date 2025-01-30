import { TextField } from "@mui/material";

import { Box } from "@mui/material";
import { FC } from "react";
import { styles } from "./PassportData.styles.ts";


export const PassportData: FC = () => {
    return (
        <>
            <Box sx={styles.formDescription}>Паспортные данные</Box>
            <Box sx={styles.passportGroup}>
                <TextField
                    label="Серия"
                    variant="standard"
                />
                <TextField
                    label="Номер"
                    variant="standard"
                />
                <TextField
                    label="Выдан"
                    variant="standard"
                    sx={{ gridColumn: 'span 3' }}
                />
                <TextField
                    label="Дата выдачи"
                    variant="standard"
                    sx={{ gridColumn: 'span 3' }}
                />
                <TextField
                    label="Код подразделения"
                    variant="standard"
                    sx={{ gridColumn: 'span 2' }}
                />
            </Box>
        </>
    )
}