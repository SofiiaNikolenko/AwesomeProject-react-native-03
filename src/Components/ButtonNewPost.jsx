import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const ButtonNewPost = ({ name, size, color }) => {
  const navigation = useNavigation();
  const navigateToCreatePostsScreen = (event) => {
    navigation.navigate("CreatePostsScreen");
  };
  return (
    <Pressable
      style={name === "isActive" ? styles.activeButton : styles.notActiveButton}
      onPress={navigateToCreatePostsScreen}
    >
      <Ionicons
        name="add-outline"
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

export default ButtonNewPost;
