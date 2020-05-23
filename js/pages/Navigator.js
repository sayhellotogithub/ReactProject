import React, {Component} from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import NewsDetailPage from "./home/NewsDetailPage";
import {Image, Text, View} from "react-native";
import HomePage from "./home/HomePage";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator()


function settingsScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings!</Text>
        </View>
    );
}

function categoryScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>分类!</Text>
        </View>
    );
}


const BottomTabScreen = () => {
    return <BottomTab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: () => {
                if (route.name === "主页") {
                    return <Image source={require('../../src/img/home.png')}/>
                } else if (route.name === "分类") {
                    return <Image source={require('../../src/img/category.png')}/>
                } else {
                    return <Image source={require('../../src/img/user.png')}/>
                }
            }
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}>

        <Stack.Screen name="主页" component={HomePage}/>
        <Stack.Screen name="分类" component={categoryScreen}/>
        <Stack.Screen name="个人中心" component={settingsScreen}/>
    </BottomTab.Navigator>
}
export default class extends Component {
    render() {
        return (<NavigationContainer>
            <Stack.Navigator mode="modal" headerMode="none">
                <Stack.Screen name="HomeTabScreen" component={BottomTabScreen}/>
                <Stack.Screen name="NewsDetailScreen" component={NewsDetailPage}/>
            </Stack.Navigator>
        </NavigationContainer>);
    }
}
