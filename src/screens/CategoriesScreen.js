import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const categories = [
    { title: "Live TV", screen: "SubCategoryLive" },
    { title: "Movies", screen: "SubCategoryLive" },
    { title: "Series", screen: "SubCategoryLive" }
];

const CategoriesScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.categoryWrapper}>
                {categories.map((category, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.categoryButton}
                        activeOpacity={.7}
                        onPress={() => navigation.navigate(category.screen)}
                    >
                        <Text style={styles.text}>{category.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
    },
    categoryWrapper: {
        flexDirection: "row",
        gap: 20, // Space between buttons
    },
    categoryButton: {
        width: 150,
        height: 150, // Making it a square
        backgroundColor: "#444",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10, // Slight rounding for a modern look
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default CategoriesScreen;
