import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.homeButton} onPress={() => { navigation.navigate('CategoriesScreen') }}>
                <FontAwesome5 name={"home"} color={"#fff"} size={20} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#444',
        marginBottom: 10,
        padding: 10,
        borderRadius: 10
    },
    homeButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333',
        borderRadius: 6
    }
});

export default Header;