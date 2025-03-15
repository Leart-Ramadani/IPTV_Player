import React, { useState } from "react";
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    TextInput,
} from "react-native";
import ChannelsCategory from "../components/ChannelsCategory";
import ChannelsList from "../components/ChannelsList";
import Header from "../components/Header";

const categories = [
    { name: 'AL | Albania Premium' },
    { name: 'AL | Sport' },
    { name: 'AL | Lajmet' }
];

const channels = [
    { id: '1', title: 'Channel One', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQstcAZBjOpo6vzfXMZwtA-AZ-SZ8u6jNFQYQ&s' },
    { id: '2', title: 'Channel Two', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQstcAZBjOpo6vzfXMZwtA-AZ-SZ8u6jNFQYQ&s' },
    { id: '3', title: 'Channel Three', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQstcAZBjOpo6vzfXMZwtA-AZ-SZ8u6jNFQYQ&s' }
];

const SubCategoryLive = () => {
    // States for filtering
    const [categorySearch, setCategorySearch] = useState("");
    const [channelSearch, setChannelSearch] = useState("");

    // Filter categories based on search input
    const filteredCategories = categories.filter(item =>
        item.name.toLowerCase().includes(categorySearch.toLowerCase())
    );

    // Filter channels based on search input
    const filteredChannels = channels.filter(channel =>
        channel.title.toLowerCase().includes(channelSearch.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <Header />
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {/* Categories Section */}
                <View style={styles.categoriesWrapper}>
                    <View style={styles.searchWrapper}>
                        <TextInput
                            style={styles.input}
                            placeholder="Search Categories"
                            placeholderTextColor="#888"
                            value={categorySearch}
                            onChangeText={text => setCategorySearch(text)}
                        />
                    </View>
                    <ScrollView>
                        {filteredCategories.map((item, index) => (
                            <ChannelsCategory key={index} title={item.name} />
                        ))}
                    </ScrollView>
                </View>

                {/* Channels Section */}
                <View style={styles.additionalWrapper}>
                    <View style={styles.searchWrapper}>
                        <TextInput
                            style={styles.input}
                            placeholder="Search Channels"
                            placeholderTextColor="#888"
                            value={channelSearch}
                            onChangeText={text => setChannelSearch(text)}
                        />
                    </View>
                    <ScrollView>
                        {filteredChannels.map(channel => (
                            <ChannelsList key={channel.id} title={channel.title} image={channel.image} />
                        ))}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        padding: 10,
    },
    categoriesWrapper: {
        width: 250, // Fixed width for categories
        backgroundColor: '#444',
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
    },
    additionalWrapper: {
        flex: 1, // Takes up the remaining horizontal space
        backgroundColor: '#555',
        borderRadius: 10,
        padding: 10,
    },
    searchWrapper: {
        borderWidth: 1,
        borderColor: '#ddd',
        width: '100%',
        height: 40,
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    input: {
        color: '#fff',
    },
});

export default SubCategoryLive;
