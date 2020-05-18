import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

export default class FlatListBasics extends Component {

    state = {
        flatdata: [{key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},]
    };

    render() {
        return <View style={{paddingTop:20}}>
            <FlatList data={this.state.flatdata} renderItem={({item}) => <Text style={{
                padding: 10,
                fontSize: 18,
                height: 44
            }}>{item.key}</Text>}/>
        </View>;
    }
}
