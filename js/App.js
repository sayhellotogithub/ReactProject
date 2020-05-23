import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from "./pages/home/HomePage";


// import NavigatorDemo from "../page/NavigatorDemo";
import Navigator from "./pages/Navigator";
import WebViewDemo from "./view/WebViewDemo";


function App() {

    return (
        <Navigator/>

    );
}

export default App;
