import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const UserIcon = ({ name, size, color }) => {
  const navigation = useNavigation();
  const navigateToProfileScreen = (event) => {
    navigation.navigate("ProfileScreen");
  };

  return (
    <Pressable
      style={name === "isActive" ? styles.activeButton : styles.notActiveButton}
      onPress={navigateToProfileScreen}
    >
      <Feather
        name="user"
        size={24}
        color={name === "isActive" ? "#FFFFFF" : "#212121CC"}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  activeButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    marginLeft: 39,
    marginRight: 39,
  },
  notActiveButton: {
    paddingTop: 8,
    backgroundColor: "white",
  },
});

export default UserIcon;
