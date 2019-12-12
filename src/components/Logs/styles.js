export const styles = {
    tasksContainer: {
        background: '#ffffff',
        boxShadow: `0 4px 4px 0 rgba(0,0,0,0.26), 0 7px 14px 0 rgba(0,0,0,0.19)`,
        borderRadius: 2,
        width: 1110,
        height: 'auto',
        marginLeft: 66,
        marginTop: 40
    },
    logsInternalContainer: {
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
        width: 848,
        marginLeft: 40,
        textAlign: 'left',
        color: 'rgba(0,0,0,0.87)',
        fontSize: 13
    },
    logSectionOdd: {
        background: '#F1F1F1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height:55,
        marginBottom: 20
    },

    logSectionEven: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    iconAndBody: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft:26
    },
    logDate:{
        marginRight:40
    },
    costumer: {
        marginLeft: 30,
        fontSize: 18,
        color: '#4a4a4a',
        fontWeight: 'bold'
    },
    icon:{
        fill: 'green',
        width:20,
        height:20,
    },
    btnWrapper:{
        display: 'flex',
        alignItems:'center',
        flexDirection:'row',
    },
    btnContainer:{
        display: 'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent: 'flex-end',
        marginRight: 36
    },
    btn:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginLeft: 30,
        background:'#cfcfcf',
        boxShadow: '0 0 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24)',
        textAlign:'center',
        color:'#292d45',
        fontSize: 14,
        borderRadius:2,
        width:137,
        height:36,
        marginTop:10,
        marginBottom:29
    },
    textArea:{
        marginBottom:20
    }
};
export { styles as default };
