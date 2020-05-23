import React, {Component} from 'react'
import HomePage from "./home/HomePage";
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const PageList = {
    home: {screen: HomePage}
}

const NavigatorConfig = (rootName: string) => {
    return {
        initialRouteName: rootName,
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: 'tomato',
        }
    }
}
const Stack = createStackNavigator();
/**
 * 首页导航
 */
export const HomeNavigator = Stack (PageList, NavigatorConfig('home'));