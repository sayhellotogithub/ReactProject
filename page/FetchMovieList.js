import React, {Component} from 'react'
import {Image, StyleSheet, FlatList, Text, View} from 'react-native'

export default class FetchMovieList extends Component {
    MOCKED_MOVIES_DATA = [{
        title: "标题",
        year: "2015",
        posters: {thumbnail: "http://i.imgur.com/UePbdph.jpg"}
    }];

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            loaded: false,
        }
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL).then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    movies: this.state.movies.concat(responseData.movies),
                    loader: true
                })
            })
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (<FlatList
            data={this.state.movies}
            renderItem={this.renderMovie}
            keyExtractor={item => item.id}
        />);
    }

    renderLoadingView() {
        return (<View>
            <Text>正在加载电影数据...</Text>
        </View>);
    }

    renderMovie({item}) {
        // const movie = this.MOCKED_MOVIES_DATA[0]
        return (<View
            style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF'}}>
            <Image source={{uri: item.posters.thumbnail}} style={{width: 40, height: 40, backgroundColor: '#909090'}}/>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 20, marginBottom: 8, textAlign: 'center'}}>{item.title}</Text>
                <Text style={{textAlign: 'center'}}>{item.year}</Text>
            </View>
        </View>);
    }

}
const REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";
