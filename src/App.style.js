import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container : {
        flex: 1,
        justifyContent : 'space-between',
        backgroundColor : '#102027',
    },

    title_container: {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginHorizontal : 10,
        marginVertical : 5,
        borderBottomWidth : 2,
        borderBottomColor : '#62727b',
        paddingBottom : 5,
    },

    title : {
        fontWeight : 'bold',
        color : 'orange',
        fontSize : 30,
    },

    counter : {
        fontWeight : 'bold',
        color : 'orange',
        fontSize : 30,
    },

    flat : {
      flex : 1,  
    }, 

    info_button : {
        
    },

    info_cont : {
        flex : 1,
        justifyContent : 'center',
    },

    info_text : {
        color : 'white',
        fontWeight : 'bold',
        backgroundColor : '#4dd0e1',
        textAlign : 'center',
        paddingHorizontal : 15,
        borderRadius : 5,
    },

})