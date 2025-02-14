import { FC, useEffect, useState } from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import AdditionalFields from './AdditionalFields.tsx';
import ButtonCluster from '../../../components/ButtonCluster/ButtonCluster.tsx';
import { AdditionalFormData } from '../types.ts';

// Определяем интерфейс для контекста
interface AdditionalOutletContext {
    onSuccess: () => Promise<void>;
}

interface AdditionalFormProps {
    onSuccess?: () => Promise<void>;
}

const AdditionalForm: FC<AdditionalFormProps> = ({ onSuccess }) => {
    const { id } = useParams();
    const outletContext = useOutletContext<AdditionalOutletContext>();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<AdditionalFormData>({
        agreement: '',
        number: '',
        startDate: null,
        amount: '',
    });

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                // const response = await api.getAdditionalById(id);
                // setFormData(response.data);
            };
            fetchData();
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

    const handleSuccess = async () => {
        if (onSuccess) {
            await onSuccess();
        } else if (outletContext?.onSuccess) {
            await outletContext.onSuccess();
        }
    };

    const handleSubmit = async () => {
        try {
            if (id) {
                // await api.updateAdditional(id, formData);
            } else {
                // await api.createAdditional(formData);
            }
            // После успешного сохранения обновляем таблицу
            await handleSuccess();
            // Навигация обратно или очистка формы
        } catch (error) {
            // Обработка ошибок
        }
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