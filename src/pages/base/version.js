/**
 * Created by hejg on 2017/1/20.
 */


import React, {Component} from 'react';
import {StyleSheet, View, Alert, Text} from 'react-native';
import util from '../../utils/util';
import main from './main';
import login from './login';

export default class version extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.root}>
                <Text style={styles.versionInfo}>
                    当前APP版本:{util.getConstantField('APP_VERSION')}
                </Text>
                <Text style={styles.versionInfo}>
                    适配APP版本:{this.props.remoteVersion.name}
                </Text>
                <View>
                    <Text style={styles.versionInfo}>
                        您当前使用的APP版本还未支持热更新功能,请联系管理员获取最新版本安装包.
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#3D455F',
        padding:20
        /*justifyContent: 'center',
        alignItems: 'center'*/
    },
    versionInfo: {
        color:'#FFFFFF',
    }
})
