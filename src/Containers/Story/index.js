import { Text, View,Button } from "react-native"
import React from "react"

export const Story=({navigation})=>{
    return(
        <View>
            <Text>Know our story</Text>
            <Button title="Go to home"
            onPress={(e)=>{
                navigation.navigate('Home');
            }}/>
        </View>
    )
}