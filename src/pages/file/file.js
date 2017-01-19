/**
 * Created by hejg on 2017/1/16.
 */

import React, {Component} from 'react';
import {Alert, Text, View, StyleSheet, ScrollView, InteractionManager, Clipboard, AsyncStorage} from 'react-native';
import {Icon, ListItem} from 'react-native-elements';
import util from '../../utils/util';

export default class file extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileItems: [],
            loaded: false
        };
        this._loginToken = "";
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this._fetchData();
        });
    }

    async _fetchData() {
        let _this = this;
        _this._loginToken = await AsyncStorage.getItem("LOGIN_TOKEN");
        util.ajax('file/list', {}, function (data) {
            if (data.state) {
                _this.setState({
                    fileItems: data.info,
                    loaded: true
                });
            }
        });
    }

    render() {
        return (
            <View style={styles.root}>
                <View style={styles.aheader}>
                    <View style={{flexDirection:'row'}}>
                        <Icon type="foundation" name='arrow-left'
                              color="#FFFFFF" underlayColor="#3D455F"
                              onPress={() => this.props.navigator.pop()}/>
                        <Text style={{flex:1,textAlign: 'center',color:'#FFFFFF'}}>我的文件</Text>
                        <Text></Text>
                    </View>
                </View>
                <View style={styles.abody}>
                    <View>
                        <Text style={styles.loadedText}>{this.state.loaded ? '长按文件复制下载地址到剪贴板' : 'loading...'}</Text>
                    </View>
                    <ScrollView style={{borderTopWidth:StyleSheet.hairlineWidth,borderTopColor:'#000000'}}>
                        {
                            this.state.fileItems.map((item, i) => {
                                return <ListItem
                                    key={item.name}
                                    title={item.name}
                                    subtitle={
                                        <View style={{flexDirection:'row'}}>
                                            <View style={{flex:1}}><Text>大小:{item.size}</Text></View>
                                            <View><Text>{item.directory ? '目录' : '文件'}</Text></View>
                                        </View>
                                    }
                                    onLongPress={() => {
                                        Clipboard.setString("http://hejinguo.win:10029/aioam/file/get?name="+item.name+"&loginToken="+this._loginToken);
                                        Alert.alert('提示','已复制文件下载地址到剪贴板.')
                                    }}
                                    hideChevron/>;
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF'
    },
    aheader: {
        height: 44,
        padding: 10,
        backgroundColor: '#3D455F'
    },
    abody: {
        flex: 1,
        alignItems: 'stretch'
    },
    afooter: {
        padding: 5,
        fontSize: 10,
        color: '#86939E',
        textAlign: 'center'
    },
    loadedText: {
        textAlign: 'center',
        color: '#999999',
        fontSize: 12
    }
});