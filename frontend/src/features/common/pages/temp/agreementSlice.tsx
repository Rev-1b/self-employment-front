import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Интерфейс для документов, связанных с договором
interface RelatedDocuments {
    appendixes: number[];
    acts: number[];
    invoices: number[];
    checks: number[];
}

// Интерфейс договора
interface Agreement {
    id: string;
    number: string;
    name: string;
    startDate: string;
    endDate: string;
    customer: string;
    sum: number;
    relatedDocuments: RelatedDocuments;
}

// Состояние слайса
interface AgreementState {
    currentAgreement: Agreement | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: AgreementState = {
    currentAgreement: null,
    isLoading: false,
    error: null
};

const agreementSlice = createSlice({
    name: 'agreement',
    initialState,
    reducers: {
        // Установка текущего договора
        setCurrentAgreement: (state, action: PayloadAction<Agreement>) => {
            state.currentAgreement = action.payload;
            state.error = null;
        },
        // Очистка текущего договора
        clearCurrentAgreement: (state) => {
            state.currentAgreement = null;
            state.error = null;
        },
        // Обновление данных текущего договора
        updateCurrentAgreement: (state, action: PayloadAction<Partial<Agreement>>) => {
            if (state.currentAgreement) {
                state.currentAgreement = {
                    ...state.currentAgreement,
                    ...action.payload
                };
            }
        },
        // Добавление связанного документа
        addRelatedDocument: (state, action: PayloadAction<{type: keyof RelatedDocuments, id: number}>) => {
            const { type, id } = action.payload;
            if (state.currentAgreement) {
                state.currentAgreement.relatedDocuments[type].push(id);
            }
        },
        // Удаление связанного документа
        removeRelatedDocument: (state, action: PayloadAction<{type: keyof RelatedDocuments, id: number}>) => {
            const { type, id } = action.payload;
            if (state.currentAgreement) {
                state.currentAgreement.relatedDocuments[type] = 
                    state.currentAgreement.relatedDocuments[type].filter(docId => docId !== id);
            }
        }
    }
});

export const { 
    setCurrentAgreement, 
    clearCurrentAgreement, 
    updateCurrentAgreement,
    addRelatedDocument,
    removeRelatedDocument 
} = agreementSlice.actions;

export default agreementSlice.reducer;