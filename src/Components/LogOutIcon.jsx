import { Feather } from '@expo/vector-icons';
import { Pressable } from 'react-native';
const LogOutIcon=() => {
        return (
            <Pressable onPress={(e) => { console.log('LogOutIcon')}} hitSlop={{ left: 10, bottom: 10, top: 10, right: 10 }}>
                <Feather name="log-out" size={24} color="#BDBDBD" />
            </Pressable>)
    }

    export default LogOutIcon