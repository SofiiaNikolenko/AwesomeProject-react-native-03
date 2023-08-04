import React, { useState, useEffect, useRef } from "react";
import uuid from "react-native-uuid";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { FontAwesome, Feather, SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import posts from ".//..//data/posts";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [postPhoto, setPostPhoto] = useState(null);
  const [photoName, setPhotoName] = useState("");
  const [photoLocationName, setPhotoLocationName] = useState("");
  const [location, setLocation] = useState(null);
  const { login, userId } = useSelector((state) => state.auth);
  const cameraRef = useRef(null);

  const handleSubmit = (e) => {
    createPostStore();

    clearData();
    navigation.navigate("Home", { screen: "PostsScreen" });
  };

  const createPostStore = async () => {
    const createdDate = Date.now();
    const docRef = await addDoc(collection(db, "setPost"), {
      photoUrl: postPhoto,
      photoName,
      login,
      userId,
      location,
      photoLocationName,
      createdDate,
    });
    console.log("Document written with ID: ", docRef.id);
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coordinations = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coordinations);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePhoto = async () => {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync();
      setPostPhoto(uri);
    }
  };

  const clearData = () => {
    setPostPhoto(null);
    setPhotoName("");
    setPhotoLocationName("");
  };

  const uploadPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [5, 3],
      quality: 1,
    });
    if (result.canceled) {
      console.log("Відміна вибору зображення");
      return;
    }
    setPostPhoto(result.assets[0].uri);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.createPostsScreenContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.postContainer}>
            {postPhoto ? (
              <Image source={{ uri: postPhoto }} style={{ flex: 1 }} />
            ) : (
              <Camera style={{ flex: 1 }} type={type} ref={cameraRef}>
                <Pressable
                  style={styles.flipContainer}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                  <Ionicons
                    name="camera-reverse-outline"
                    size={28}
                    color="white"
                  />
                </Pressable>
                <Pressable
                  style={styles.addPhotoButton}
                  opacity={0.5}
                  onPress={takePhoto}
                >
                  <Ionicons name="camera" size={24} color="#BDBDBD" />
                </Pressable>
              </Camera>
            )}
          </View>

          <Text
            style={{
              fontSize: 16,
              color: "#BDBDBD",
              fontWeight: "400",
              lineHeight: 19,
              marginTop: 8,
            }}
            onPress={uploadPhoto}
          >
            {postPhoto ? "Редагувати фото" : "Завантажте фото"}
          </Text>

          <TextInput
            style={styles.photoMetaInput}
            placeholder="Назва..."
            value={photoName}
            maxLength={50}
            onChangeText={setPhotoName}
          />
          <View style={{ position: "relative", marginBottom: 32 }}>
            <Pressable style={styles.mapButton}>
              <SimpleLineIcons name="location-pin" size={23} color="#BDBDBD" />
            </Pressable>
            <TextInput
              style={[styles.photoMetaInput, { paddingLeft: 28 }]}
              placeholder="Місцевість..."
              type={"text"}
              name={"photoLocation"}
              value={photoLocationName}
              maxLength={15}
              onChangeText={setPhotoLocationName}
            />
          </View>
          <Pressable
            style={[
              styles.publishButton,
              postPhoto && photoName && photoLocationName
                ? { backgroundColor: "#FF6C00" }
                : { backgroundColor: "#F6F6F6" },
            ]}
            activeOpacity={0.5}
            onPress={handleSubmit}
            disabled={!postPhoto || !photoName || !photoLocationName}
          >
            <Text
              style={[
                {
                  fontSize: 16,
                  textAlign: "center",
                  color: "#ffffff",
                },
                postPhoto && photoName && photoLocationName
                  ? {
                      backgroundColor: "#FF6C00",
                    }
                  : {
                      color: "#BDBDBD",
                      backgroundColor: "#F6F6F6",
                    },
              ]}
            >
              Опубліковати
            </Text>
          </Pressable>

          <Pressable
            onPress={clearData}
            style={[
              styles.removePostButton,
              postPhoto
                ? { backgroundColor: "#FF6C00" }
                : { backgroundColor: "#F6F6F6" },
            ]}
            disabled={!postPhoto}
          >
            <Feather
              name="trash-2"
              size={24}
              style={{ color: postPhoto ? "#fff" : "#BDBDBD" }}
            />
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  createPostsScreenContainer: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    padding: 16,
  },
  flipContainer: {
    flex: 1,
    alignSelf: "flex-end",
    paddingRight: 10,
  },
  postContainer: {
    marginTop: 32,
    width: "100%",
    height: 240,
    borderRadius: 8,
    backgroundColor: "grey",
    overflow: "hidden",
  },
  addPhotoButton: {
    position: "absolute",
    top: "40%",
    left: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 50,
  },
  photoMetaInput: {
    width: "100%",
    height: 50,
    marginBottom: 16,
    fontSize: 16,
    color: "#212121",
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  mapButton: {
    position: "absolute",
    top: 13,
  },
  publishButton: {
    width: "100%",
    height: 50,
    marginBottom: 120,
    padding: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  removePostButton: {
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
  },
});

export default CreatePostsScreen;
