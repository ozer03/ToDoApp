import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from './Input.style';

const Input = ({text, handleAddGorev, setText, resetAllGorev}) => {
    return (
        <View style={styles.input_container}>

          <TextInput 
            style={styles.input}
            placeholder="Bugün ne yapacaksın?"
            placeholderTextColor={'white'}
            value = {text}
            onChangeText ={setText}
          />
          <View style={styles.button_container}>
            <TouchableOpacity style={styles.button} onPress={handleAddGorev}>
                <Text style={styles.button_text}>Kaydet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_reset} onPress={resetAllGorev}>
                <Text style={styles.button_text}>Reset</Text>
            </TouchableOpacity>
          </View>
          
        </View>
    )
}

export default Input;