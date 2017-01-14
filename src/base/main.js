/**
 * Created by hejg on 2017/1/11.
 */

import React, {Component} from 'react';
import {Alert, Text, View} from 'react-native';
import {SearchBar, ButtonGroup} from 'react-native-elements';

export default class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 2
        };
    }

    render() {
        const buttons = ['Hello', 'World', 'Buttons'];
        const selectedIndex = this.state.selectedIndex;
        return (
            <View>
        <SearchBar lightTheme placeholder='请输入工号或集团的关键字检索...'/>

        <ButtonGroup
            onPress={(index) => {this.setState({selectedIndex:index})}}
            containerStyle={{height:30}}
            selectedIndex={selectedIndex}
            buttons={buttons} />
            </View>
    )
    }
}
