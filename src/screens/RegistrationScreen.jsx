import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Button,
  Platform,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerDB } from "../redux/auth/operations";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import uuid from "react-native-uuid";

const RegistrationScreen = () => {
  const [login, setLogine] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [avatar, setAvatar] = useState("");
  const [avatarUpload, setAvatarUpload] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const addAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0,
    });

    if (!result.canceled) {
      setAvatarUpload(result.assets[0].uri);
    }
  };

  const deleteAvatar = async () => {
    setAvatarUpload(null);
  };

  const uploadAvatarToServer = async () => {
    const storage = getStorage();
    const uniqueAvatarId = uuid.v4();
    const storageRef = ref(storage, `avatars/${uniqueAvatarId}`);

    const response = await fetch(avatarUpload);
    const file = await response.blob();

    await uploadBytes(storageRef, file).then(() => {});

    const processedPhoto = await getDownloadURL(
      ref(storage, `avatars/${uniqueAvatarId}`)
    )
      .then((url) => {
        return url;
      })
      .catch((error) => {
        console.log(error);
      });
    return processedPhoto;
  };

  const submitForm = async () => {
    if (!login || !email || !password) {
      return;
    }
    const avatarRef = await uploadAvatarToServer();
    setAvatar(avatarRef);
    dispatch(registerDB({ email, password, login, avatar }));
    setEmail("");
    setLogine("");
    setPassword("");
    navigation.navigate("Home", {
      screen: "PostsScreen",
    });
  };

  const toggleShowPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? "-190" : "-260"}
        >
          <View style={styles.registrationContainer}>
            <View style={styles.avatarContainer}>
              {avatarUpload && (
                <Image style={styles.avatar} source={{ uri: avatarUpload }} />
              )}
              <Pressable onPress={addAvatar} style={styles.addAvatarButton}>
                <MaterialIcons
                  style={styles.addIcon}
                  name="add-circle-outline"
                  size={25}
                  color="rgba(255, 108, 0, 1)"
                />
              </Pressable>
            </View>
            <View>
              <Text style={styles.h2}>Peєстрація</Text>
            </View>
            <View style={styles.registrationInputContainer}>
              <TextInput
                maxLength={26}
                inputMode="text"
                secureTextEntry={false}
                selectionColor="blue"
                textContentType="name"
                placeholder="Login"
                placeholderTextColor="#BDBDBD"
                style={styles.registrationInput}
                value={login}
                onChangeText={setLogine}
              />
            </View>

            <View style={styles.registrationInputContainer}>
              <TextInput
                secureTextEntry={false}
                selectionColor="blue"
                inputMode="email"
                keyboardType="email-address"
                textContentType="emailAddress"
                placeholder="Адреса електронної пошти"
                placeholderTextColor="#BDBDBD"
                style={styles.registrationInput}
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.registrationInputContainer}>
              <TextInput
                maxLength={23}
                secureTextEntry={passwordVisibility}
                selectionColor="blue"
                keyboardType="visible-password"
                textContentType="password"
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                style={styles.registrationInput}
                value={password}
                onChangeText={setPassword}
                enablesReturnKeyAutomatically={true}
              />
              <Pressable
                onPress={toggleShowPassword}
                hitSlop={{ left: 40, bottom: 15, top: 15, right: 15 }}
              >
                {!passwordVisibility ? (
                  <Text style={styles.textShowButton}>Сховати</Text>
                ) : (
                  <Text style={styles.textShowButton}>Показати</Text>
                )}
              </Pressable>
            </View>
            <Pressable style={styles.buttonRegistration} onPress={submitForm}>
              <Text style={styles.buttonText}>Зареєструватися</Text>
            </Pressable>
            <View style={styles.underButtonTextContainer}>
              <Text style={styles.textUnderButton}>Вже є акаунт?</Text>
              <Pressable
                onPress={() => navigation.navigate("Login")}
                hitSlop={{ left: 10, bottom: 15, top: 15, right: 15 }}
              >
                <Text style={styles.textUnderButton}>Увійти</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  registrationContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 78,
  },
  avatarContainer: {
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: 120,
    height: 120,
    marginTop: -60,
    backgroundColor: "grey",
    borderRadius: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  addAvatarButton: {
    width: 24,
    height: 24,
    position: "absolute",
    top: 82,
    left: 108,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  h2: {
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: 500,
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  registrationInputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 16,
    height: 50,
    width: 343,
    backgroundColor: "#E8E8E8",
    paddingLeft: 16,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 16,
    borderRadius: 10,
  },
  registrationInput: {
    width: 239,
    fontSize: 16,
    fontFamily: "Roboto",
  },
  textShowButton: {
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto",
  },
  buttonRegistration: {
    marginTop: 27,
    marginBottom: 16,
    borderRadius: 100,
    height: 51,
    width: 343,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "Roboto",
    fontSize: 16,
    backgroundColor: "#FF6C00",
  },
  underButtonTextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  textUnderButton: {
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Roboto",
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 16,
  },
});

export default RegistrationScreen;
