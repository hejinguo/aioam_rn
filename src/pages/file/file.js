/**
 * Created by hejg on 2017/1/16.
 */

import React, {Component} from 'react';
import {Alert, Text, View, StyleSheet, InteractionManager} from 'react-native';
import {Icon, List,ListItem} from 'react-native-elements';
import util from '../../utils/util';

export default class file extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileItems:[]
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this._fetchData();
        });
    }

    _fetchData() {
        var _this = this;
        util.ajax('file/list', {}, function (data) {
            if (data.state) {
                _this.setState({
                    fileItems:data.info
                });
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
                        <Text style={{flex:1,textAlign: 'center',color:'#FFFFFF'}}>我的文件</Text>
                        <Text></Text>
                    </View>
                </View>
                <View style={styles.abody}>
                    <List containerStyle={{marginTop:0}}>
                        {
                            this.state.fileItems.map((item,i) => {
                                return <ListItem
                                    key={item.name}
                                    title={item.name}
                                    subtitle={
                                        <View style={{flexDirection:'row'}}>
                                            <View style={{flex:1}}><Text>大小:{item.size}</Text></View>
                                            <View><Text>{item.directory ? '目录' : '文件'}</Text></View>
                                        </View>
                                    }
                                    //onPress={() => {console.log(item.tabname)}}
                                    hideChevron/>;
                            })
                        }
                    </List>

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
        /*height: 200,*/
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
    },
    tabView: {
        flex: 1,
    }
});