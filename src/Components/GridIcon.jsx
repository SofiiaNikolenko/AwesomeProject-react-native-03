import { Feather } from '@expo/vector-icons'
import { Pressable,StyleSheet } from 'react-native'
const GridIcon = () => {
    return (<Pressable style={styles.iconContainer} onPress={(event)=>{console.log('GridIcon')}}>
                <Feather name="grid" size={24} color="rgba(33, 33, 33, 0.8)" />
            </Pressable>
        )
}

const styles = StyleSheet.create({
    iconContainer: {
        paddingTop:8
    }
})

export default GridIcon