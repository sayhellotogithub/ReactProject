import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {WebView} from 'react-native-webview'
import BasePage from "../BasePage";
import NetUtil from "../../services/NetUtil";

export default class NewsDetailPage extends BasePage {
    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state
        return {
            headerTitle: params.title ? params.title : '新闻详情',
            tabBarVisible: false
        }
    }

    constructor(props) {
        super(props);
        let params = props.route.params
        console.log(props)
        console.log(params)
        console.log(params.newId)
        let newId = params ? params.newId : '0'
        this.state = {
            newId: newId,
            detail: null,
        }
    }

    componentDidMount() {
        this.getNewsDetail()
    }

    componentWillUnmount() {
        this.setState = () => {
            return null
        }
    }

    getNewsDetail() {
        this.startLoading();
        NetUtil.requestNewsDetail(this.state.newId).then((repsonseData) => {
            this.stopLoading({detail: repsonseData})
            this.props.navigation.setParams({title: this.state.detail.title})
        }).catch((error) => {
            this.requestFailure()
            console.log(error)
        })
    }

    placeHolderOnRefresh() {
        this.getNewsDetail()
    }

    render() {
        if (this.state.detail !== null) {
            const script = 'document.getElementsByClassName(\'header-for-mobile\')[0].style.display="none";';
            return super.render(
                <WebView
                    source={{uri: this.state.detail.share_url}}
                    injectedJavaScript={script}
                />
            )
        }
        return super.render(null)
    }
}
const styles = StyleSheet.create({
    contianer: {
        flex: 1,
    },
});
