import React, {Component} from 'react'
import ApiConstants from "./ApiConstants";

export default class NetUtil {
    static requestNewestNews() {
        return BaseServices.request(ApiConstants.latest_news_list_url);
    }

    static requestBeforeNews(date) {
        return BaseServices.request(ApiConstants.news_list_url + date);
    }

    static requestNewsDetail(id) {
        return BaseServices.request(ApiConstants.news_detail_url + id)
    }

    static requestThemList() {
        return BaseServices.request(ApiConstants.theme_list_url)
    }

    static requestThemeDetail(id, lastId) {
        if (lastId !== null) {
            return BaseServices.request(ApiConstants.theme_url + id + '/before/' + lastId)
        } else {
            return BaseServices.request(ApiConstants.theme_url + id)
        }
    }
}

class BaseServices {
    static request(reqUrl) {
        return new Promise(((resolve, reject) => {
            fetch(reqUrl)
                .then((response) => response.json())
                .then((responseData) => {
                    resolve(responseData);
                }).catch((error) => {
                console.error(error);
                reject(error);
            })
        }))
    }
}