import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'
export const ButtonNewPost = () => {
    return (
        <Pressable style={styles.button} onPress={()=>{console.log('ButtonNewPost')}}>
                <Ionicons name="add-outline" size={24} color="#FFFFFF" />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        width: 70,
        height: 40,
        backgroundColor: "#FF6C00",
        borderRadius: 20,
        marginLeft: 39,
        marginRight:39,
    }
})