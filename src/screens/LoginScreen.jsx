import {View, StyleSheet,Pressable, Text, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export const LoginScreen = () => {
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('') 
    const [passwordVisibility, setPasswordVisibility] = useState(true);

    const navigation = useNavigation()
    const onLoginButtonPress = () => {
           if(!email || !password){return}
        console.log('Email:', email + ', Password:', password)
        navigation.navigate('Home', {
   screen: 'PostsScreen',
   params: {email, password},
})
        }
        
    const toggleShowPassword = () => {
               setPasswordVisibility(!passwordVisibility)
       }
        
    
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? '-250' : '-250'}
                >
                    <View style={styles.loginContainer}>
                        <Text style={styles.h2}>Увійти</Text>
                        <View style={styles.loginInputContainer}>
                            <TextInput
                                secureTextEntry={false}
                                selectionColor='blue'
                                inputMode='email'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                placeholder="Адреса електронної пошти"
                                placeholderTextColor='#BDBDBD'
                                style={styles.loginInput}
                                value={email}
                                onChangeText={setEmail}
                                 />
                        </View>
                        <View style={styles.loginInputContainer}>
                            <TextInput
                                maxLength={23}
                                secureTextEntry={passwordVisibility}
                                selectionColor='blue'
                                keyboardType='visible-password'
                                textContentType='password'
                                placeholder="Пароль"
                                placeholderTextColor='#BDBDBD'
                                style={styles.loginInput}
                                value={password}
                                onChangeText={setPassword}
                                enablesReturnKeyAutomatically={true}
                            />
                            <Pressable onPress={toggleShowPassword}
                                       hitSlop={{ left: 40, bottom: 15, top: 15, right: 15 }}>
                                  {passwordVisibility
                                  ? <Text style={styles.textShowButton}>Показати</Text>
                                  : <Text style={styles.textShowButton}>Сховати</Text>
                                  }
                            </Pressable>
                        </View>
                         <Pressable style={styles.buttonRegistration} onPress={onLoginButtonPress}>
                                     <Text style={styles.buttonText}>Увійти</Text>
                        </Pressable>
                        <View style={styles.underButtonTextContainer}>
                              <Text style={styles.textUnderButton}>Немає акаунту?</Text>
                              <Pressable onPress={()=>navigation.navigate('Registration')} hitSlop={{ left: 10, bottom: 15, top: 15, right: 15 }}>
                                  <Text style={styles.textUnderButton}>Зареєструватися</Text>
                              </Pressable>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
           
    )
}


const styles = StyleSheet.create({
    container: {
            flex: 1,
            justifyContent: "flex-end",
    },

        loginContainer: {
            width: "100%",
            height: 489,
            backgroundColor: '#FFFFFF',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            overflow:'hidden',
            paddingTop:32,
    },
    h2: {
            color: '#212121',
            textAlign: 'center',
            fontSize: 30,
            fontFamily: 'Roboto',
            fontWeight: 500,
            letterSpacing: 0.3,
            marginBottom: 33,
    },
        loginInputContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'space-between',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 16,
            height: 50,
            width: 343,
            backgroundColor: '#E8E8E8',
            paddingLeft: 16,
            paddingTop: 15,
            paddingBottom: 15,
            paddingRight:15,
            borderRadius: 10,
        },
    loginInput: {
            width: 239,
            fontSize: 16,
            fontFamily: 'Roboto'
        },
    textShowButton: {
            color: '#1B4371',
            fontSize: 16,
            fontFamily: 'Roboto',
    },
    buttonRegistration: {
         marginTop: 27,
         marginBottom: 16,
            borderRadius: 100,
            height: 51,
            width: 343,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontFamily: 'Roboto',
            fontSize: 16,
            backgroundColor: '#FF6C00'
        },
    buttonText: {
            color: '#FFFFFF',
            fontFamily: 'Roboto',
            fontSize: 16,
    },
     underButtonTextContainer:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent:'center',
     },
    textUnderButton: {
            color: '#1B4371',
            textAlign: 'center',
            fontSize: 16,
            fontFamily: 'Roboto',
        },
    registrationLink:{
            textDecorationLine:'underline'
    }
})

export default LoginScreen