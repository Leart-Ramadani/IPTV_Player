import React from "react";
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image
} from "react-native";

const categories = [
    { name: 'AL | Albania Premium' },
    { name: 'AL | Sport' },
    { name: 'Lajmet' }
];

const channels = [
    { id: '1', title: 'Channel One', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQstcAZBjOpo6vzfXMZwtA-AZ-SZ8u6jNFQYQ&s' },
    { id: '2', title: 'Channel Two', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQstcAZBjOpo6vzfXMZwtA-AZ-SZ8u6jNFQYQ&s' },
    { id: '3', title: 'Channel Three', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQstcAZBjOpo6vzfXMZwtA-AZ-SZ8u6jNFQYQ&s' }
];

const SubCategoryLive = () => {
    return (
        <View style={styles.container}>
            {/* Categories Section */}
            <View style={styles.categoriesWrapper}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search Categories"
                        placeholderTextColor="#888"
                    />
                </View>
                <ScrollView>
                    {categories.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            activeOpacity={0.5}
                            style={styles.categoryItemWrapper}
                        >
                            <Text style={styles.categoryItemText}>{item.name}</Text>
                        </TouchableOpacity>
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
                    />
                </View>
                <ScrollView>
                    {channels.map(channel => (
                        <TouchableOpacity
                            key={channel.id}
                            activeOpacity={0.5}
                            style={styles.channelItemWrapper}
                        >
                            <Image
                                source={{ uri: channel.image }}
                                style={styles.channelImage}
                            />
                            <Text style={styles.channelText}>{channel.title}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row", // Arrange categories and channels in a row
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
    categoryItemWrapper: {
        flexDirection: 'row',
        marginBottom: 5,
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 10,
    },
    categoryItemText: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center'
    },
    channelItemWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 10,
    },
    channelImage: {
        width: 35,
        height: 35,
        borderRadius: 5,
        marginRight: 10,
    },
    channelText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default SubCategoryLive;
