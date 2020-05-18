import React, {Component} from 'react'
import {Text, View} from 'react-native';

export default class  Blink extends Component {
    state = {isShowingText: true};

    componentDidMount() {
        setInterval(() => {
            this.setState({isShowingText: !this.state.isShowingText});
        }, 1000)
    }
    render() {
        if(!this.state.isShowingText){
            return null;
        }
        return (<Text>{this.props.text}</Text>)
    }
}