/**
 * Created by hejg on 2017/1/11.
 */

import React, {Component} from 'react';
import {Alert, Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import {SearchBar, Grid, Row, Col, Icon} from 'react-native-elements';

export default class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 2
        };
    }

    render() {
        return (
            <View style={styles.acontainer}>
                <View style={styles.aheader}>
                    <View style={{flexDirection:'row'}}>
                        <Icon type="font-awesome" name='user-circle' color="#00BFBE" iconStyle={{paddingLeft:10}}/>
                        <SearchBar
                            containerStyle={{flex:1,backgroundColor: '#252932',borderTopWidth:0,borderBottomWidth:0}}
                            inputStyle={{backgroundColor:'#FFFFFF'}}
                            placeholder='请输入工号或集团的关键字检索...'/>
                        <Icon type="font-awesome" name='calendar' color="#00BFBE" iconStyle={{paddingRight:10}}/>
                    </View>
                    <View style={styles.carousel}>
                        <Text style={{color:'#FFFFFF'}}>数据加载情况汇总信息</Text>
                        <Text style={{color:'#FFFFFF'}}>日常假期值班安排情况</Text>
                    </View>
                </View>
                <View style={styles.abody}>
                    <Grid>
                        <Row style={{height:100}}>
                            <Col>
                                <TouchableHighlight
                                    style={styles.griditem}
                                    underlayColor="#F5F5F5"
                                    onPress={() => {}}>
                                    <View>
                                        <Icon type="font-awesome" name='list-ul'/>
                                        <Text>接口加载</Text>
                                    </View>
                                </TouchableHighlight>
                            </Col>
                            <Col>
                                <TouchableHighlight
                                    style={styles.griditem}
                                    underlayColor="#F5F5F5"
                                    onPress={() => {}}>
                                    <View>
                                        <Icon type="font-awesome" name='wpforms'/>
                                        <Text>任务执行</Text>
                                    </View>
                                </TouchableHighlight>
                            </Col>
                            <Col>
                                <TouchableHighlight
                                    style={styles.griditem}
                                    underlayColor="#F5F5F5"
                                    onPress={() => {}}>
                                    <View>
                                        <Icon type="font-awesome" name='bar-chart'/>
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
                                        <Icon type="font-awesome" name='slideshare'/>
                                        <Text>自助服务</Text>
                                    </View>
                                </TouchableHighlight>
                            </Col>
                            <Col>
                                <TouchableHighlight
                                    style={styles.griditem}
                                    underlayColor="#F5F5F5"
                                    onPress={() => {}}>
                                    <View>
                                        <Icon type="font-awesome" name='file-text-o'/>
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
                                        <Icon type="font-awesome" name='tv'/>
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
                                        <Icon type="font-awesome" name='sun-o'/>
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
                                        <Icon type="font-awesome" name='balance-scale'/>
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
                                        <Icon type="font-awesome" name='users'/>
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
    acontainer: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF'
    },
    aheader: {
        height: 200,
        backgroundColor: '#252932'
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
