export const styles = {
    container:{
        display: 'flex',
        flexDirection: 'column'
    },
    tasksContainer: {
        background: '#ffffff',
        boxShadow: `0 4px 4px 0 rgba(0,0,0,0.26), 0 7px 14px 0 rgba(0,0,0,0.19)`,
        borderRadius: 2,
        width: 1110,
        height: 'auto',
        marginLeft: 66,
        marginTop: 115
    },
    tasksInternalContainer: {
        marginBottom: 75
    },
    title: {
        fontSize: 18,
        color: '#4a4a4a',
        textAlign: 'left',
        marginLeft: 23,
        marginTop: 25,
    },
    line: {
        border: '1px solid #979797',
        width: 1051,
        marginLeft: 23,
        marginTop: 6,
        marginBottom: 23
    },
    tasksHeader: {
        display: 'flex',
        flexDirection: 'column'
    },
    body: {
        background: '#ffffff',
        width: 1050,
        marginLeft: 26,
        textAlign: 'left',
        color: 'rgba(0,0,0,0.87)',
        fontSize: 12
    },
    imageAndName: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    profileSection: {
        width: 1050,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 26,
        marginBottom: 16
    },
    costumer: {
        marginLeft: 30,
        fontSize: 18,
        color: '#4a4a4a',
        fontWeight: 'bold'
    },
    log:{
        marginTop: -50
    }
};
export { styles as default };
