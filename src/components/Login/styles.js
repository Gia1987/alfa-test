export const styles = {
    loginWrapper: {
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 200,
        height: `calc(100vh - 70)`
    },
    loginInternalWrapper :{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        padding: 70,
        height: `calc(100vh - 70)`
    },
    loginInput: {
        margin: 10
    },
    loginNotification: {
        position: 'fixed',
        bottom: 20
    },
    btn:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center',
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
};
export { styles as default };
