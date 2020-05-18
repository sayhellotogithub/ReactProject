import React, {Component} from 'react'
import {Text, View} from 'react-native'

export default class FlexDemo extends Component {
    render() {
        return this.getJustifyContentBasics();
    }

    getDemo() {
        return (<View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 1, backgroundColor: '#ff0'}}/>
            <View style={{flex: 2, backgroundColor: '#f0f'}}/>
            <View style={{flex: 3, backgroundColor: '#00f'}}/>
        </View>)
    }

    getDemoTwo() {
        return (<View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, backgroundColor: '#ff0'}}/>
            <View style={{flex: 1, backgroundColor: '#f0f'}}/>
            <View style={{flex: 1, backgroundColor: '#00f'}}/>
        </View>)
    }

    getJustifyContentBasics() {
        return (<View style={{flex:1,justifyContent:'center',alignItems: 'flex-end'}}>
            <View style={{ height: 50,alignSelf:'stretch', backgroundColor: 'powderblue'}}/>
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
            <View style={{ height: 50,width:100, backgroundColor: 'steelblue'}}/>
        </View>);
    }
}