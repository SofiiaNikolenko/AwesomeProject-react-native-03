import { Octicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
const ArrowLeftIcon = () => {
  const navigation = useNavigation();
  const goToPostsScreen = () => {
    navigation.goBack();
  };
  return (
    <Pressable
      onPress={goToPostsScreen}
      hitSlop={{ left: 10, bottom: 10, top: 10, right: 10 }}
    >
      <Octicons name="arrow-left" size={24} color="#BDBDBD" />
    </Pressable>
  );
};

export default ArrowLeftIcon;
