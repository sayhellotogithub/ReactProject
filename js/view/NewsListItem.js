import React, {Component} from 'react'
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native'

import ImageItemView from "./ImageItemView";

export default class NewsListItem extends Component {
    constructor(props) {
        super(props);
    }

    _clickItem = () => {
        this.props.onPressItem(this.props.title);
    }

    render() {
        let imageView = this.props.item.images && this.props.item.images.length > 0 ?
            <ImageItemView source={{uri: this.props.item.images[0]}} style={styles.image}/> : null;
        return (<TouchableWithoutFeedback onPress={this._clickItem}>
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={styles.title}>
                        {this.props.item.title}
                    </Text>
                    {imageView}
                </View>
            </View>
        </TouchableWithoutFeedback>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        flex: 1,
        height: 70,
        flexDirection: 'row',
    },
    title: {
        flex: 1,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    image: {
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        width: 70,
        height: 50,
    },
});