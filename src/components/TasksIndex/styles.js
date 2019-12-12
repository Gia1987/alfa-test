export const styles = {
    tasksContainer: {
        position: 'fixed',
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
        marginTop: 25
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
    taskWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 23,
        minHeight: 35,
        textAlign: 'left',
        color: 'rgba(0,0,0,0.87)',
        fontSize: 12
    },
    task: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },

    containerOdd: {
        width: 1050,
        marginLeft: 23,
        background: '#F1F1F1'
    },
    containerEven: {
        width: 1050,
        marginLeft: 23,
        background: '#ffffff'
    },
    note: {
        marginLeft: 88
    },
    date: {
        marginLeft: 118
    },
    taskId: {
        marginLeft: 23
    },
    noteTitle: {
        marginLeft: 56
    },
    dateTitle: {
        marginRight: 150,
        marginLeft: 150
    },
    body: {
        marginLeft: 9
    },
    btn: {
        background: 'none',
        marginLeft: 20
    },
    bodyEven: {
        background: '#ffffff',
        width: 1050,
        marginLeft: 23,
        minHeight: 100,
        textAlign: 'left',
        color: 'rgba(0,0,0,0.87)',
        fontSize: 12
    },
    bodyOdd: {
        background: '#F1F1F1',
        width: 1050,
        marginLeft: 23,
        minHeight: 100,
        textAlign: 'left',
        color: 'rgba(0,0,0,0.87)',
        fontSize: 12
    },
    viewTask: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: 35,
        marginTop: 50,
        fontSize: 14
    }
};

export { styles as default };
