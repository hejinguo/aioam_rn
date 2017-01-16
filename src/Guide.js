/**
 * Created by hejg on 2017/1/16.
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, AsyncStorage} from 'react-native';
import Login from './pages/base/login';
import Main from './pages/base/main';


export default class Guide extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this._validateLogined();
    }

    _validateLogined() {
        var that = this;
        AsyncStorage.getItem("LOGIN_TOKEN", function (error, result) {
            if (result) {//存在LOGIN_TOKEN判断为已经登录，最好Ajax进行验证后确定
                that.props.navigator.replace({
                    component: Main
                })
            } else {//不存在LOGIN_TOKEN判定为尚未登录
                that.props.navigator.replace({
                    component: Login
                })
            }
        });
    }

    render() {
        return (
            <View style={styles.root}>
                <Text style={styles.text}>Loading</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3D455F'
    },
    text:{
      color:'#FFFFFF'
    }
});