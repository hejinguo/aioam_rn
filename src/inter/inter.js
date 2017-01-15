/**
 * Created by hejg on 2017/1/14.
 */

import React, {Component} from 'react';
import {Alert, Text, View, StyleSheet,StatusBar} from 'react-native';
import {Icon,ListItem} from 'react-native-elements';
import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';
import InterLoaded from './inter_loaded';
import InterUnload from './inter_unload';

export default class inter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.acontainer}>
                <StatusBar backgroundColor="#444353"/>
                <View style={styles.aheader}>
                    <View style={{flexDirection:'row'}}>
                        <Icon type="foundation" name='arrow-left'
                              color="#FFFFFF" underlayColor="#444353"
                              onPress={() => this.props.navigator.pop()}/>
                        <Text style={{flex:1,textAlign: 'center',color:'#FFFFFF'}}>接口加载(20170115)</Text>
                        <Icon type="foundation" name='calendar'
                              color="#FFFFFF" underlayColor="#444353"
                              onPress={() => {}}/>
                    </View>
                </View>
                <View style={styles.abody}>
                    <ScrollableTabView renderTabBar={() => <DefaultTabBar />}
                                       locked
                                       tabBarBackgroundColor="#444353"
                                       tabBarInactiveTextColor="#FFFFFF"
                                       tabBarActiveTextColor="#00BFBE"
                                       tabBarUnderlineStyle={{backgroundColor:'#00BFBE'}}>
                        <View tabLabel="已加载接口明细" containerStyle={styles.tabView}>
                            <InterLoaded
                                renderRow={(rowData) => {
                                    return (
                                        <ListItem
                                            title={rowData+"xxxxxxxx"}
                                            subtitle={rowData+"yyyyyyyyy"}
                                            hideChevron
                                        />
                                    );
                                }}
                            />
                        </View>
                        <View tabLabel="未加载接口明细" style={styles.tabView}>
                            <InterUnload
                                renderRow={(rowData) => {
                                    return (
                                        <ListItem
                                            title={rowData+"aaaaaaaaaa"}
                                            subtitle={rowData+"bbbbbbbb"}
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
        backgroundColor: '#444353'
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