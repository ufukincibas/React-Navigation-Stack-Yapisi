import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Button from "./Components/Button";

function Welcome({ navigation }) {
    function goToMemberSign(){
        navigation.navigate("MemberSign")
    }
    

    return (
        <View style={styles.container} >
            <Text style={styles.header} >First Page</Text>
             <Button text='uye kaydı olustur' onPress={goToMemberSign} />
        </View>
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0", // Arka plan rengi
        
    },
    header: {
        fontSize: 24, // Yazı boyutu
        fontWeight: "bold", // Yazı kalınlığı
        color: "#333", // Yazı rengi
    },
});





export default Welcome;
