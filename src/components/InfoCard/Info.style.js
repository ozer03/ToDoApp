import { StyleSheet } from "react-native";

export default StyleSheet.create({
    info_container : {
        backgroundColor : '#dcedc8',
        margin : 10,
        borderRadius : 10,
        justifyContent : 'space-between',
        opacity : 0.6,
    },

    info_button_container : {
        position : 'absolute',
        right : 5,
        top : 5,
    },
    info_button : {
        borderWidth : 2,
        borderRadius : 50,
        width : 20,
        height : 20,
        textAlign : 'center',
        fontWeight : 'bold',
    },
    info_inner : {},
    info_text : {
        fontWeight : 'bold',
        paddingRight : 18,
        paddingLeft : 5,
        paddingBottom : 10,
    },

    hide : {
        display : 'none',
    },
});