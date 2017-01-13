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
                {/*<Image source={require('./img/app-login-logo.png')} style={styles.logo}/>*/}
                <View style={styles.aheader}>
                    <Text style={{color: '#5CB85C',textAlign:'center'}}>
                        ICON
                    </Text>
                </View>
                <View style={styles.abody}>
                    <FormLabel>工号</FormLabel>
                    <FormInput placeholder="请输入工号"/>
                    <FormLabel>密码</FormLabel>
                    <FormInput placeholder="请输入密码" secureTextEntry/>
                    <FormLabel>验证码</FormLabel>
                    <FormInput placeholder="请输入验证码"/>
                    <TouchableOpacity style={styles.sendmark}>
                        <Text style={{color:'#86939E'}}>获取验证码</Text>
                    </TouchableOpacity>
                    <Button
                        raised
                        title='登录'
                        backgroundColor="#5CB85C"
                        onPress={this._handleLogin.bind(this)}/>
                </View>
                <Text style={styles.afooter}>Copyright © 2010-2017 ESOP</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    acontainer: {
        flex: 1,
        alignItems: 'stretch',
        /*backgroundColor: '#F5F5F5'*/
    },
    aheader: {
        flex: 1,
        justifyContent: 'center'
    },
    abody: {
        flex: 3,
        alignItems: 'stretch',
        padding: 10
    },
    afooter: {
        fontSize: 10,
        padding: 5,
        color: '#666666',
        textAlign: 'center'
    },
    sendmark: {
        marginTop: 10,
        marginBottom: 10,
        marginRight: 20,
        alignItems: 'flex-end'
    }
});