import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import logoImage from ".//..//images/comentsIcon.png";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
const Post = ({
  id,
  img,
  userId,
  description,
  likes = 1,
  comments = [],
  locationName,
  geolocation,
}) => {
  const state = useSelector((state) => state.auth);
  console.log(state.userId);
  const navigation = useNavigation();
  const openMap = (e) => {
    navigation.navigate("MapScreen", geolocation);
  };

  const goToCommentsScreen = () => {
    navigation.navigate("CommentsScreen", {
      img,
      postId: id,
    });
  };

  return (
    <View style={styles.postContainer}>
      <View style={styles.photoContaner}>
        <Image
          style={styles.photo}
          source={{
            uri: img,
          }}
          alt={description}
        />
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.textUnderPost}>
        <View style={styles.coments}>
          <Pressable
            onPress={goToCommentsScreen}
            style={{ display: "flex", flexDirection: "row", marginRight: 24 }}
          >
            {comments.length > 0 ? (
              <Image source={logoImage} />
            ) : (
              <Feather
                name="message-circle"
                style={{ transform: [{ scaleX: -1 }] }}
                size={24}
                color="rgba(189, 189, 189, 1)"
              />
            )}
            <Text style={styles.comentsNumber}>{comments.length}</Text>
          </Pressable>
          {likes !== 0 && (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Feather
                name="thumbs-up"
                size={24}
                color="rgba(255, 108, 0, 1)"
              />
              <Text style={styles.comentsNumber}>{likes}</Text>
            </View>
          )}
        </View>
        <Pressable style={styles.location} onPress={openMap}>
          <Feather name="map-pin" size={24} color="rgba(189, 189, 189, 1)" />
          <Text style={styles.locationName}>{locationName}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    width: "100%",
    paddingBottom: 32,
  },
  photoContaner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    borderRadius: 8,
    overflow: "hidden",
    height: 240,
    width: "100%",
  },
  photo: {
    width: 343,
    height: 240,
  },
  description: {
    fontFamily: "Roboto",
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 500,
    color: "rgba(33, 33, 33, 1)",
  },
  textUnderPost: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  comentsNumber: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: 400,
    marginLeft: 6,
    color: "rgba(189, 189, 189, 1)",
  },
  coments: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  locationName: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
    marginLeft: 4,
    color: "rgba(33, 33, 33, 1)",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",
  },
});

export default Post;
