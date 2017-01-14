/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Alert, TouchableOpacity} from 'react-native';
import {Button, FormLabel, FormInput, Text, Icon} from 'react-native-elements';

import main from './main';

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginCode: '',
            password: '',
            loginMark: ''
        };
    }

    _handleLogin() {
        this.props.navigator.push({
            component: main
        })
    }

    render() {
        return (
            <View style={styles.acontainer}>
                <View style={styles.aheader}>
                    <Text style={{color:'#00BFBE',fontSize:16}}>
                        ESOP+运维宝
                    </Text>
                </View>
                <View style={styles.abody}>
                    <FormLabel labelStyle={styles.formlabel}>工号</FormLabel>
                    <FormInput placeholder="请输入工号" value={this.state.loginCode} placeholderTextColor="#444354"/>
                    <FormLabel labelStyle={styles.formlabel}>密码</FormLabel>
                    <FormInput placeholder="请输入密码" secureTextEntry placeholderTextColor="#444354"/>
                    <FormLabel labelStyle={styles.formlabel}>验证码</FormLabel>
                    <FormInput placeholder="请输入验证码" placeholderTextColor="#444354"/>
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
        backgroundColor: '#252932'
    },
    aheader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    abody: {
        flex: 3,
        alignItems: 'stretch',
        padding: 10
    },
    afooter: {
        fontSize: 10,
        padding: 5,
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
        color:'#86939E'
    },
    forminput: {
        borderBottomWidth: 1,
        borderBottomColor: '#86939E'
    }
});