import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Post from "../Components/Post";
import posts from ".//..//data/posts";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from ".//..//firebase/config";
import { useSelector } from "react-redux";
4;
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [dataPost, setDataPost] = useState([]);
  console.log("dataPost", dataPost);

  const goToLoginScreen = (event) => {
    navigation.navigate("Login");
  };

  const { userId, login, avatar } = useSelector((state) => state.auth);
  const queryArray = async () => {
    const q = query(collection(db, "setPost"), where("userId", "==", userId));
    onSnapshot(q, (data) => {
      setDataPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  useEffect(() => {
    queryArray();
  }, []);

  return (
    <View style={styles.contaner}>
      <View style={styles.profileContainer}>
        <Pressable
          onPress={goToLoginScreen}
          style={styles.buttonGoOut}
          hitSlop={{ left: 10, bottom: 10, top: 10, right: 10 }}
        >
          <Feather name="log-out" size={24} color="#BDBDBD" />
        </Pressable>
        <View style={styles.avatarContainer}>
          {avatar && <Image style={styles.avatar} source={{ uri: avatar }} />}
          <Pressable
            onPress={() => {
              console.log("delAvatar");
            }}
            style={styles.delAvatarButton}
          >
            <AntDesign name="close" size={13} color="rgba(232, 232, 232, 1)" />
          </Pressable>
        </View>
        <Text style={styles.posterName}>{login}</Text>
        {dataPost.length > 0 && (
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={dataPost}
            renderItem={({ item }) => (
              <Post
                id={item.id}
                img={item.photoUrl}
                description={item.photoName}
                comments={[]}
                locationName={item.photoLocationName}
                geolocation={item.location}
                likes={0}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    paddingTop: 148,
    paddingBottom: 100,
  },
  profileContainer: {
    flexGrow: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 32,
  },
  buttonGoOut: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  avatarContainer: {
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
    position: "relative",
    width: 120,
    height: 120,
    marginTop: -60,
    backgroundColor: "white",
    borderRadius: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  delAvatarButton: {
    width: 24,
    height: 24,
    position: "absolute",
    top: 82,
    left: 108,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 50,
    borderColor: "rgba(232, 232, 232, 1)",
    borderWidth: 1,
  },
  posterName: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 500,
    color: "rgba(33, 33, 33, 1)",
    marginBottom: 33,
    alignSelf: "center",
  },
});
export default ProfileScreen;
