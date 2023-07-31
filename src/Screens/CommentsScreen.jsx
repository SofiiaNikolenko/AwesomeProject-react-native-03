import { View, Text, StyleSheet } from "react-native"

const CommentsScreen = () => {
    return (
        <View style={styles.contaner}>
                <Text >CommentsScreen</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    contaner: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
})

export default CommentsScreen