/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Image, View, TextInput, Alert,TouchableOpacity} from 'react-native';
import {
    Button,
    Icon,
    Text,
    InputGroup,
    Input,
    List,
    ListItem
} from 'native-base';

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
                        <Icon name="ios-unlock" style={{ color: '#5CB85C'}} />
                    </Text>
                </View>
                <View style={styles.abody}>
                    <List>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-person" style={{ color: '#5CB85C' }} />
                                <Input placeholder="请输入工号" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-unlock" style={{ color: '#5CB85C' }} />
                                <Input placeholder="请输入密码" secureTextEntry />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-call" style={{ color: '#5CB85C' }} />
                                <Input placeholder="请输入验证码" keyboardType="numeric" />
                            </InputGroup>
                        </ListItem>
                    </List>
                    <TouchableOpacity style={{marginTop: 10,alignItems:'flex-end'}}><Text>获取验证码</Text></TouchableOpacity>
                    <Button block success style={{marginTop: 10, marginBottom: 10 }} onPress={() => this._handleLogin()}>登录</Button>
                </View>
                <Text style={styles.afooter}>Copyright © 2010-2017 ESOP</Text>
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