import { SxProps, Theme } from '@mui/material';

export const styles: Record<string, SxProps<Theme>> = {
    container: {
        marginLeft: '100px',
        maxWidth: '1300px',
    },
    profileTitle: {
        paddingBottom: '8px',
        maxWidth: '375px',
        fontSize: '32px',
        textAlign: 'center',
        fontWeight: '500',
        color: '#000',
        borderBottom: '2px solid #3217ca'
    },
    inputGroup: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        mb: 4,
        mt: 3
    },
    additionalSection: {
        mt: 8,
        mb: 16
    },
    collapsibleHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: '#FEFEFF',
        borderRadius: '4px',
        cursor: 'pointer',
        marginBottom: '16px',
        '& .expand-icon': {
            color: '#666',
            fontSize: '12px',
            transition: 'transform 0.3s ease'
        },
        '&:hover': {
            backgroundColor: '#eeeeee'
        }
    },
    collapsibleContent: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
        padding: '24px 0',
    },
    passportGroup: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '16px',
        mb: 3
    },
    actionButtons: {
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 4
    },
    saveButton: {
        backgroundColor: '#1a237e',
        color: 'white',
        padding: '8px 32px',
        '&:hover': {
            backgroundColor: '#000051'
        }
    },
    cancelButton: {
        borderColor: '#1a237e',
        color: '#1a237e',
        padding: '8px 32px',
        '&:hover': {
            borderColor: '#000051',
            color: '#000051'
        }
    }
};
