import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ChannelsList = ({ title, image }) => {
    // Local state to track if the channel is a favorite
    const [isFavorite, setIsFavorite] = useState(false);

    // Toggle favorite state
    const toggleFavorite = () => {
        setIsFavorite(prev => !prev);
    };

    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.channelItemWrapper}
            >
                <View style={styles.imageTextWrapper}>
                    <Image
                        source={{ uri: image }}
                        style={styles.channelImage}
                    />
                    <Text style={styles.channelText}>{title}</Text>
                </View>
                <TouchableOpacity
                    style={styles.favouriteButton}
                    onPress={toggleFavorite}
                >
                    <MaterialCommunityIcons
                        name={isFavorite ? "cards-heart" : "cards-heart-outline"}
                        color={isFavorite ? "red" : "#fff"}
                        size={25}
                    />
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    channelItemWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 10,
    },
    channelImage: {
        width: 30,
        height: 30,
        borderRadius: 5,
        marginRight: 15,
    },
    channelText: {
        color: '#fff',
        fontSize: 16,
    },
    favouriteButton: {
        padding: 5
    },
    imageTextWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default ChannelsList;
