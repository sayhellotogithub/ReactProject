import React, {useState, useEffect,Component} from 'react'
import {Animated, Text, View} from 'react-native'
import {getFatalColor} from "react-native/Libraries/LogBox/UI/LogBoxStyle";

const FadeInView = (props) => {
    const [fadeAnim] = useState(new Animated.Value(0));
    React.useEffect(() => {
        Animated.timing(fadeAnim, {toValue: 1, duration: 10000,}).start();

    }, [])

    return (<Animated.View style={{...props.style, opacity: fadeAnim}}>
        {props.children}
    </Animated.View>)
}

export default class FadeAnimatedView extends Component{
    render() {
        return <View style={{
            flex: 1, alignItems: 'center',
            justifyContent: 'center'
        }}>
            <FadeInView style={{
                width: 250, height: 50
                , backgroundColor: 'powdrbule'
            }}>
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
                    Fading in
                </Text>
            </FadeInView>
        </View>
    }
}