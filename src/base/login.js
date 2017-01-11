/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, Button, TextInput, Alert,TouchableOpacity} from 'react-native';

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
    _handleLogin(){
        this.props.navigator.push({
            component:main
        })
    }
    render() {
        return (
            <View style={styles.container}>
                {/*<Image source={require('./img/app-login-logo.png')} style={styles.logo}/>*/}
                <View style={styles.aheader}>
                    <Text style={{color: '#000000',textAlign:'center'}}>
                        政企业务运营支撑助手
                        {this.state.loginCode}
                    </Text>
                </View>
                <View style={styles.abody}>
                    <TextInput
                        editable={true}
                        maxLength={100}
                        placeholder="请输入工号"
                        onChangeText={(text) => {this.setState({loginCode:text})}}
                    />
                    <TextInput
                        secureTextEntry={true}
                        editable={true}
                        maxLength={100}
                        placeholder="请输入密码"
                        onChangeText={(text) => {this.setState({password:text})}}
                    />
                    <View style={{flexDirection:'row',alignItems:'center',paddingBottom:10}}>
                        <TextInput
                            style={{flex:1}}
                            editable={true}
                            maxLength={100}
                            placeholder="请输入验证码"
                            onChangeText={(text) => {this.setState({loginMark:text})}}
                        />
                        <TouchableOpacity onPress={this._handleLogin.bind(this)}>
                            <Text style={{color:'#00C1DE'}}>获取验证码</Text>
                        </TouchableOpacity>
                    </View>
                    <Button title="登陆" color="#7AC23C"
                            onPress={() => Alert.alert(
                            'Alert Title',
                            JSON.stringify(this.state)
                        )}
                    />
                </View>
                <View>
                    <Text style={styles.afooter}>Copyright © 2010-2017 ESOP</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#F5F5F5'
    },
    aheader: {
        flex: 1,
        justifyContent: 'center'
    },
    abody: {
        flex: 2,
        alignItems: 'stretch',
        padding: 10
    },
    afooter: {
        fontSize: 10,
        padding: 5,
        color: '#666666',
        textAlign: 'center'
    }
});