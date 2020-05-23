import React, {Component} from 'react'
import PlaceholderView from "../view/PlaceholderView";

import CommonStyles, {colors} from '../style/CommonStyles'
import {SafeAreaView} from "react-navigation";

export default class BasePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: 0
        }
    }

    componentWillUnmount() {
        this.setState = () => {
            return null
        }
    }

    startLoading(state = null) {
        this.setState({...state, isLoading: 1})
    }

    stopLoading(state = null) {
        this.setState({
            ...state, isLoading: 0
        })
    }

    requestFailure() {
        this.setState({isLoading: -1})
    }

    placeHolderOnRefresh() {
    }

    setPlaceHolderView(reloadEvent) {
        this.placeholderView = this.state.isLoading ?
            <PlaceholderView isLoading={this.state.isLoading} reloadEvent={reloadEvent}/> : null;
        return this.placeholderView
    }

    render(page) {
        if (!this.placeholderView) {
            this.noSetPlaceholderView = true
        }
        if (!this.noSetPlaceholderView) {
            this.setPlaceHolderView(this.placeHolderOnRefresh.bind(this))
        }
        return (<SafeAreaView style={{backgroundColor: colors.pageBackgroundColor, flex: 1}}>
            {this.placeholderView}
            {page}
        </SafeAreaView>);
    }
}