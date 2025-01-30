export const styles = {
    additionalSection: {
        mt: 8,
        mb: 16
    },

    collapsibleHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
        cursor: 'pointer',
        marginBottom: '16px',
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

    expandIcon: {
        color: '#666',
        fontSize: '12px',
        transition: 'transform 0.3s ease'
    },
    
    formDescription: {
        fontSize: '20px',
        fontWeight: '600',
        color: '#333',
        margin: '40px auto 20px auto'
    }
}