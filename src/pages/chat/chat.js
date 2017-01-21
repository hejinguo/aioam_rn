/**
 * Created by hejg on 2017/1/20.
 */
import React, {Component} from "react";
import {Alert, Text, View, StyleSheet, ScrollView, TextInput, InteractionManager} from "react-native";
import {Icon} from "react-native-elements";
import util from "../../utils/util";

export default class step extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            loaded: this.props.searchInfo ? true : false
        };
        this._data = [];
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            if(this.props.searchInfo){
                this._fetchData(this.props.searchInfo);
            }
        });
    }

    _handleInputSubmit(event) {
        this._fetchData(event.nativeEvent.text);
    }

    _fetchData(searchInfo) {
        let _this = this;
        _this.setState({
            loaded: true
        });
        util.ajax('selfHelp/getStaffUnitInfo', {
            searchInfo: searchInfo
        }, function (data) {
            if (data.state) {
                _this._data = _this._data.concat(JSON.stringify(data.info || []));
                _this.setState({
                    dataSource: _this._data,
                    loaded: false
                });
            } else {
                Alert.alert('提示', '错误代码:' + data.code);
            }
        });
    }

    render() {
        return (
            <View style={styles.root}>
				<View style={[styles.aheader,{paddingTop:__IOS__ ? 20 : 0}]}>
                    <View style={styles.aheaderLeft}>
                        <Icon type="foundation" name='arrow-left'
                              color="#FFFFFF" underlayColor="#3D455F"
                              onPress={() => this.props.navigator.pop()}/>
                    </View>
                    <View style={styles.aheaderTitle}>
                        <Text style={{color:'#FFFFFF'}}>自助服务</Text>
                    </View>
                    <View style={styles.aheaderRight}>
                        <Text></Text>
                    </View>
                </View>
                <View style={styles.abody}>
                    {this.state.loaded ? <Text style={{textAlign:'center'}}>loading</Text> : <Text style={{height:0}}></Text>}
                    <ScrollView>
                        {
                            this.state.dataSource.map((item, i) => {
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
        backgroundColor: '#3D455F',
        flexDirection: 'row'
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
        borderTopColor: '#FF0000',
        borderTopWidth: 1
    }
});