import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
const LogOutIcon = () => {
  const navigation = useNavigation();
  const goToLoginScreen = (event) => {
    navigation.navigate("Login");
  };
  return (
    <Pressable
      onPress={goToLoginScreen}
      hitSlop={{ left: 10, bottom: 10, top: 10, right: 10 }}
    >
      <Feather name="log-out" size={24} color="#BDBDBD" />
    </Pressable>
  );
};

export default LogOutIcon;
