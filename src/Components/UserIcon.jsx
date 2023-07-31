import { Feather } from '@expo/vector-icons'
import { Pressable, StyleSheet } from 'react-native'

const UserIcon = () => {
    return (<Pressable style={styles.iconContainer} onPress={(event)=>{console.log('UserIcon')}}>
                <Feather name="user" size={24} color="#212121CC" />
            </Pressable>
        )
}

const styles = StyleSheet.create({
    iconContainer: {
        paddingTop:8
    }
})

export default UserIcon