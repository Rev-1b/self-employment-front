import { Box, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { FC, useState } from "react";

import EditIcon from '../../../../../../assets/tableImages/updateIcon.svg';
import DeleteIcon from '../../../../../../assets/tableImages/deleteIcon.svg';

import { AddPaymentForm } from './AddPaymentForm.tsx';
import { TableHeader } from './TableHeader.tsx'
import { EditPaymentForm } from './EditPaymentForm';

import { styles } from "./PaymentDetails.styles";
import { emptyPaymentRecord, initialRecords, PaymentRecord } from './constants';


export const PaymentDetails: FC = () => {
    // Тестовые данные --------------------------------------------------------------------------
    const [records, setRecords] = useState<PaymentRecord[]>(initialRecords);

    // Логика работы с добавлением новых записей -------------------------------------------------

    const [isAdding, setIsAdding] = useState(false);
    const [newRecord, setNewRecord] = useState<Omit<PaymentRecord, 'id'>>(emptyPaymentRecord);

    const handleAdd = () => {
        // В будущем здесь будет API запрос
        const record = {
            id: Date.now(),
            ...newRecord
        };

        setRecords([...records, record]);
        setIsAdding(false);
        setNewRecord(emptyPaymentRecord);
    };

    const handleRecordChange = (field: string, value: string) => {
        setNewRecord(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // Логика изменения записей ----------------------------------------------------------------
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editingRecord, setEditingRecord] = useState<PaymentRecord | null>(null);

    const handleEdit = (id: number) => {
        const recordToEdit = records.find(record => record.id === id);
        if (recordToEdit) {
            setEditingId(id);
            setEditingRecord(recordToEdit);
        }
    };

    const handleSaveEdit = () => {
        if (editingRecord) {
            setRecords(records.map(record =>
                record.id === editingRecord.id ? editingRecord : record
            ));
            setEditingId(null);
            setEditingRecord(null);
        }
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setEditingRecord(null);
    };

    const handleEditChange = (field: keyof PaymentRecord, value: string) => {
        setEditingRecord(prev => prev ? {
            ...prev,
            [field]: value
        } : prev);
    };

    // Удаление записей --------------------------------------------------------------------
    // Добавляем состояние для диалога удаления
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [recordToDelete, setRecordToDelete] = useState<number | null>(null);

    // Обновляем логику удаления
    const handleDeleteClick = (id: number) => {
        setRecordToDelete(id);
        setDeleteDialogOpen(true);
    };

    const handleConfirmDelete = () => {
        if (recordToDelete !== null) {
            // В будущем здесь будет API запрос
            setRecords(records.filter(record => record.id !== recordToDelete));
            setDeleteDialogOpen(false);
            setRecordToDelete(null);
        }
    };

    const handleCancelDelete = () => {
        setDeleteDialogOpen(false);
        setRecordToDelete(null);
    };

    return (
        <>
            <Box sx={styles.formDescription}>Платежные реквизиты</Box>
            <Box sx={styles.container}>

                <Box sx={styles.addButton} onClick={() => setIsAdding(true)}>
                    +
                    <Box sx={{ borderBottom: '1px solid' }}>Создать</Box>
                </Box>

                <TableHeader />

                {isAdding && (
                    <AddPaymentForm
                        newRecord={newRecord}
                        onRecordChange={handleRecordChange}
                        onAdd={handleAdd}
                    />
                )}

                {records.map((record) => (
                    <Box key={record.id} sx={styles.tableRow}>
                        {editingId === record.id ? (
                            <EditPaymentForm
                                editingRecord={editingRecord!}
                                onRecordChange={handleEditChange}
                                onSave={handleSaveEdit}
                                onCancel={handleCancelEdit}
                            />
                        ) : (
                            <>
                                <span title={record.accountName}>{record.accountName}</span>
                                <span title={record.bank}>{record.bank}</span>
                                <span title={record.card}>{record.card}</span>
                                <span title={record.accountNumber}>{record.accountNumber}</span>
                                <span title={record.bik}>{record.bik}</span>
                                <span title={record.correspondentAccount}>{record.correspondentAccount}</span>
                                <IconButton size="small" onClick={() => handleEdit(record.id)}>
                                    <img src={EditIcon} alt="edit" />
                                </IconButton>
                                <IconButton size="small" onClick={() => handleDeleteClick(record.id)}>
                                    <img src={DeleteIcon} alt="delete" />
                                </IconButton>
                            </>
                        )}
                    </Box>
                ))}
            </Box>

            {/* Диалог подтверждения удаления */}
            <Dialog open={deleteDialogOpen} onClose={handleCancelDelete}>
                <DialogTitle>Подтверждение удаления</DialogTitle>
                <DialogContent>
                    Вы действительно хотите удалить эту запись?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelDelete}>Отмена</Button>
                    <Button onClick={handleConfirmDelete} color="error">
                        Удалить
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};