import React, {Component} from 'react'
import {WebView, StyleSheet, View} from 'react-native'
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
        const {params} = this.props.navigation.state
        const newId = params ? params.newId : '0'
        this.state = {
            newId: newId,
            detail: null,
        }
    }

    componentDidMount() {
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
            return super.render(<View style={styles.container}>
                <WebView
                    source={{url: this.state.detail.share_url}}
                    injectedJavaScript={script}
                />
            </View>)
        }
        return super.render(null)
    }
}
const styles = StyleSheet.create({
    contianer: {
        flex: 1,
    },
});
