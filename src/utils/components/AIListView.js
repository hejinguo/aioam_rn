/**
 * Created by hejg on 2017/1/15.
 */

import React, {Component} from 'react';
import {Alert, Text, View, ListView,RefreshControl, StyleSheet} from 'react-native';
import {Icon, List} from 'react-native-elements';
import util from '../util';

export default class InterLoaded extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false
        };
        this._fetchData = this._fetchData.bind(this);
    }

    componentDidMount() {
        this._fetchData();
    }

    _fetchData() {
        let paramData = { opTime: '20170114', pageNo: 1, pageSize: 10, total: 10 };
        var that = this;
        util.ajax(this.props.remoteAddr, paramData, function (data) {
            if (data.state) {
                that.setState({
                    dataSource: that.state.dataSource.cloneWithRows(data.info.rows || []),
                    loaded: true
                });
            }
        });
    }

    render() {
        if (!this.state.loaded) {
            return (
                <Text>Loading...</Text>
            );
        } else {
            return (
                <List containerStyle={{marginTop:1}}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.props.renderRow}
                        onEndReached={console.log("11111")}
                        refreshControl={
                            <RefreshControl
                                refreshing={false}
                                onRefresh={() => {}}
                                tintColor="#ff0000"
                                title="Loading..."
                                titleColor="#00ff00"
                                colors={['#ff0000', '#00ff00', '#0000ff']}
                                progressBackgroundColor="#ffff00"
                            />
                        }
                    />
                </List>
            )
        }
    }
}