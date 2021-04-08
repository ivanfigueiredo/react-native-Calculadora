import {React} from 'react';
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    page: {
        flex:1,
        backgroundColor:"#FF0000",
        marginTop:30,
    },

    topo: {
        
        flexDirection:"column",
        //justifyContent:"flex-end",
        alignItems:"flex-end",
        backgroundColor:"#0000FF",
        height:"36%",
    },
    
    result: {
        
        
        flexDirection:"row",
        //justifyContent:"flex-end",
        alignItems:"flex-end",
        backgroundColor:"#0000FF",
        height:"16%",
        textAlign:"left",

    },
    
    texto: {
        position:"absolute",
        marginRight:10,
        fontSize:50,
        color:"#FFFFFF",
    },

    area: {
        height:"50%",
        backgroundColor:"#FFFFFF",
        borderColor:"#00BFFF",
        flexWrap:"wrap",
    },

    item: {
        flexDirection:"row",
        backgroundColor:"#00FFFF",
        justifyContent:"center",
        alignItems:"center",
        height:"30%",
        width:"15%",
        paddingTop:10,
        marginTop:6,
        margin:3,
        marginLeft:4,
        color:"#000000",
        borderColor:"#778899"
    },

    itemText: {
        fontSize:20,
        color:"#000000",
    },
});

export default styles;