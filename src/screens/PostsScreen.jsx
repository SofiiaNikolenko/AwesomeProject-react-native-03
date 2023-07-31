import { Text, View, StyleSheet } from "react-native";
const PostsScreen = () => {
  return (
    <View style={styles.contaner}>
      <Text>PostsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PostsScreen;
