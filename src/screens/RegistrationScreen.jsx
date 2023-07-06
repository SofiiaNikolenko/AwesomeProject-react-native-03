import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AddPhoto from "../components/AddPhoto";

export default RegistrationScreen = () => (
  <>
    <AddPhoto />

    <Text style={styles.title}>Реєстрація</Text>

    <TextInput
      style={styles.input}
      placeholder="Логін"
      placeholderTextColor="rgba(189, 189, 189, 1)"
    ></TextInput>
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

    <TouchableOpacity style={styles.registerButton}>
      <Text style={styles.registerButtonText}>Зареєстуватися</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.linkLogIn}>
      <Text style={styles.textLogIn}>Вже є акаунт? Увійти</Text>
    </TouchableOpacity>
  </>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 35,
    marginTop: 92,
    marginBottom: 32,
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

  registerButton: {
    backgroundColor: "rgba(255, 108, 0, 1)",
    borderRadius: 100,
    marginBottom: 16,
  },

  registerButtonText: {
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

  textLogIn: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    color: "rgba(27, 67, 113, 1)",
  },
});
