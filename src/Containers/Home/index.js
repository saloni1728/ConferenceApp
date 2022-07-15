import { Button, Image, Pressable, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native"
import React from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
import sharedStyles from "../styles/sharedStyles"
export const Home = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle='dark-content' />
            <SafeAreaView style={sharedStyles.mainContainer}>
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={sharedStyles.scrollView}>
                    <Image style={sharedStyles.image} source={require('../../images/hero_image.png')} />
                    <View style={sharedStyles.body}>
                        <View style={sharedStyles.sectionContainer}>
                            <Text style={sharedStyles.sectionTitle}>Housing Tech Conference</Text>
                            <Text style={sharedStyles.sectionDescription}>Maniacally taking tech to globe</Text>
                        </View>

                        <View style={sharedStyles.sectionContainer}>
                            <Pressable onPress={() => {
                                navigation.navigate('Conference', { name: 'Conference' })
                            }}>
                                <Text style={sharedStyles.sectionTitle}>Conference</Text>
                            </Pressable>
                            <Text style={sharedStyles.sectionDescription}>View Confernce session and speakers</Text>
                        </View>

                        <View style={sharedStyles.sectionContainer}>
                            <Pressable onPress={() => {
                                navigation.navigate('Story', { name: 'Story' })
                            }}>
                                <Text style={sharedStyles.sectionTitle}>Story</Text>
                            </Pressable>
                            <Text style={sharedStyles.sectionDescription}>Learn more about us</Text>
                        </View>

                        <View style={sharedStyles.sectionContainer}>
                            <Text style={sharedStyles.sectionTitle}>Submit Sessions</Text>
                            <Text style={sharedStyles.sectionDescription}>Are you interested in speaking?Submit a session!</Text>
                        </View>

                        <View style={sharedStyles.sectionContainer}>
                            <Text style={sharedStyles.sectionTitle}>Feedback</Text>
                            <Text style={sharedStyles.sectionDescription}>We'd love to hear from you</Text>
                        </View>

                        <View style={sharedStyles.sectionContainer}>
                            <Text style={sharedStyles.sectionTitle}>Learn More</Text>
                            <Text style={sharedStyles.sectionDescription}>What to do next?</Text>
                        </View>

                        <View style={sharedStyles.sectionContainer}>
                            <View style={sharedStyles.footer}>
                                <Image
                                    style={{ width: 300, height: 70, resizeMode: 'stretch', position:'relative' }}
                                    source={require('../../images/pluralsight-white.png')} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}