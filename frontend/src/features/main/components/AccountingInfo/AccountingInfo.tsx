import { FC, useState } from "react";
import { Box, TextField } from "@mui/material";
import { styles } from "./AccountingInfo.styles.ts";

import { MidButton } from "../MidButton/MidButton.tsx";
import { PassportData } from "../PassportData/PassportData.tsx";
import { PaymentDetails } from "../PaymentDetails/PaymentDetails.tsx";

export const AccountingInfo: FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Box sx={styles.additionalSection}>
            <Box
                sx={styles.collapsibleHeader}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <Box sx={styles.formDescription}>
                    Для ведения бухгалтерии в сервисе заполните следующие данные
                </Box>
                <Box
                    sx={{
                        ...styles.expandIcon,
                        transform: isExpanded ? 'rotate(180deg)' : 'none'
                    }}
                >
                    ▼
                </Box>
            </Box>

            {isExpanded && (
                <>
                    <Box sx={styles.collapsibleContent}>
                        <TextField
                            label="ИНН"
                            variant="standard"
                            fullWidth
                        />
                        <TextField
                            label="Адрес регистрации"
                            variant="standard"
                            fullWidth
                        />
                    </Box>
                    <PassportData />
                    <PaymentDetails />
                </>
            )}

            <MidButton
                variant="outline"
                onClick={() => console.log('change password')}
            >
                Сменить пароль
            </MidButton>
        </Box>
    );
};