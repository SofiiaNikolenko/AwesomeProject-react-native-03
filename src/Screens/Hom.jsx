import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import LogOutIcon from "../Components/LogOutIcon";
import UserIcon from "../Components/UserIcon";
import GridIcon from "../Components/GridIcon";
import ButtonNewPost from "../Components/ButtonNewPost";
import ArrowLeftIcon from "../Components/ArrowLeftIcon";

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <View style={styles.container}>
      <Tabs.Navigator screenOptions={styles.headerStyles}>
        <Tabs.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={{
            tabBarShowLabel: false,
            headerRight: LogOutIcon,
            title: "Публікації",
            tabBarIcon: ({ focused, color, size }) => (
              <GridIcon
                name={focused ? "isActive" : "notActive"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
          options={{
            tabBarShowLabel: false,
            headerLeft: ArrowLeftIcon,
            title: "Створити публікацію",
            tabBarIcon: ({ focused, color, size }) => (
              <ButtonNewPost
                name={focused ? "isActive" : "notActive"}
                size={size}
                color={color}
              />
            ),
            tabBarVisible: false,
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <UserIcon
                name={focused ? "isActive" : "notActive"}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  headerStyles: {
    tabBarShowLabel: true,
    tabBarStyle: {
      backgroundColor: "white",
      paddingTop: 9,
      display: "flex",
      alignItems: "center",
    },
    headerRightContainerStyle: { paddingRight: 16 },
    headerLeftContainerStyle: { paddingLeft: 16 },
    headerTitleStyle: {
      textAlign: "center",
      fontFamily: "Roboto",
      fontSize: 17,
      fontWeight: 500,
      lineHeight: 22,
      letterSpacing: 0.408,
    },
    headerTintColor: "rgba(33, 33, 33, 1)",
    headerStyle: {
      backgroundColor: "#FFFFFF",
      height: 100,
      shadowOffset: {
        width: 0,
        height: 0.5,
      },
      shadowColor: "#212121CC",
      shadowOpacity: 0.3,
      shadowRadius: 1.84,
      elevation: 0,
    },
  },
  postScreenOptions: {
    headerRight: LogOutIcon,
    title: "Публікації",
  },
  createPostsScreenOptions: {
    headerLeft: ArrowLeftIcon,
    title: "Створити публікацію",
  },
});