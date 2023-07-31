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

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={ImageBg} style={styles.bg} />
      <NavigationContainer theme={styles.navContainer}>
        <MainStack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <MainStack.Screen name="Home" component={Home} />
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
          />
          <MainStack.Screen name="Login" component={LoginScreen} options={{}} />
        </MainStack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </View>
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
});
