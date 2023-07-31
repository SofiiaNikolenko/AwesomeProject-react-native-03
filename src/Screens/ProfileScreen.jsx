import { View, Text,StyleSheet } from "react-native"

const ProfileScreen = () => {
       return (
        <View style={styles.contaner}>
                <Text >ProfileScreen</Text>
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
export default ProfileScreen