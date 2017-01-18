/**
 * Created by never on 2017/1/18.
 */

import React, {Component} from 'react';
import {Alert, Text, View, StyleSheet} from 'react-native';
import {Icon, ListItem} from 'react-native-elements';
import AIPageList from '../../components/AIPageList';

export default class step extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opTime: this.props.opTime,
            procName: this.props.procName
        };
    }

    render() {
        return (
            <View style={styles.root}>
                <View style={styles.aheader}>
                    <View style={{flexDirection:'row'}}>
                        <Icon type="foundation" name='arrow-left'
                              color="#FFFFFF" underlayColor="#3D455F"
                              onPress={() => this.props.navigator.pop()}/>
                        <Text style={{flex:1,textAlign: 'center',color:'#FFFFFF'}}>任务执行({this.props.procName})</Text>
                        <Text></Text>
                    </View>
                </View>
                <View style={styles.abody}>
                    <AIPageList
                        remoteAddr="task/getStep"
                        paramData={{opTime: this.state.opTime,procName: this.state.procName}}
                        renderRow={(item) => {
                            return (
                                <ListItem
                                    key={item.remark}
                                    title={item.remark}
                                    subtitle={
                                        <View>
                                            <View style={{flexDirection:'row'}}>
                                                <View><Text>{item.stepResultName}</Text></View>
                                                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{item.startTime}</Text></View>
                                                <View><Text>{item.endTime}</Text></View>
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
    }
});