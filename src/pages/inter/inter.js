/**
 * Created by hejg on 2017/1/14.
 */

import React, {Component} from 'react';
import {Alert, Text, View, StyleSheet, DatePickerAndroid} from 'react-native';
import {Icon, ListItem} from 'react-native-elements';
import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';
import AIPageList from '../../components/AIPageList';
import util from '../../utils/util';

export default class inter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opTime: util.fmtDateTime(new Date((new Date() / 1000 - 86400) * 1000), '')
        };
    }

    async _onPressChangeDate() {
        let _this = this;
        if (__ANDROID__) {
            try {
                const {action, year, month, day} = await DatePickerAndroid.open({
                    // 要设置默认值为今天的话，使用`new Date()`即可。
                    date: new Date((new Date() / 1000 - 86400) * 1000),
                    maxDate: new Date((new Date() / 1000 - 86400) * 1000)
                });
                if (action !== DatePickerAndroid.dismissedAction) {
                    // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
                    _this.setState({
                        opTime: util.fmtDateTime(new Date(year,month,day), '')
                    });
                }
            } catch ({code, message}) {
                console.warn('Cannot open date picker', message);
            }

        } else {
            Alert.alert('提示', '对不起,此处暂时未处理IOS平台逻辑.');
        }
    }

    render() {
        return (
            <View style={styles.root}>
                <View style={styles.aheader}>
                    <View style={{flexDirection:'row'}}>
                        <Icon type="foundation" name='arrow-left'
                              color="#FFFFFF" underlayColor="#3D455F"
                              onPress={() => this.props.navigator.pop()}/>
                        <Text style={{flex:1,textAlign: 'center',color:'#FFFFFF'}}>接口加载({this.state.opTime})</Text>
                        <Icon type="foundation" name='calendar'
                              color="#FFFFFF" underlayColor="#3D455F"
                              onPress={this._onPressChangeDate.bind(this)}/>
                    </View>
                </View>
                <View style={styles.abody}>
                    <ScrollableTabView renderTabBar={() => <DefaultTabBar />}
                                       locked
                                       tabBarBackgroundColor="#3D455F"
                                       tabBarInactiveTextColor="#FFFFFF"
                                       tabBarActiveTextColor="#00BFBE"
                                       tabBarUnderlineStyle={{backgroundColor:'#00BFBE'}}>
                        <View tabLabel="已加载接口明细" style={styles.tabView}>
                            <AIPageList
                                remoteAddr="inter/getLoadded"
                                paramData={{opTime: this.state.opTime}}
                                renderRow={(item) => {
                                    return (
                                        <ListItem
                                            key={item.interCode}
                                            title={item.tabname}
                                            subtitle={
                                                <View style={{flexDirection:'row'}}>
                                                    <View><Text>{item.interCode}</Text></View>
                                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{item.interTypeName}</Text></View>
                                                    <View><Text>{item.triggerTime ? item.triggerTime:""}</Text></View>
                                                </View>
                                            }
                                            //onPress={() => {console.log(item.tabname)}}
                                            hideChevron
                                        />
                                    );
                                }}
                            />
                        </View>
                        <View tabLabel="未加载接口明细" style={styles.tabView}>
                            <AIPageList
                                remoteAddr="inter/getUnLoadded"
                                paramData={{opTime: this.state.opTime}}
                                renderRow={(item) => {
                                    return (
                                        <ListItem
                                            key={item.tabname}
                                            title={item.tabname}
                                            subtitle={
                                                <View style={{flexDirection:'row'}}>
                                                    <View><Text>{item.interCode}</Text></View>
                                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{item.interTypeName}</Text></View>
                                                    <View><Text>{item.triggerTime ? item.triggerTime:""}</Text></View>
                                                </View>
                                            }
                                            //onPress={() => {console.log(item.tabname)}}
                                            hideChevron
                                        />
                                    );
                                }}
                            />
                        </View>
                    </ScrollableTabView>
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
    tabView: {
        flex: 1,
    }
});