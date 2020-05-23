import React, {Component} from 'react'
import WebView from "react-native-webview";

export default class extends Component {
    render() {
        return (<WebView
            source={{uri: 'https://daily.zhihu.com/story/9724110'}}
        />);
    }
}