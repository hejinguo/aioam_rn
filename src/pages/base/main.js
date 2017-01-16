/**
 * Created by hejg on 2017/1/11.
 */

import React, {Component} from 'react';
import {Alert, Text, View, StyleSheet, TouchableHighlight,StatusBar} from 'react-native';
import {SearchBar, Grid, Row, Col, Icon} from 'react-native-elements';
import inter from '../inter/inter';
import report from '../report/report';
import task from '../task/task';
import file from '../file/file';

export default class main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.root}>
                <View style={styles.aheader}>
                    <View style={{flexDirection:'row',height:0}}>
                        <Icon type="foundation" name='address-book'
                              color="#FFFFFF" underlayColor="#3D455F" iconStyle={{marginLeft:10}}
                              onPress={() => {}}/>
                        <SearchBar
                            containerStyle={{flex:1,backgroundColor: '#3D455F',borderTopWidth:0,borderBottomWidth:0}}
                            inputStyle={{backgroundColor:'#FFFFFF'}}
                            placeholder='请输入工号或集团的关键字检索...'/>
                        <Icon type="foundation" name='calendar'
                              color="#FFFFFF" underlayColor="#3D455F" iconStyle={{marginRight:10}}
                              onPress={() => {}}/>
                    </View>
                    <View style={styles.carousel}>
                        <Text style={{color:'#00BFBE'}}>数据加载情况汇总信息</Text>
                        <Text style={{color:'#00BFBE'}}>日常假期值班安排情况</Text>
                    </View>
                </View>
                <View style={styles.abody}>
                    <Grid>
                        <Row style={{height:100}}>
                            <Col>
                                <TouchableHighlight
                                    style={styles.griditem}
                                    underlayColor="#F5F5F5"
                                    onPress={() => this.props.navigator.push({component: inter})}>
                                    <View>
                                        <Icon type="font-awesome" name='list-ul' color="#9C26B0"/>
                                        <Text>接口加载</Text>
                                    </View>
                                </TouchableHighlight>
                            </Col>
                            <Col>
                                <TouchableHighlight
                                    style={styles.griditem}
                                    underlayColor="#F5F5F5"
                                    onPress={() => this.props.navigator.push({component: task})}>
                                    <View>
                                        <Icon type="font-awesome" name='wpforms' color="#2096F3"/>
                                        <Text>任务执行</Text>
                                    </View>
                                </TouchableHighlight>
                            </Col>
                            <Col>
                                <TouchableHighlight
                                    style={styles.griditem}
                                    underlayColor="#F5F5F5"
                                    onPress={() => this.props.navigator.push({component: report})}>
                                    <View>
                                        <Icon type="font-awesome" name='bar-chart' color="#009588"/>
                                        <Text>报表加载</Text>
                                    </View>
                                </TouchableHighlight>
                            </Col>
                        </Row>
                        <Row style={{height:100}}>
                            <Col>
                                <TouchableHighlight
                                    style={styles.griditem}
                                    underlayColor="#F5F5F5"
                                    onPress={() => {}}>
                                    <View>
                                        <Icon type="font-awesome" name='slideshare' color="#8BC34A"/>
                                        <Text>自助服务</Text>
                                    </View>
                                </TouchableHighlight>
                            </Col>
                            <Col>
                                <TouchableHighlight
                                    style={styles.griditem}
                                    underlayColor="#F5F5F5"
                                    onPress={() => this.props.navigator.push({component: file})}>
                                    <View>
                                        <Icon type="font-awesome" name='file-text-o' color="#FFC108"/>
                                        <Text>我的文件</Text>
                                    </View>
                                </TouchableHighlight>
                            </Col>
                            <Col>
                                <TouchableHighlight
                                    style={styles.griditem}
                                    underlayColor="#F5F5F5"
                                    onPress={() => {}}>
                                    <View>
                                        <Icon type="font-awesome" name='tv' color="#FF5722"/>
                                        <Text>主机监控</Text>
                                    </View>
                                </TouchableHighlight>
                            </Col>
                        </Row>
                        <Row style={{height:100}}>
                            <Col>
                                <TouchableHighlight
                                    style={styles.griditem}
                                    underlayColor="#F5F5F5"
                                    onPress={() => {}}>
                                    <View>
                                        <Icon type="font-awesome" name='sun-o' color="#E81E63"/>
                                        <Text>热门问题</Text>
                                    </View>
                                </TouchableHighlight>
                            </Col>
                            <Col>
                                <TouchableHighlight
                                    style={styles.griditem}
                                    underlayColor="#F5F5F5"
                                    onPress={() => {}}>
                                    <View>
                                        <Icon type="font-awesome" name='balance-scale' color="#9E9E9E"/>
                                        <Text>服务关怀</Text>
                                    </View>
                                </TouchableHighlight>
                            </Col>
                            <Col>
                                <TouchableHighlight
                                    style={styles.griditem}
                                    underlayColor="#F5F5F5"
                                    onPress={() => {}}>
                                    <View>
                                        <Icon type="font-awesome" name='phone' color="#3F51B5"/>
                                        <Text>联系方式</Text>
                                    </View>
                                </TouchableHighlight>
                            </Col>
                        </Row>
                    </Grid>
                </View>
                <Text style={styles.afooter}>Copyright © 2010-2017 ESOP TEAM</Text>
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
        height: 200,
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
    carousel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    griditem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFC',
        margin: 1
    }
});