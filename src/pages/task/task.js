/**
 * Created by hejg on 2017/1/16.
 */

import React, {Component} from 'react';
import {
    Alert,
    Text,
    View,
    StyleSheet,
    DatePickerAndroid,
    Modal,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import {Icon, ListItem} from 'react-native-elements';
import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';
import AIPageList from '../../components/AIPageList';
import node from './node';
import util from '../../utils/util';

export default class task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opTime: util.fmtDateTime(new Date((new Date() / 1000 - 86400) * 1000), ''),
            forceRefresh: false,//不考虑paramData,强制刷新数据标记
            modalVisible: false
        };
        this._selectTaskItem = {};
    }

    _tapTaskItem(item) {
        // alert(JSON.stringify(item));
        this._selectTaskItem = item;
        if (this._selectTaskItem.runStatus === 2) {//当按住的是正在执行的任务记录
            this._openTaskNode();
        } else {
            this.setState({modalVisible: true});
        }
    }

    _tapModalMask() {
        this.setState({modalVisible: false});
    }

    _openTaskNode() {
        this.setState({
            forceRefresh: false
        });
        this._tapModalMask();
        this.props.navigator.push({
            component: node,
            params: {
                taskName: this._selectTaskItem.taskName,
                opTime: this._selectTaskItem.opTime,
                taskSeqNo: this._selectTaskItem.taskSeqNo
            }
        })
    }

    _reRunTaskItem() {
        let _this = this;
        this._tapModalMask();
        Alert.alert(
            '提示',
            '是否立即重新执行：' + this._selectTaskItem.taskName,
            [
                {
                    text: '取消', onPress: () => {
                }
                },
                {
                    text: '确定', onPress: () => {
                    util.ajax('task/runTask', {
                        opTime: this._selectTaskItem.opTime,
                        taskCode: this._selectTaskItem.taskCode
                    }, function (data) {
                        if (data.state) {
                            _this.setState({
                                forceRefresh: true
                            });
                        }else{
                            Alert.alert('提示', '错误代码:' + data.code);
                        }
                    });
                }
                },
            ]
        );
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
                        opTime: util.fmtDateTime(new Date(year, month, day), ''),
                        forceRefresh: false
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
                <View style={[styles.aheader,__IOS__ ? styles.aheader_ios : '']}>
                    <View style={styles.aheaderLeft}>
                        <Icon type="foundation" name='arrow-left'
                              color="#FFFFFF" underlayColor="#3D455F"
                              onPress={() => this.props.navigator.pop()}/>
                    </View>
                    <View style={styles.aheaderTitle}>
                        <Text style={{color:'#FFFFFF'}}>任务执行({this.state.opTime})</Text>
                    </View>
                    <View style={styles.aheaderRight}>
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
                        <View tabLabel="正在执行" style={styles.tabView}>
                            <AIPageList
                                remoteAddr="task/getTask/2"
                                paramData={{opTime: this.state.opTime}}
                                forceRefresh={this.state.forceRefresh}
                                renderRow={(item) => {
                                    return (
                                        <ListItem
                                            key={item.taskCode}
                                            title={item.taskName}
                                            subtitle={
                                                <View>
                                                    <View style={{flexDirection:'row'}}>
                                                        <View><Text>{item.taskCode}</Text></View>
                                                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{item.runName}</Text></View>
                                                        <View><Text>{item.beginTime ? item.beginTime:""}</Text></View>
                                                    </View>
                                                </View>
                                            }
                                            onPress={() => {this._tapTaskItem(item)}}
                                            hideChevron
                                        />
                                    );
                                }}
                            />
                        </View>
                        <View tabLabel="执行成功" style={styles.tabView}>
                            <AIPageList
                                remoteAddr="task/getTask/3"
                                paramData={{opTime: this.state.opTime}}
                                forceRefresh={this.state.forceRefresh}
                                renderRow={(item) => {
                                    return (
                                        <ListItem
                                            key={item.taskCode}
                                            title={item.taskName}
                                            subtitle={
                                                <View>
                                                    <View style={{flexDirection:'row'}}>
                                                        <View><Text>{item.taskCode}</Text></View>
                                                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{item.runName}</Text></View>
                                                        <View><Text>{item.beginTime ? item.beginTime:""}</Text></View>
                                                    </View>
                                                </View>
                                            }
                                            onPress={() => {this._tapTaskItem(item)}}
                                            hideChevron
                                        />
                                    );
                                }}
                            />
                        </View>
                        <View tabLabel="执行失败" style={styles.tabView}>
                            <AIPageList
                                remoteAddr="task/getTask/4"
                                paramData={{opTime: this.state.opTime}}
                                forceRefresh={this.state.forceRefresh}
                                renderRow={(item) => {
                                    return (
                                        <ListItem
                                            key={item.taskCode}
                                            title={item.taskName}
                                            subtitle={
                                                <View>
                                                    <View style={{flexDirection:'row'}}>
                                                        <View><Text>{item.taskCode}</Text></View>
                                                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{item.runName}</Text></View>
                                                        <View><Text>{item.beginTime ? item.beginTime:""}</Text></View>
                                                    </View>
                                                </View>
                                            }
                                            onPress={() => {this._tapTaskItem(item)}}
                                            hideChevron
                                        />
                                    );
                                }}
                            />
                        </View>
                    </ScrollableTabView>
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
                            <Text style={{textAlign:'center'}}>{this._selectTaskItem.taskName}</Text>
                            <View style={styles.modalTapView}>
                                <TouchableHighlight
                                    underlayColor="#F5F5F5"
                                    style={styles.modalTapItem}
                                    onPress={() => {this._reRunTaskItem()}}>
                                    <View>
                                        <Icon type="font-awesome" name='random' color="#FF5722"/>
                                        <Text>重新执行任务</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    underlayColor="#F5F5F5"
                                    style={styles.modalTapItem}
                                    onPress={() => {this._openTaskNode()}}>
                                    <View>
                                        <Icon type="font-awesome" name='tasks' color="#000000"/>
                                        <Text>查看任务节点</Text>
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
    tabView: {
        flex: 1,
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