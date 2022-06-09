import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './Info.style';

const InfoCard = ({setShowHide}) => {
    const [hide, setHide] = useState(true);

    const hideShowInfo = () => {
        setHide(!hide)
        setShowHide(false);
    };
    return (
        <TouchableOpacity style={hide ? styles.info_container : styles.hide} onPress={hideShowInfo}>
                <View style={styles.info_button_container}>
                <Text style={styles.info_button}>X</Text>
                </View>
            <View style={styles.info_inner}>
            <Text style={styles.info_text}>
                Eklediğiniz görevlere 1 defa dokunursanız tamamlanmış olarak işaretleyebilirsiniz. 
                Herhangi bir göreve uzun dokursanız silinir.
            </Text>
            </View>
        </TouchableOpacity>
        
    )
}

export default InfoCard;