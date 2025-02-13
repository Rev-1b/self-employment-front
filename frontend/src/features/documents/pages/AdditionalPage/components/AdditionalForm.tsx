import { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdditionalFields from './AdditionalFields.tsx';
import ButtonCluster from '../../../components/ButtonCluster/ButtonCluster.tsx';
import { AdditionalFormData } from '../types.ts';

const AdditionalForm: FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState<AdditionalFormData>({
        agreement: '',
        number: '',
        startDate: null,
        amount: '',
    });

    useEffect(() => {
        if (id) {
            // Загрузка данных по id
        }
    }, [id]);

    const handleChange = (field: keyof AdditionalFormData) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [field]: event.target.value,
        }));
    };

    const handleDateChange = (field: 'startDate' | 'endDate') => (
        date: Date | null
    ) => {
        setFormData((prev) => ({
            ...prev,
            [field]: date,
        }));
    };

    const handleCancel = () => {
        navigate('..');  // Возврат к списку
    };

    return (
        <>
            <AdditionalFields
                formData={formData}
                onFieldChange={handleChange}
                onDateChange={handleDateChange}
            />
            <ButtonCluster onCancelClick={handleCancel} />
        </>
    );
};

export default AdditionalForm; 