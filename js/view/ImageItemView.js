import React, {Component} from 'react'
import {StyleSheet, ImageBackground} from 'react-native'
import ImagePlaceholder from "./ImagePlaceholder";

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLoading: true,
        }
    }

    render() {
        return <ImageBackground
            {...this.props}
            style={[styles.image,this.props.style]}
            onLoad={() => {
                this.setState({imageLoading: false})
            }}
        >
            <ImagePlaceholder finished={!this.state.imageLoading}/>
        </ImageBackground>;
    }
}
const styles = StyleSheet.create({
    image:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#bfbfbf',
    }
});