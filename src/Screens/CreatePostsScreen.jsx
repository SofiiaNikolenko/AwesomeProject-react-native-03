import { View, Text,StyleSheet } from "react-native"

const CreatePostsScreen = () => {
     return (
        <View style={styles.contaner}>
                <Text >CreatePostsScreen</Text>
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
export default CreatePostsScreen