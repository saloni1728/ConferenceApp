import { Text, View, Button, Image, Pressable,ScrollView } from "react-native"
import React from "react"
import sharedStyles from "../styles/sharedStyles"

export const Conference = ({ navigation }) => {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={sharedStyles.scrollView}
        >
            <Image style={sharedStyles.image} source={require("../../images/Bitmap.png")} />
            <View style={sharedStyles.body}>
                <View style={sharedStyles.sectionContainer}>
                    <Text style={sharedStyles.sectionTitleStory}>Globomatics Conference</Text>
                    <Text style={sharedStyles.sectionDescriptionStory}>Join us</Text>
                    <View style={sharedStyles.buttonWrapper}>
                        <Pressable
                            style={sharedStyles.buttonStyle}
                            onPress={() => {
                                navigation.navigate('Sessions', { name: 'Sessions' })
                            }}
                        >
                            <Text style={sharedStyles.buttonText}>Sessions</Text>
                        </Pressable>

                        <Pressable
                            style={sharedStyles.buttonStyle}
                            onPress={() => {
                                navigation.navigate('Speakers', { name: 'Speakers' })
                            }}
                        >
                            <Text style={sharedStyles.buttonText}>Speakers</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}