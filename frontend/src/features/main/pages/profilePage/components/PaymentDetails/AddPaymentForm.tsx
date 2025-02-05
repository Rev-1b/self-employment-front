import { Box, IconButton, TextField } from "@mui/material";
import { FC } from "react";
import AddIcon from '../../../../../../assets/tableImages/addIcon.svg';
import { styles } from "./PaymentDetails.styles.ts";

interface AddPaymentFormProps {
    newRecord: {
        accountName: string;
        bank: string;
        card: string;
        accountNumber: string;
        bik: string;
        correspondentAccount: string;
    };
    onRecordChange: (field: string, value: string) => void;
    onAdd: () => void;
}

export const AddPaymentForm: FC<AddPaymentFormProps> = ({ newRecord, onRecordChange, onAdd }) => {
    return (
        <Box sx={styles.tableRow} className="adding-row">
            <TextField
                size="small"
                value={newRecord.accountName}
                onChange={(e) => onRecordChange('accountName', e.target.value)}
            />
            <TextField
                size="small"
                value={newRecord.bank}
                onChange={(e) => onRecordChange('bank', e.target.value)}
            />
            <TextField
                size="small"
                value={newRecord.card}
                onChange={(e) => onRecordChange('card', e.target.value)}
            />
            <TextField
                size="small"
                value={newRecord.accountNumber}
                onChange={(e) => onRecordChange('accountNumber', e.target.value)}
            />
            <TextField
                size="small"
                value={newRecord.bik}
                onChange={(e) => onRecordChange('bik', e.target.value)}
            />
            <TextField
                size="small"
                value={newRecord.correspondentAccount}
                onChange={(e) => onRecordChange('correspondentAccount', e.target.value)}
            />
            <IconButton size="small" onClick={onAdd}>
                <img src={AddIcon} alt="add" />
            </IconButton>
            <Box></Box>
        </Box>
    );
};
