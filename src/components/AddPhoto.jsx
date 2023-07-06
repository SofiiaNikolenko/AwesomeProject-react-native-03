import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import add from "../picture/add.png";

export default AddPhoto = () => (
  <View style={styles.squareContainer}>
    <TouchableOpacity style={styles.buttonAdd}>
      <Image source={add} style={styles.addImage} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  squareContainer: {
    position: "absolute",
    backgroundColor: "rgba(246, 246, 246, 1)",
    width: 120,
    height: 120,
    borderRadius: 16,
    alignSelf: "center",
    top: -60,
  },

  buttonAdd: {
    position: "absolute",
    bottom: 14,
    right: -12,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  addImage: {
    width: 25,
    height: 25,
  },
});
