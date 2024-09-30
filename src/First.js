import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

function First({ navigation }) {
    function switchPage(){
        navigation.navigate('Second',{username : "ufukincibas"})
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>First Page</Text>
            <Button title="Go to Second" onPress={switchPage}/>
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
    text: {
        fontSize: 24, // Yazı boyutu
        fontWeight: "bold", // Yazı kalınlığı
        color: "#333", // Yazı rengi
    },
});

export default First;
