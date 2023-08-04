// import { View, Text, StyleSheet,TouchableOpacity } from "react-native"
// import { Camera } from "expo-camera";
// import * as MediaLibrary from "expo-media-library";
// import { useState, useEffect, useRef } from "react";
// import { Ionicons } from '@expo/vector-icons'

// const CameraView = () => {
//     const [hasPermission, setHasPermission] = useState(null);
//   const [cameraRef, setCameraRef] = useState(null);
//     const [type, setType] = useState(Camera.Constants.Type.back);
//     useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       await MediaLibrary.requestPermissionsAsync();

//       setHasPermission(status === "granted");
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//     return (<View style={styles.cameraContainer}>
//                  <View style={{ height:240, borderRadius: 8, overflow:'hidden',}}>

//         <Camera
//         style={styles.camera}
//         type={type}
//         ref={setCameraRef}
//       >
//         <View style={styles.photoView}>
//           <TouchableOpacity
//             style={styles.flipContainer}
//             onPress={() => {
//               setType(
//                 type === Camera.Constants.Type.back
//                   ? Camera.Constants.Type.front
//                   : Camera.Constants.Type.back
//               );
//             }}
//           >
//             <Ionicons name="camera-reverse-outline" size={32} color="white" />
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={async () => {
//               if (cameraRef) {
//                 const { uri } = await cameraRef.takePictureAsync();
//                 await MediaLibrary.createAssetAsync(uri);
//               }
//             }}
//           >
//             {/* <View style={styles.takePhotoOut}> */}
//                         <View style={styles.takePhotoInner}>
//                         <Ionicons name="camera" size={24} color="#BDBDBD"/>
//               </View>
//             {/* </View> */}
//           </TouchableOpacity>
//                 </View>
//             </Camera>
//             </View>
//                  <Text>Завантажте фото</Text>
//             </View>

//     )
// }

//         const styles = StyleSheet.create({
//             cameraContainer: {
//         width: 343,
//         height: 276,

//     },
//     camera: { flex: 1 },
//   photoView: {
//     flex: 1,
//     backgroundColor: "transparent",
//       justifyContent: "center",
//     alignItems: 'center'
//   },

//   flipContainer: {
//     flex: 1,
//       alignSelf: 'flex-end',
//       paddingRight: 10,
//   },

//   button: { alignSelf: "center" },

//   takePhotoInner: {
//     height: 60,
//     width: 60,
//       backgroundColor: "rgba(255, 255, 255, 0.3)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//       borderRadius: 50,
//       borderBottom: 'none',
//     position: "absolute",
//   bottom: 90, // Adjust the position based on your layout
//   alignSelf: "center",
//   },
// })

// export default CameraView
