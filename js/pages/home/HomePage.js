import React from 'react'
import {StyleSheet, SectionList, View, Text} from 'react-native'
import BasePage from "../BasePage";
import NetUtil from "../../services/NetUtil";
import NewsListItem from "../../view/NewsListItem"
import {Line} from "../../view/Line";
import SwiperHeader from "../../view/SwiperHeader";
import NewsSection from "../../view/NewsSection";

export default class HomePage extends BasePage {
    static navigationOptions = {
        headerTitle: '今日热点',
    }

    constructor(props) {
        super(props);
        this.state = {
            sections: [],
            rotations: [],
            lastDate: 0,
            refreshing: false,
        }
    }

    componentDidMount() {
        this.getNewsNews()
    }

    componentWillUnmount() {
        this.setState = () => {
            return null;
        }
    }

    getNewsNews() {
        this.startLoading({
            refreshing: true
        })

        NetUtil.requestNewestNews().then((responseData) => {
            let tempData = [{key: 100, data: responseData.top_stories}]
            this.stopLoading({
                sections: tempData,
                rotations: responseData.top_stories,
                lastDate: responseData.date,
                refreshing: false,
            })
        }).catch((error) => {
            this.requestFailure();
            console.log(error)
        })
    }

    getMoreNews() {
        NetUtil.requestBeforeNews(this.state.lastDate)
            .then((responseData) => {
                let tempData = this.state.sections;
                tempData.push({
                    key: responseData.date,
                    data: responseData.stories
                })

                this.setState({
                    sections: tempData,
                    lastDate: responseData.date,
                })
            }).catch((error) => {
            console.log(error)
        })
    }

    renderItem({item}) {
        return (
            <NewsListItem id={item.id}
                          onPressItem={() => {
                              // this.props.navigation.navigate('newsDetail', {newsId: item.id})
                          }}
                          item={item}
            />)

    }

    placeHolderOnRefresh() {
        this.getNewsNews()
    }

    render() {

        if (this.state.sections.length > 0) {
            return super.render(
                <View style={styles.listView}>
                    <SectionList
                        style={styles.listView}
                        renderSectionHeader={(info) => {
                            return (<NewsSection section={info.section}/>)
                        }}
                        sections={this.state.sections}
                        ListHeaderComponent={
                            (<SwiperHeader
                                stories={this.state.rotations}
                                onPress={(id) => {
                                    // this.props.navigation.navigate("newDetail", {newId: id})
                                }}> </SwiperHeader>)
                        }
                        renderItem={this.renderItem.bind(this)}
                        keyExtractor={(item) => {
                            return (item.id + "")
                        }}
                        onEndReached={this.getMoreNews.bind(this)}
                        onRefresh={this.getNewsNews.bind(this)}
                        refreshing={this.state.refreshing}
                        stickySectionHeadersEnabled={false}
                        ItemSeparatorComponent={Line}
                    />
                </View>
            )
        }
        return super.render(null);
    }
}


const styles = StyleSheet.create({
    listView: {
        flex: 1,
    },
});