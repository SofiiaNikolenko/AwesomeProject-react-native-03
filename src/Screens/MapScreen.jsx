import React from "react";
import { View, StyleSheet, Dimensions, Pressable } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const MapScreen = () => {
  const {
    params: { latitude, longitude },
  } = useRoute();
  const navigation = useNavigation();
  const goOut = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <MapView
        provider="google"
        mapType="standard"
        showsUserLocation={true}
        rotateEnabled={false}
        scrollEnabled={true}
        showsCompass={true}
        style={styles.mapStyle}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        minZoomLevel={10}
        onMapReady={() => console.log("Map is ready")}
        onRegionChange={() => console.log("Region change")}
      >
        <Marker
          title="I am here"
          coordinate={{ latitude: latitude, longitude: longitude }}
          description="Hello"
        />
      </MapView>
      <Pressable
        onPress={goOut}
        style={{ position: "absolute", top: 45, right: 15 }}
      >
        <MaterialCommunityIcons name="exit-to-app" size={24} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
