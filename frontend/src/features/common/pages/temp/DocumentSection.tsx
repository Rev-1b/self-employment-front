import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { clearCurrentAgreement } from '../../../../store/features/agreement/agreementSlice';

const DocumentsSection: FC = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    // Очищаем договор при выходе из раздела документов
    useEffect(() => {
        return () => {
            if (!location.pathname.includes('/documents')) {
                dispatch(clearCurrentAgreement());
            }
        };
    }, [location, dispatch]);

    return <Outlet />;
};

export default DocumentsSection;