import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import DocumentNavigation from "../../components/DocumentNavigation/DocumentNavigation";
import AgreementForm from "./components/AgreementForm";

const AgreementPage: FC = () => {
    const navigate = useNavigate();
    const { agreementId } = useParams();
    
    const handleNavigate = (path: string) => {
        navigate(`/base/documents/agreements/${path}`);
    };

    const AgreementPage: FC = () => {
        const dispatch = useDispatch();
        const navigate = useNavigate();
    
        const handleCreateAgreement = async (formData: any) => {
            try {
                const response = await createAgreementAPI(formData);
                dispatch(setCurrentAgreement(response.data));
                navigate(`/base/documents/agreements/${response.data.id}`);
            } catch (error) {
                // Обработка ошибок
            }
        };

    const handleSubmit = async (formData: any) => {
        if (agreementId) {
            // Обновление существующего договора
            await updateAgreement(agreementId, formData);
        } else {
            // Создание нового договора
            const newAgreementId = await createAgreement(formData);
            navigate(`/base/documents/agreements/agreement/${newAgreementId}`);
        }
    };

    return (
        <Box>
            <DocumentNavigation 
                agreementId={agreementId} 
                onNavigate={handleNavigate}
            />
            <AgreementForm 
                agreementId={agreementId}
                onSubmit={handleSubmit}
            />
        </Box>
    );
};

export default AgreementPage;