import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        marginTop: '50%'      
    },
    title:{
        fontSize: 30,
        marginBottom: 30,
        alignSelf: 'center',
        color: 'blue',
        fontWeight: 'bold'
    },
    buttom:{
        marginTop: 10
    },
    contentButton:{
        
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap:20,
        marginTop:10
    },
    buttonParams:{
        width:150,
        height:80,
        borderRadius:10,
        backgroundColor:'#66ced1', 
    },
    text:{
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        
    },
    image:{
        height: 300,
        width: 300,
        alignSelf:'center',
        marginTop: '50%'
    },
    numeros:{
        width:300,
        fontSize: 20,
        backgroundColor:'#b6a28c',
        textAlign: 'center',
        borderRadius:10,
        columnGap: 20,
        alignSelf: 'center'

    },
    resultado:{
        fontWeight:'bold',
        fontSize: 20,
        textAlign:'center',
        paddingTop: 20
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    botones:{
        width:150,
        height:60,
        borderRadius:10,
        backgroundColor:'#66ced1',
        alignSelf: 'center',
        
    },
})