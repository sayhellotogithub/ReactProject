import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

export default class NativePropsView extends React.Component {
    //error operator
    // render() {
    //     return (<TouchableOpacity>
    //         <MyButton title="Hello"/>
    //     </TouchableOpacity>);
    // }

    render() {
        return (<TouchableOpacity><MyButtonTwo title="hello"/></TouchableOpacity>);
    }
}

class MyButton extends React.Component {
    render() {
        return <View><Text>{this.props.title}</Text></View>;
    }
}

class MyButtonTwo extends React.Component {
    setNativeProps = (nativeProps) => {
        this._root.setNativeProps(nativeProps)
    }

    render() {
        return (<View ref={component => this._root = component} {...this.props}>
            <Text>{this.props.title}</Text>
        </View>);
    }
}