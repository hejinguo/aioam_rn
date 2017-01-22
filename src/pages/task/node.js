/**
 * Created by hejg on 2017/1/18.
 */

import React, {Component} from 'react';
import {Alert, Text, View, StyleSheet, Modal, TouchableOpacity, TouchableHighlight} from 'react-native';
import {Icon, ListItem} from 'react-native-elements';
import AIPageList from '../../components/AIPageList';
import dptLog from './dptLog';
import step from './step';

export default class node extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opTime: this.props.opTime,
            taskSeqNo: this.props.taskSeqNo,
            modalVisible: false
        };
        this._selectTaskItem = {};
    }

    _tapNodeItem(item) {
        // alert(JSON.stringify(item));
        this._selectTaskItem = item;
        if (this._selectTaskItem.mkexeSh) {//当按住的是DPT程序节点
            this.setState({modalVisible: true});
        } else {
            Alert.alert('提示', '不是DPT程序节点,无法查看任务步骤.');
        }
    }

    _tapModalMask() {
        this.setState({modalVisible: false});
    }

    _openNodeStep() {
        this._tapModalMask();
        this.props.navigator.push({
            component: step,
            params: {
                opTime: this._selectTaskItem.opTime,
                procName: this._selectTaskItem.procName
            }
        });
    }

    _openDptLog() {
        this._tapModalMask();
        this.props.navigator.push({
            component: dptLog,
            params: {
                procName: this._selectTaskItem.procName,
                dlogPath: this._selectTaskItem.dlogPath
            }
        });
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
                        <Text style={{color:'#FFFFFF'}}>任务节点({this.props.taskName})</Text>
                    </View>
                    <View style={styles.aheaderRight}>
                        <Text></Text>
                    </View>
                </View>
                <View style={styles.abody}>
                    <AIPageList
                        remoteAddr="task/getNode"
                        paramData={{opTime: this.state.opTime,taskSeqNo: this.state.taskSeqNo}}
                        renderRow={(item) => {
                            return (
                                <ListItem
                                    key={item.nodeSeqNo}
                                    title={item.nodeName}
                                    subtitle={
                                        <View>
                                            <View style={{flexDirection:'row'}}>
                                                <View><Text>{item.nodeRunStatusName}</Text></View>
                                                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{item.nodeId}</Text></View>
                                                <View><Text>{item.nodeSeqNo}</Text></View>
                                            </View>
                                        </View>
                                    }
                                    onPress={() => {this._tapNodeItem(item)}}
                                    hideChevron
                                />
                            );
                        }}
                    />
                </View>
                <Modal animationType="none"
                       transparent={true}
                       onRequestClose={() => {}}
                       visible={this.state.modalVisible}>
                    <View style={{flex:1}}>
                        <TouchableOpacity style={styles.modalTouchable}
                                          onPress={() => {this._tapModalMask()}}>
                            <Text></Text>
                        </TouchableOpacity>
                        <View style={styles.modalView}>
                            <Text style={{textAlign:'center'}}>{this._selectTaskItem.nodeName}</Text>
                            <View style={styles.modalTapView}>
                                <TouchableHighlight
                                    underlayColor="#F5F5F5"
                                    style={styles.modalTapItem}
                                    onPress={() => {this._openDptLog()}}>
                                    <View>
                                        <Icon type="font-awesome" name='info-circle' color="#FF5722"/>
                                        <Text>DPT程序日志</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    underlayColor="#F5F5F5"
                                    style={styles.modalTapItem}
                                    onPress={() => {this._openNodeStep()}}>
                                    <View>
                                        <Icon type="font-awesome" name='tasks' color="#000000"/>
                                        <Text>查看程序步骤</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Modal>
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
    },
    modalTouchable: {
        flex: 1,
        backgroundColor: '#3D455F88'
    },
    modalView: {
        borderTopWidth: StyleSheet.hairlineWidth,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 120
    },
    modalTapView: {
        flexDirection: 'row',
        flex: 1
    },
    modalTapItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFC',
        margin: 1
    }
});