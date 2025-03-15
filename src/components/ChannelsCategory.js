import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const ChannelsCategory = ({ title }) => {
    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.categoryItemWrapper}
            >
                <Text style={styles.categoryItemText}>{title}</Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
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
});

export default ChannelsCategory;