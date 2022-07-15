import React from "react";
import {Text,View,Image} from 'react-native';
import sharedStyles from "../styles/sharedStyles.js";


export const Header=(props)=>{
    return (
        <View style={sharedStyles.sectionContainer}>
            <Image style={sharedStyles.headerImage} source={props.image}/>
            <Text style={props.style}>{props.heading}</Text>
        </View>
    )
}