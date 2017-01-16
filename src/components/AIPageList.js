/**
 * Created by hejg on 2017/1/15.
 */

import React, {Component} from 'react';
import {Alert, Text, View, ListView, RefreshControl, InteractionManager, StyleSheet} from 'react-native';
import util from '../utils/util';

export default class AIListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,//是否已经完成首次加载数据,防止触发onEndReached事件
            hasMore: true//是否还有更多未加载完毕的数据,
        };
        this._refreshData = this._refreshData.bind(this);
        this._loadMoreData = this._loadMoreData.bind(this);
        this._data = [];//缓存页面列表数据
        this._paramData = {...this.props.paramData, pageNo: 1, pageSize: 10};
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this._fetchData();
        });
    }

    componentWillReceiveProps(nextProps) {
        let changed = false;//改变任何state都会触发其他相关Props,因此要过滤考虑
        for(let key in nextProps.paramData){
            if(this._paramData[key] !== nextProps.paramData[key]){
                changed = true;
                this._paramData[key] = nextProps.paramData[key];
            }
        }
        if(changed){
            // alert(JSON.stringify(nextProps));
            this._refreshData();//根据新条件重新刷数据
        }
    }

    _fetchData() {
        var _this = this;
        util.ajax(this.props.remoteAddr, this._paramData, function (data) {
            if (data.state) {
                let loadTotal = data.info.total;
                var hopeRowNum = _this._paramData.pageNo * _this._paramData.pageSize;
                hopeRowNum = hopeRowNum > loadTotal ? loadTotal : hopeRowNum;

                _this._data = _this._data.concat(data.info.rows || []);
                _this.setState({
                    dataSource: _this.state.dataSource.cloneWithRows(_this._data),
                    loaded: true,
                    hasMore: loadTotal > hopeRowNum
                });
            }
        });
    }

    _refreshData() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows([]),
            loaded: false,
            hasMore: true
        });
        this._data = [];
        this._paramData.pageNo = 1;
        this._fetchData();
    }

    _loadMoreData() {
        if (this.state.loaded && this.state.hasMore) {
            this._paramData.pageNo++;
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
                    onEndReached={this._loadMoreData}
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