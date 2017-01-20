/**
 * Created by hejg on 2017/1/16.
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, AsyncStorage} from 'react-native';
import Login from './pages/base/login';
import Main from './pages/base/main';
import Version from './pages/base/version';
import util from './utils/util';

export default class Guide extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this._validateLogined();
    }

    _validateLogined() {
        var _this = this;
        AsyncStorage.getItem("LOGIN_TOKEN", function (error, result) {
            if (result) {//存在LOGIN_TOKEN可初判已经登录，然后通过Ajax进行验证后确定
                util.ajax('base/getUser', {}, function (data) {
                    if(data.info.version.name !== util.getConstantField('APP_VERSION')){
                        _this.props.navigator.replace({//不管登录状态是否有效，只要版本不匹配均进入升级界面
                            component: Version,
                            params: {
                                remoteVersion: data.info.version
                            }
                        });
                    }else if(data.state) {
                        _this.props.navigator.replace({//APP版本合法且登录状态有效时直接进入主页
                            component: Main
                        });
                    }else if(!data.state){
                        _this.props.navigator.replace({//APP版本合法但判断未登录时进入登录页面
                            component: Login
                        });
                    }
                }, function (error) {//Ajax验证异常时进入登录界面
                    _this.props.navigator.replace({
                        component: Login
                    });
                });
            } else {//不存在LOGIN_TOKEN判定为尚未登录
                _this.props.navigator.replace({
                    component: Login
                });
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