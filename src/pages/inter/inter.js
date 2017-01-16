/**
 * Created by hejg on 2017/1/14.
 */

import React, {Component} from 'react';
import {Alert, Text, View, StyleSheet,StatusBar} from 'react-native';
import {Icon,ListItem} from 'react-native-elements';
import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';
import AIListView from '../../components/AIListView';

export default class inter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opTime: '20170115'
        };
    }

    render() {
        return (
            <View style={styles.acontainer}>
                <StatusBar backgroundColor="#3D455F"/>
                <View style={styles.aheader}>
                    <View style={{flexDirection:'row'}}>
                        <Icon type="foundation" name='arrow-left'
                              color="#FFFFFF" underlayColor="#3D455F"
                              onPress={() => this.props.navigator.pop()}/>
                        <Text style={{flex:1,textAlign: 'center',color:'#FFFFFF'}}>接口加载(20170115)</Text>
                        <Icon type="foundation" name='calendar'
                              color="#FFFFFF" underlayColor="#3D455F"
                              onPress={() => {}}/>
                    </View>
                </View>
                <View style={styles.abody}>
                    <ScrollableTabView renderTabBar={() => <DefaultTabBar />}
                                       locked
                                       tabBarBackgroundColor="#3D455F"
                                       tabBarInactiveTextColor="#FFFFFF"
                                       tabBarActiveTextColor="#00BFBE"
                                       tabBarUnderlineStyle={{backgroundColor:'#00BFBE'}}>
                        <View tabLabel="已加载接口明细" containerStyle={styles.tabView}>
                            <AIListView
                                remoteAddr="inter/getLoadded"
                                paramData={{opTime: this.state.opTime, pageNo: 1, pageSize: 10, total: 10}}
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
                                            onPress={() => {console.log(item.tabname)}}
                                            hideChevron
                                        />
                                    );
                                }}
                            />
                        </View>
                        <View tabLabel="未加载接口明细" style={styles.tabView}>
                            <AIListView
                                remoteAddr="inter/getUnLoadded"
                                paramData={{opTime: this.state.opTime, pageNo: 1, pageSize: 10, total: 10}}
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
                                            onPress={() => {console.log(item.tabname)}}
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
    acontainer: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF'
    },
    aheader: {
        /*height: 200,*/
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