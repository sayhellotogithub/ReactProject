import React, {Component} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import {layout} from '../config/Constants'
import {colors} from "../style/CommonStyles";

export class Line extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props && this.props.hidden) {
            return null;
        }
        return (
            <View style={styles.line}/>

        )
    };
}

const styles = StyleSheet.create({
    line: {
        flex: 0,
        height: layout.bottomLineHeight,
        backgroundColor: colors.bottomLineColor,
    }
});