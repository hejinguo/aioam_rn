/**
 * Created by hejg on 2017/1/14.
 */

import React, {Component} from 'react';
import {Alert, Text, View, ListView, RefreshControl, StyleSheet} from 'react-native';
import {Icon, List} from 'react-native-elements';


export default class InterUnload extends Component {
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

    _fetchData() {//公共组件，URL,和参数通过参数传递进来
        // fetch(REQUEST_URL)
        //     .then((response) => response.json())
        //     .then((responseData) => {
        //         // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        //         this.setState({
        //             dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
        //             loaded: true,
        //         });
        //     });
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '010', '011']),
            loaded: true
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
                        onEndReached={console.log("2222")}
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