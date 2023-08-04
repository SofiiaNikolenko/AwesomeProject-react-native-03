import { Text, View, Image, StyleSheet, FlatList } from "react-native";
import Post from "../Components/Post";
import posts from ".//..//data/posts";
const avatar = require(".//..//images/avatar.jpg");
import { useSelector } from "react-redux";
const PostsScreen = () => {
  const state = useSelector((state) => state.auth);
  console.log(state);
  return (
    <View style={styles.contaner}>
      <View style={styles.profileContainer}>
        <View style={styles.profilePhotoContainer}>
          <Image style={styles.profilePhoto} source={avatar} alt="avatar" />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profleName}>{state.login}</Text>
          <Text style={styles.profleEmail}>{state.email}</Text>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={posts}
        renderItem={({ item }) => (
          <Post
            id={item.id}
            userId={state.userId}
            img={item.img}
            description={item.description}
            comments={item.comments}
            locationName={item.locationName}
            geolocation={item.geoLocation}
            likes={item.likes}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: "white",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  profilePhotoContainer: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    marginRight: 8,
    width: 60,
    height: 60,
    borderRadius: 16,
    overflow: "hidden",
  },
  profilePhoto: {
    width: 60,
    height: 60,
  },
  profleName: {
    fontSize: 13,
    fontFamily: "Roboto",
    fontWeight: 700,
    color: "rgba(33, 33, 33, 1)",
  },
  profleEmail: {
    fontSize: 11,
    fontFamily: "Roboto",
    fontWeight: 400,
    color: "rgba(33, 33, 33, 1)",
  },
});

export default PostsScreen;
