/**
 * Created by hejg on 2017/1/20.
 */
import React, {Component} from "react";
import {Alert, Text, View, StyleSheet, ScrollView, TextInput} from "react-native";
import {Icon} from "react-native-elements";
import util from '../../utils/util';

export default class step extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };
        this._data = [];
    }

    _handleInputSubmit(event){
        let _this = this;
        let searchInfo = event.nativeEvent.text;
        util.ajax('selfHelp/getStaffUnitInfo', {
            searchInfo: searchInfo
        }, function (data) {
            if (data.state) {
                _this._data = _this._data.concat(JSON.stringify(data.info || []));
                _this.setState({
                    dataSource: _this._data
                });
            }else{
                Alert.alert('提示', '错误代码:' + data.code);
            }
        });
    }

    render() {
        return (
            <View style={styles.root}>
                <View style={styles.aheader}>
                    <View style={{flexDirection:'row'}}>
                        <Icon type="foundation" name='arrow-left'
                              color="#FFFFFF" underlayColor="#3D455F"
                              onPress={() => this.props.navigator.pop()}/>
                        <Text style={{flex:1,textAlign: 'center',color:'#FFFFFF'}}>自助服务</Text>
                        <Text></Text>
                    </View>
                </View>
                <View style={styles.abody}>
                    <ScrollView>
                        {
                            this.state.dataSource.map((item,i) => {
                                return <Text key={i}>{item}</Text>
                            })
                        }
                    </ScrollView>
                </View>
                <View style={styles.afooter}>
                    <TextInput
                        placeholder="请输入用户或集团的关键字检索..."
                        underlineColorAndroid="transparent"
                        onSubmitEditing={(event) => {this._handleInputSubmit(event)}}
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
        borderTopColor: '#FF0000',
        borderTopWidth: 1
    }
});