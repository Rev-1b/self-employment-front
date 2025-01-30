import { Box, IconButton, TextField } from "@mui/material";
import { FC } from "react";
import AddIcon from '../../../../assets/tableImages/addIcon.svg';
import { PaymentRecord } from './constants';
import { styles } from "./PaymentDetails.styles";

interface EditPaymentFormProps {
    editingRecord: PaymentRecord;
    onRecordChange: (field: keyof PaymentRecord, value: string) => void;
    onSave: () => void;
    onCancel: () => void;
}

export const EditPaymentForm: FC<EditPaymentFormProps> = ({
    editingRecord,
    onRecordChange,
    onSave,
    onCancel
}) => {
    return (
        <>
            <TextField
                size="small"
                value={editingRecord.accountName}
                onChange={(e) => onRecordChange('accountName', e.target.value)}
            />
            <TextField
                size="small"
                value={editingRecord.bank}
                onChange={(e) => onRecordChange('bank', e.target.value)}
            />
            <TextField
                size="small"
                value={editingRecord.card}
                onChange={(e) => onRecordChange('card', e.target.value)}
            />
            <TextField
                size="small"
                value={editingRecord.accountNumber}
                onChange={(e) => onRecordChange('accountNumber', e.target.value)}
            />
            <TextField
                size="small"
                value={editingRecord.bik}
                onChange={(e) => onRecordChange('bik', e.target.value)}
            />
            <TextField
                size="small"
                value={editingRecord.correspondentAccount}
                onChange={(e) => onRecordChange('correspondentAccount', e.target.value)}
            />
            <IconButton size="small" onClick={onSave}>
                <img src={AddIcon} alt="save" />
            </IconButton>
            <IconButton size="small" onClick={onCancel}>
                <span>✕</span>
            </IconButton>
        </>
    );
}; 