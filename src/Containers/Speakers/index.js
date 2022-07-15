import { Text, View, Button, FlatList, TextInput, Pressable, Image } from "react-native"
import React, { useState } from "react"
import { speakers } from '../../data/speakers.json'
import sharedStyles from "../styles/sharedStyles";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const SearchSessions = (props) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (text) => {
        setSearchText(text);
        props.getSearchText(text);
    }

    const clearSearch = () => {
        this.textInput.clear();
        props.getSearchText('');
    }

    return (
        <View style={sharedStyles.container}>
            <TextInput
                ref={(ref) => this.textInput = ref}
                style={sharedStyles.searchInput}
                onChangeText={(text) => handleSearch(text)}
                placeholder='SearchSessions'
                returnKeyType={'go'}
                autoCorrect={false}
                autoFocus={false}
                keyboardType={'default'}
                multiline={false}
                selectionColor={'green'}
            />
            <Pressable onPress={clearSearch} style={sharedStyles.container}>
                <Image
                    style={sharedStyles.clearImage}
                    source={require('../../images/multiply-1_Orange.png')} />
            </Pressable>
        </View>
    )
}

const renderItem = ({ item, index }) => {
    return (
        <View>
            <SpeakerList
                id={index}
                name={item.name}
                bio={item.bio}
                sessions={item.sessions[0].name}
            />
        </View>
    )
}

const SpeakerList = ({ id, session, bio, name }) => {
    return (
        <View style={sharedStyles.sectionContainer} key={id}>
            <Text style={sharedStyles.sectionTitle}>{'Speaker Name : ' + name}+</Text>
            <Text style={sharedStyles.sectionTitle}>{'bio: ' + bio}+</Text>
            <Text style={sharedStyles.sectionTitle}>{'Session : ' + session}+</Text>
        </View>
    )
}

const SeparatorComponent = () => {
    return <View style={sharedStyles.seperatorStyle}></View>
}

const HeaderComponent = () => {
    return (
        <Header
            image={require('../../images/girl.png')}
            heading={"Awesome speaker limbs"}
            style={sharedStyles.sectionTitleGreen}
        />
    )
}

const FooterComponent=()=>{
    <Footer/>
}

export const Speakers = ({ navigation }) => {
    const [filteredSpeakers, setFilteredSpeakers] = useState(speakers);
    const getSearchText = (text) => {
        let filteredSpeakersList = speakers.filter((value) => {
            value.sessions[0].name.toLowerCase().includes(text.toLowerCase());
        })
        setFilteredSpeakers(filteredSpeakersList);
    }
    return (
        <View>
            <SearchSessions getSearchText={getSearchText} />
            <FlatList
                keyboardDismissMode={'on-drag'}
                keyboardShouldPersistTaps={'always'}
                data={filteredSpeakers}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ItemSeparatorComponent={SeparatorComponent}
                pagingEnabled={false}
                ListHeaderComponent={HeaderComponent}
                ListFooterComponent={FooterComponent}
            />
        </View>
    )
}