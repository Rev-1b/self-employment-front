export const styles = {
    container: {
        padding: '24px',
        height: '100%',
        overflow: 'auto'
    },
    userName: {
        marginBottom: '24px'
    },
    buttonGroup: {
        display: 'flex',
        gap: '16px',
        marginBottom: '32px'
    },
    button: {
        borderRadius: '20px',
        textTransform: 'none'
    },
    profitSection: {
        marginBottom: '32px'
    },
    profitAmount: {
        color: '#000',
        fontWeight: 'bold'
    },
    chartSection: {
        marginBottom: '32px'
    },
    contentSection: {
        display: 'flex',
        gap: '24px'
    },
    documentsSection: {
        flex: 1,
        padding: '24px'
    },
    statisticsSection: {
        flex: 1,
        padding: '24px'
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        '& th, & td': {
            padding: '12px',
            textAlign: 'left',
            borderBottom: '1px solid #eee'
        }
    },
    statsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '16px',
        marginTop: '16px'
    },
    statItem: (color: string) => ({
        backgroundColor: `${color}15`,
        padding: '16px',
        borderRadius: '8px',
        '& h4': {
            marginTop: '8px',
            color: color
        }
    })
};
