/**
 * Created by hejg on 2017/1/15.
 */

import React, {Component} from 'react';
import {Alert, Text, View, ListView,RefreshControl, InteractionManager,StyleSheet} from 'react-native';
import util from '../utils/util';

var paramData = { opTime: '20170114', pageNo: 1, pageSize: 10, total: 10 };

export default class AIListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false
        };
        this._refreshData = this._refreshData.bind(this);
        this._endLoadMore = this._endLoadMore.bind(this);
        this._data = [];//缓存页面列表数据
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(()=>{
            this._fetchData();
        });
    }

    _fetchData() {
        var that = this;
        util.ajax(this.props.remoteAddr, paramData, function (data) {
            if (data.state) {
                that._data = that._data.concat(data.info.rows || []);
                that.setState({
                    dataSource: that.state.dataSource.cloneWithRows(that._data),
                    loaded: true
                });
            }
        });
    }
    _refreshData() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows([]),
            loaded: false
        });
        this._data = [];
        paramData.pageNo = 1;
        this._fetchData();
    }
    _endLoadMore() {
        if(this.state.loaded){
            paramData.pageNo++;
            this._fetchData();
        }
    }

    render() {
        if (!this.state.loaded) {
            return (
                <View>
                    <Text style={{textAlign:'center'}}>Loading...</Text>
                </View>
            );
        } else {
            return (
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.props.renderRow}
                    onEndReached={this._endLoadMore}
                    onEndReachedThreshold={5}
                    enableEmptySections
                    refreshControl={
                        <RefreshControl
                            refreshing={false}
                            onRefresh={this._refreshData}
                            tintColor="#ff0000"
                            title="Loading..."
                            titleColor="#00ff00"
                            colors={['#ff0000', '#00ff00', '#0000ff']}
                            progressBackgroundColor="#ffff00"
                        />
                    }
                />
            )
        }
    }
}