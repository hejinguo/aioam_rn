/**
 * Created by never on 2017/1/18.
 */
import React, {Component} from "react";
import {Alert, Text, View, StyleSheet, AsyncStorage, InteractionManager, WebView} from "react-native";
import {Icon} from 'react-native-elements';

export default class dptLog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dtpLogAddr: ""
        };
    }

    componentDidMount() {
        let _this = this;
        InteractionManager.runAfterInteractions(() => {
            AsyncStorage.getItem("LOGIN_TOKEN", function (error, result) {
                if (result) {
                    let name = _this.props.procName + "_" + _this.props.dlogPath + ".log";
                    _this.setState({
                        dtpLogAddr: "http://218.205.252.12:10029/aioam/file/readDlog?name=" + name + "&loginToken=" + result
                    });
                }
            });
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
                        <Text style={{color:'#FFFFFF'}}>执行日志({this.props.procName})</Text>
                    </View>
                    <View style={styles.aheaderRight}>
                        <Text></Text>
                    </View>
                </View>
                <View style={styles.abody}>
                    <WebView source={{uri: this.state.dtpLogAddr}}/>
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
        padding: 5,
        fontSize: 10,
        color: '#86939E',
        textAlign: 'center'
    }
});