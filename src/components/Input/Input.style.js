import { StyleSheet } from "react-native";

export default StyleSheet.create({
    input_container : {
        backgroundColor : '#62727b',
        marginHorizontal : 10,
        borderRadius : 10,
        paddingBottom : 10,
        marginVertical : 10,
    },

    input : {
        marginHorizontal : 5,
        marginBottom : 10,
        borderBottomColor : '#e2f1f8',
        borderBottomWidth : 1,
    },

    button_container : {
        
        flexDirection : 'row',
        justifyContent : 'center',
        
    },

    button : {
        backgroundColor : 'orange',
        padding : 10,
        paddingHorizontal : 30,
        marginHorizontal : 30,
        borderRadius : 10,
    },

    button_reset : {
        backgroundColor : '#e53935',
        padding : 10,
        paddingHorizontal : 35,
        marginHorizontal : 30,
        borderRadius : 10,
        
    },

    button_text : {
        color: 'white',
        fontWeight : 'bold',
        textAlign : 'center',
        
    },

});