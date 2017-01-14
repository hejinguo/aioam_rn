/**
 * Created by hejg on 2017/1/14.
 */

import React, {Component} from 'react';
import {Alert, Text, View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

export default class inter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.acontainer}>
                <View style={styles.aheader}>
                    <View style={{flexDirection:'row'}}>
                        <Icon type="foundation" name='arrow-left'
                              color="#FFFFFF" underlayColor="#444353"
                              onPress={() => this.props.navigator.pop()}/>
                        <Text style={{flex:1,textAlign: 'center',color:'#FFFFFF'}}>112233</Text>
                        <Icon type="foundation" name='calendar'
                              color="#FFFFFF" underlayColor="#444353"
                              onPress={() => {}}/>
                    </View>
                </View>
                <View style={styles.abody}>
                    <ScrollableTabView initialPage={2} renderTabBar={() => <DefaultTabBar />}>
                        <Text tabLabel='Tab #1'>My</Text>
                        <Text tabLabel='Tab #2'>favorite</Text>
                        <Text tabLabel='Tab #3'>project</Text>
                        <Text tabLabel='Tab #4'>favorite</Text>
                        <Text tabLabel='Tab #5'>project</Text>
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
        padding:10,
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
    }
});