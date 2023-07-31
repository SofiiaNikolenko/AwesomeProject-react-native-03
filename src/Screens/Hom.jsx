import { View, StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import LogOutIcon from "../Components/LogOutIcon";
import UserIcon from "../Components/UserIcon";
import GridIcon from "../Components/GridIcon";
import { ButtonNewPost } from "../Components/ButtonNewPost";



const Tabs = createBottomTabNavigator();

const Home = () => {
    return (
        <View style={styles.container}>
            <Tabs.Navigator screenOptions={styles.headerStyles}>
                <Tabs.Screen name='PostsScreen' component={PostsScreen} options={{ headerRight: LogOutIcon, tabBarButton: GridIcon, title:'Публікації' }} />
                <Tabs.Screen name='CreatePostsScreen' component={CreatePostsScreen}  options={{tabBarButton:ButtonNewPost, title:'Створити публікацію'}}/>
                <Tabs.Screen name='ProfileScreen'component={ProfileScreen} options={{  tabBarButton:UserIcon}}/>
            </Tabs.Navigator>
       </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        backgroundColor:'white'
    },
    // свой общий объект стилей для хедера( а именно для контейнера навигации)
    headerStyles: {
        tabBarShowLabel: false,
        tabBarStyle: {
            paddingTop: 9,
            display: 'flex',
            alignItems: 'center',
        },
        // паддинги в хедере
        headerRightContainerStyle: { paddingRight: 16 },
        headerLeftContainerStyle: { paddingLeft: 16 },
        // стилизация теста в хедере
        headerTitleStyle: {
            textAlign: 'center',
            fontFamily: 'Roboto',
            fontSize: 17,
            fontWeight: 500,
            lineHeight: 22,
            letterSpacing: 0.408,
        },
        // цвет текста в хедере
        headerTintColor: 'rgba(33, 33, 33, 1)',
        headerStyle: {
            // стилизация тени
            backgroundColor: '#FFFFFF',
              height: 100,
              shadowOffset: {
                width: 0,
                height: 0.5,
              },
              shadowColor: '#212121CC',
              shadowOpacity: 0.3,
              shadowRadius: 1.84,
              elevation: 0,
            },
        },
    

})
