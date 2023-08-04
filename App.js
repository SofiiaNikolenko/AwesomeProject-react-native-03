import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ImageBg from "./assets/images/photoBG.png";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import Home from "./src/Screens/Hom";
import LoginScreen from "./src/Screens/LoginScreen";
import MapScreen from "./src/Screens/MapScreen";
import CommentsScreen from "./src/Screens/CommentsScreen";
import ArrowLeftIcon from "./src/Components/ArrowLeftIcon";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import { authStateChanged } from "./src/redux/auth/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store.store}>
      <View style={styles.container}>
        <Image source={ImageBg} style={styles.bg} />
        <NavigationContainer theme={styles.navContainer}>
          <MainStack.Navigator initialRouteName="Login">
            <MainStack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="CommentsScreen"
              component={CommentsScreen}
              options={styles.CommentsScreen}
            />
          </MainStack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  bg: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "100%",
  },
  navContainer: {
    colors: {
      background: "transparent",
    },
  },
  CommentsScreen: {
    headerLeft: ArrowLeftIcon,
    title: "Коментарі",
    headerRightContainerStyle: { paddingRight: 16 },
    headerLeftContainerStyle: { paddingLeft: 16 },
    headerTintColor: "rgba(33, 33, 33, 1)",
    headerStyle: {
      backgroundColor: "#FFFFFF",
      height: 100,
      shadowOffset: {
        width: 0,
        height: 0.5,
      },
      shadowColor: "#212121CC",
      shadowOpacity: 0.3,
      shadowRadius: 1.84,
      elevation: 0,
    },
  },
});
