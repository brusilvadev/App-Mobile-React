import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header:{
        padding: 16
    },
    headerImage:{
        width: "100%",
        height: 200,
        borderRadius: 8
    },

    restaurantName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5
    },

    subtitle:{
        color: "#666",
        marginTop: 4
    },

    tabs: {
        flexDirection: "row",
        padding: 16,
        borderBottomWidth: 1,
        borderColor: "#eee",
        gap: 16
    },

    tabText:{
        color: "#666"
    }

    
})