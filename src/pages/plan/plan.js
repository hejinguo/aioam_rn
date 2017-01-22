/**
 * Created by hejg on 2017/1/20.
 */

import React, {Component} from 'react';
import {Alert, Text, View, StyleSheet} from 'react-native';
import {Icon, ListItem} from 'react-native-elements';
import AIPageList from '../../components/AIPageList';
import util from '../../utils/util';

export default class step extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchContent:""
        };
        this._planTime = util.fmtDateTime(new Date(), '');
    }

    render() {
        return (
            <View style={styles.root}>
				<View style={[styles.aheader,__IOS__ ? styles.aheader_ios : '']}>
                    <View style={styles.aheaderLeft}>
                        <Icon type="foundation" name='arrow-left'
                              color="#FFFFFF" underlayColor="#3D455F"
                              onPress={() => this.props.navigator.pop()}/>
                    </View>
                    <View style={styles.aheaderTitle}>
                        <Text style={{color:'#FFFFFF'}}>日检值班计划</Text>
                    </View>
                    <View style={styles.aheaderRight}>
                        <Text></Text>
                    </View>
                </View>
                <View style={styles.abody}>

                    <AIPageList
                        remoteAddr="plan/getPlanItemInfo"
                        paramData={{planTime: this._planTime,searchContent: this.state.searchContent}}
                        renderRow={(item) => {
                            return (
                                <ListItem
                                    key={item.planId}
                                    title={item.staffName}
                                    subtitle={
                                        <View>
                                            <View style={{flexDirection:'row'}}>
                                                <View style={{width:100}}><Text>{item.planTime +"_"+(item.planType == 1 ? '日检' : '值班')}</Text></View>
                                                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{item.content}</Text></View>
                                                <View><Text>{item.phoneNo}</Text></View>
                                            </View>
                                        </View>
                                    }
                                    onPress={() => {}}
                                    hideChevron
                                />
                            );
                        }}
                    />
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
        backgroundColor: '#3D455F',
        flexDirection: 'row'
    },
    aheader_ios: {
        height: 64,
        paddingTop: 20
    },
    aheaderLeft: {
        alignItems: 'center', justifyContent: 'center', paddingHorizontal: 5
    },
    aheaderTitle: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
    },
    aheaderRight: {
        alignItems: 'center', justifyContent: 'center', paddingHorizontal: 5
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