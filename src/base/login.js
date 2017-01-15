/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Alert, Text, TouchableOpacity,StatusBar} from 'react-native';
import {Button, FormLabel, FormInput, Icon} from 'react-native-elements';
import main from './main';
import util from '../utils/util';

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginCode: 'ai_hejinguo',
            password: '',
            loginMark: ''
        };
    }

    _handleLogin() {
        // AsyncStorage
        util.ajax('base/getMark',{loginCode:this.state.loginCode},function(data){
            if(data.state){
                Alert.alert(
                    'Alert Title',
                    '验证码发送至'+data.info+',请查收.',
                )
            }
        });


        // this.props.navigator.replace({
        //     component: main
        // })
    }

    render() {
        return (
            <View style={styles.acontainer}>
                <StatusBar backgroundColor="#444353"/>
                <View style={styles.aheader}>
                    <Text style={{color:'#00BFBE',fontSize:16}}>
                        ESOP+运营宝
                    </Text>
                </View>
                <View style={styles.abody}>
                    <FormLabel labelStyle={styles.formlabel}>工号</FormLabel>
                    <FormInput inputStyle={styles.forminput} placeholder="请输入工号" placeholderTextColor="#A5A5A5"/>
                    <FormLabel labelStyle={styles.formlabel}>密码</FormLabel>
                    <FormInput inputStyle={styles.forminput} placeholder="请输入密码" secureTextEntry placeholderTextColor="#A5A5A5"/>
                    <FormLabel labelStyle={styles.formlabel}>验证码</FormLabel>
                    <FormInput inputStyle={styles.forminput} placeholder="请输入验证码" placeholderTextColor="#A5A5A5"/>
                    <TouchableOpacity style={styles.sendmark} onPress={this._handleLogin.bind(this)}>
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
    acontainer: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#444353'
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
        /*borderBottomWidth: 1,*/
        color: '#86939E'
    }
});