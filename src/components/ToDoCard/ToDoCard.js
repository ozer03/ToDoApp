import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ToDoCard.style';

const ToDoCard = ({toDo,changeIsDone,deleteToDo}) => {
    return (
        <TouchableOpacity
         onPress={() => changeIsDone(toDo.id)}
         onLongPress={() => deleteToDo(toDo.id)}
        >
            <View style={toDo.isDone ? styles.completed : styles.container}>
            <Text style={toDo.isDone ? styles.completed_text : styles.text}>{toDo.name}</Text>
        </View>
        </TouchableOpacity>
        
    )
}

export default ToDoCard;