import React from "react";
import {Text,View,Image} from 'react-native';
import sharedStyles from "../styles/sharedStyles.js";


export const Footer=(props)=>{
    return (
        <View style={sharedStyles.footerContainer}>
            <Image style={sharedStyles.footerImage} source={require('../../images/G.png')}/>
            <Text style={sharedStyles.sectionDescription}>
                {' '}
                All rights are reserved by Globomatics Tech Conference 2020.
            </Text>
        </View>
    )
}