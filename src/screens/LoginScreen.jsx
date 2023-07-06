import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default LoginScreen = () => (
  <>
    <Text style={styles.title}>Увійти</Text>

    <TextInput
      style={styles.input}
      placeholder="Адреса електронної пошти"
      placeholderTextColor="rgba(189, 189, 189, 1)"
    ></TextInput>
    <View style={styles.viewLastImput}>
      <TextInput
        style={[styles.input, styles.inputLastMargin]}
        placeholder="Пароль"
        placeholderTextColor="rgba(189, 189, 189, 1)"
      ></TextInput>
      <TouchableOpacity style={styles.viewLastImputButton}>
        <Text style={styles.viewLastImputText}>Показати</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.enterButton}>
      <Text style={styles.enterButtonText}>Увійти</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.linkLogIn}>
      <Text style={styles.textSignUp}>
        Немає акаунту?
        <Text style={[styles.textSignUp, styles.textSignUpUnderlin]}>
          Зареєструватися
        </Text>
      </Text>
    </TouchableOpacity>
  </>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 35,
    marginTop: 32,
    marginBottom: 33,
  },

  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    height: 50,
    width: 343,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "rgba(232, 232, 232, 1)",
    backgroundColor: "rgba(246, 246, 246, 1)",
    paddingLeft: 16,
    marginBottom: 16,
  },

  inputLastMargin: {
    marginBottom: 43,
  },

  visibleButton: {
    height: 5,
    width: 20,
  },

  viewLastImput: {
    position: "relative",
  },

  viewLastImputButton: {
    position: "absolute",
    top: 16,
    right: 16,
  },

  viewLastImputText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    color: "rgba(27, 67, 113, 1)",
  },

  enterButton: {
    backgroundColor: "rgba(255, 108, 0, 1)",
    borderRadius: 100,
    marginBottom: 16,
  },

  enterButtonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    color: "rgba(255, 255, 255, 1)",
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 111,
    paddingLeft: 111,
  },

  linkLogIn: {},

  textSignUp: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    color: "rgba(27, 67, 113, 1)",
  },

  textSignUpUnderlin: {
    textDecorationLine: "underline",
  },
});
