import { Text, View, TextInput, Pressable, Image, SectionList,TouchableOpacity } from "react-native"
import React, { useState } from "react"
import { sessions } from '../../data/sessions.json';
import sharedStyles from "../styles/sharedStyles";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const SessionsList = (props) => {
    const [moreInfo, setMoreInfo] = useState(false);

     return (
        <View key={props.id} style={sharedStyles.sectionContainer}>
            <Text style={sharedStyles.sectionTitle}>{'Session : ' + props.name}</Text>
            <Text style={sharedStyles.sectionDescription}>{'Speaker : '+props.speaker}</Text>

            <TouchableOpacity onPress={()=>setMoreInfo(!moreInfo)}>
                <Text style={sharedStyles.clickableText}>
                    {moreInfo?'Hide Details':'Show More Details'}
                </Text>
            </TouchableOpacity>
            {
                moreInfo && (
                    <>
                        <Text style={sharedStyles.sectionDescription}>
                            {'Details : '+props.desc}
                        </Text>

                        <Text style={sharedStyles.sectionDescription}>
                            {'Room : '+props.room}
                        </Text>

                        <Text style={sharedStyles.sectionDescription}>
                            {'Level : '+props.level}
                        </Text>
                    </>
                )
            }
        </View>
    )
}

const renderItem = ({ item, index }) => {
    return (
        <View>
            <SessionsList
                id={index}
                name={item.title}
                desc={item.description}
                speaker={item.speakers[0].name}
                level={item.level}
                room={item.room}
            />
        </View>
    )
}


const SeparatorComponent = () => {
    return <View style={sharedStyles.seperatorStyle}></View>
}

const HeaderComponent = () => {
    return (
        <Header
            image={require('../../images/sec2.jpg')}
            heading={"Awesome sessions"}
            style={sharedStyles.sectionTitleGreen}
        />
    )
}

const FooterComponent = () => {
    <Footer />
}

const renderSectionHeader=({section})=>{
    return (
        <View style={sharedStyles.headerContainer}>
            <Text style={sharedStyles.headerTitle}>{section.title}</Text>
        </View>
    )
}

export const Sessions = ({ navigation }) => {
    return (
        <View>
            <SectionList
                sections={sessions}
                renderItem={renderItem}
                ListHeaderComponent={HeaderComponent}
                ListFooterComponent={FooterComponent}
                ItemSeparatorComponent={SeparatorComponent}
                stickySectionHeadersEnabled={true}
                keyExtractor={(item, index) => index}
                renderSectionHeader={renderSectionHeader}
            />
        </View>
    )
}