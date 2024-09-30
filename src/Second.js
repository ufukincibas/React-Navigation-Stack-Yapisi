import React from "react";
import { Text , View ,  } from "react-native";

function Second(navigation){
    const user = navigation.route.params.username;
    return(
        <View>
            <Text>{user}</Text>
            <Text>Second Page</Text>
        </View>
    )
}

export default Second;