import { StyleSheet, View, ImageBackground } from "react-native";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { useFonts } from "expo-font";
import PhotoBG from "./src/picture/PhotoBG.png";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={PhotoBG} style={styles.image}>
        <View style={styles.overlay}>
          <View style={styles.contentContainer}>
            <RegistrationScreen />
            {/* <LoginScreen /> */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },

  contentContainer: {
    position: "relative",
    backgroundColor: "#fff",
    width: "100%",
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
  },
});
