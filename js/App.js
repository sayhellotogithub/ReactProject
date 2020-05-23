import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from "./pages/home/HomePage";
import TabBarView from "./pages/TabBarView";

function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

function DetailsScreen({navigation}) {
    return (
        <HomePage/>
    );
}

function TabScreen() {
    return (<TabBarView/>)
}

const Stack = createStackNavigator();

function App() {
    // return (<HomePage/>)
    return (
        <TabBarView/>
        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName="Tabbar">
        //         <Stack.Screen name="Tabbar" component={TabScreen}/>
        //         <Stack.Screen name="Home" component={HomeScreen}/>
        //         <Stack.Screen name="Details" component={DetailsScreen}/>
        //     </Stack.Navigator>
        // </NavigationContainer>
    );
}

export default App;
