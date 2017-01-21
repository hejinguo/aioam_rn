/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Alert, Text, TouchableOpacity, StatusBar,AsyncStorage} from 'react-native';
import {Button, FormLabel, FormInput} from 'react-native-elements';
import util from '../../utils/util';
import Main from './main';
import Version from './version';

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginCode: '',
            password: '',
            loginMark: ''
        };

    }

    _sendLoginMark() {
        if(this.state.loginCode){
            util.ajax('base/getMark', {loginCode: this.state.loginCode}, function (data) {
                if (data.state) {
                    Alert.alert('提示','验证码发送至' + data.info + ',请查收.');
                }else{
                    Alert.alert('提示', '错误代码:' + data.code);
                }
            });
        }else{
            Alert.alert('提示','请输入工号后继续.');
        }
    }
    _handleLogin() {
        var _this = this;
        if(this.state.loginCode && this.state.password && this.state.loginMark){
            util.ajax('base/login',{loginCode:this.state.loginCode,loginPassword:this.state.password,lastLoginMark:this.state.loginMark},function(data){
                if(data.state && data.info.version.name !== util.getConstantField('APP_VERSION')){
                    _this.props.navigator.replace({//不管登录状态是否有效，只要版本不匹配均进入升级界面
                        component: Version,
                        params: {
                            remoteVersion: data.info.version
                        }
                    });
                }else if(data.state && data.info.version.name === util.getConstantField('APP_VERSION')) {
                    AsyncStorage.setItem("LOGIN_CODE",data.info.loginCode);
                    AsyncStorage.setItem("LOGIN_TOKEN",data.info.loginToken);
                    _this.props.navigator.replace({
                        component: Main
                    })
                }else{
                    Alert.alert('提示', '错误代码:' + data.code);
                }
            });
        }else{
            Alert.alert('提示','请完整输入信息后继续.');
        }
    }

    render() {
        return (
            <View style={styles.root}>
                <View style={[styles.aheader,{paddingTop:__IOS__ ? 20 : 0}]}>
                    <Text style={styles.apptitle}>
                        ESOP+运营助手
                    </Text>
                </View>
                <View style={styles.abody}>
                    <FormLabel labelStyle={styles.formlabel}>工号</FormLabel>
                    <FormInput inputStyle={styles.forminput}
                               placeholder="请输入工号"
                               placeholderTextColor="#A5A5A5"
                               underlineColorAndroid="#A5A5A5"
                               onChangeText={(loginCodeText) => this.setState({loginCode:loginCodeText})}
                    />
                    <FormLabel labelStyle={styles.formlabel}>密码</FormLabel>
                    <FormInput inputStyle={styles.forminput}
                               placeholder="请输入密码"
                               secureTextEntry
                               placeholderTextColor="#A5A5A5"
                               underlineColorAndroid="#A5A5A5"
                               onChangeText={(passwordText) => this.setState({password:passwordText})}
                    />
                    <FormLabel labelStyle={styles.formlabel}>验证码</FormLabel>
                    <FormInput inputStyle={styles.forminput}
                               placeholder="请输入验证码"
                               placeholderTextColor="#A5A5A5"
                               underlineColorAndroid="#A5A5A5"
                               onChangeText={(loginMarkText) => this.setState({loginMark:loginMarkText})}
                    />
                    <TouchableOpacity style={styles.sendmark}
                                      onPress={this._sendLoginMark.bind(this)}>
                        <Text style={{color:'#FFFFFF'}}>获取验证码</Text>
                    </TouchableOpacity>
                    <Button
                        raised
                        title='登录'
                        backgroundColor="#00BFBE"
                        onPress={this._handleLogin.bind(this)}/>
                </View>
                <Text style={styles.afooter}>Copyright © 2010-2017 ESOP TEAM</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#3D455F'
    },
    aheader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    abody: {
        flex: 3,
        alignItems: 'stretch'
    },
    afooter: {
        padding: 5,
        fontSize: 10,
        color: '#86939E',
        textAlign: 'center'
    },
    apptitle: {
        color:'#00BFBE',
        fontSize:16
    },
    sendmark: {
        marginTop: 10,
        marginBottom: 10,
        marginRight: 20,
        alignItems: 'flex-end'
    },
    formlabel: {
        color: '#86939E'
    },
    forminput: {
        color: '#86939E',
        /*borderBottomWidth:StyleSheet.hairlineWidth*/
    }
});