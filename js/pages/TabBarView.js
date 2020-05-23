import React, {Component} from 'react'
import {Image, View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from "./home/HomePage";

const Tab = createBottomTabNavigator();
export default class TabBarView extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
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
                    <Tab.Screen name="主页" component={this.homeScreen}/>
                    <Tab.Screen name="分类"
                                component={this.category}/>
                    <Tab.Screen name="个人中心"
                                component={this.settingsScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }

    homeScreen() {
        return (
            <HomePage/>
        );
    }

    settingsScreen() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Settings!</Text>
            </View>
        );
    }

    category() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>分类!</Text>
            </View>
        );
    }


}
