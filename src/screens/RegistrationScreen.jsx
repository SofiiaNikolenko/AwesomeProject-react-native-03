import { View, Image, Text, KeyboardAvoidingView, TextInput, Button, Platform, StyleSheet, Pressable, TouchableWithoutFeedback, Keyboard } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import addImg from './/..//..//assets/images/add.png'
const RegistrationScreen = () => {
        const [login, setLogine] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [passwordVisibility, setPasswordVisibility] = useState(true);
        
        const navigation=useNavigation()
        
    const onRegistrationButtonPress = () => {
                if (!login || !email || !password) {
                    return
            }
        console.log('Login:',login+', email:', email+', password:', password)
            navigation.navigate('Home', {
                screen:'PostsScreen'
        })
    }

       
        
    const toggleShowPassword = () => {
                setPasswordVisibility(!passwordVisibility)
                };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>     
                <KeyboardAvoidingView 
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? '-190' : '-260'}>
                    <View style={styles.registrationContainer}>
                        <View style={styles.imgContainer}>
                                <Image style={styles.addIcon} source={addImg}/>
                        </View>
                        <View>
                                <Text style={styles.h2}>Peєстрація</Text>
                        </View>
                        <View style={styles.registrationInputContainer}>
                                <TextInput
                                        maxLength={26}
                                        inputMode='text'
                                        secureTextEntry={false}
                                        selectionColor='blue'
                                        textContentType='name'
                                        placeholder="Login"
                                        placeholderTextColor='#BDBDBD'
                                        style={styles.registrationInput}
                                        value={login}
                                        onChangeText={setLogine}
                                />
                        </View>
                                            
                        <View style={styles.registrationInputContainer}>
                                <TextInput
                                        secureTextEntry={false}
                                        selectionColor='blue'
                                        inputMode='email'
                                        keyboardType='email-address'
                                        textContentType='emailAddress'
                                        placeholder="Адреса електронної пошти"
                                        placeholderTextColor='#BDBDBD'
                                        style={styles.registrationInput}
                                        value={email}
                                        onChangeText={setEmail}
                                />
                        </View>
                       
                        <View style={styles.registrationInputContainer}>
                                <TextInput
                                        maxLength={23}
                                        // скрыть текст    
                                        secureTextEntry={ passwordVisibility }
                                        selectionColor='blue'
                                        keyboardType='visible-password'
                                        textContentType='password'
                                        placeholder="Пароль"
                                        placeholderTextColor='#BDBDBD'
                                        style={styles.registrationInput}
                                        value={password}
                                        onChangeText={setPassword}
                                        //не показывает кнопку 'Enter' если пустое поле     
                                        enablesReturnKeyAutomatically={true}
                                />
                                < Pressable onPress={toggleShowPassword}
                                            hitSlop={{ left: 40, bottom: 15, top: 15, right: 15 }}>
                                        {!passwordVisibility
                                        ? <Text style={styles.textShowButton}>Сховати</Text>
                                        :<Text style={styles.textShowButton}>Показати</Text>}
                                </Pressable>                 
                        </View>
                        <Pressable style={styles.buttonRegistration} onPress={onRegistrationButtonPress}>
                                        <Text style={styles.buttonText}>Зареєструватися</Text>
                        </Pressable>
                        <View style={styles.underButtonTextContainer}>
                              <Text style={styles.textUnderButton}>Вже є акаунт?</Text>
                              <Pressable onPress={()=>navigation.navigate('Login')} hitSlop={{ left: 10, bottom: 15, top: 15, right: 15 }}>
                                  <Text style={styles.textUnderButton}>Увійти</Text>
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
            flex:1,
            justifyContent:'flex-end'
    },
        registrationContainer: {
        //     height: 549,
            width:'100%',
            backgroundColor: '#FFFFFF',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            paddingTop: 92,
            paddingBottom: 78,
    },
        imgContainer: {
            position: 'absolute',
            top: -50,
            left: '50%',
            transform: [{ translateX: -60 }],
            backgroundColor: '#F6F6F6',
            width:120,
            height: 120,
            borderRadius: 16,
    },
    addIcon: {
            height: 25,
            width: 25,
            position: 'absolute',
            top: 81,
            left: 107,
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
    registrationInputContainer: {
            display: 'flex',
            flexDirection:'row',
            justifyContent: 'space-between',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 16,
            height: 50,
            width: 343,
            backgroundColor: '#E8E8E8',
            paddingLeft: 16,
            paddingTop: 15,
            paddingBottom: 15,
            paddingRight: 16,
            borderRadius: 10
        },
    registrationInput: {
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
    buttonText: {
            color: '#FFFFFF',
            fontFamily: 'Roboto',
            fontSize: 16,
        }
})

export default RegistrationScreen