/**
 * Created by hejg on 2017/1/11.
 */

import React, {Component} from 'react';
import {Alert, Text, View} from 'react-native';
import {SearchBar} from 'react-native-elements';

export default class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchContent: ''
        };
    }

    render() {
        return (
        <SearchBar lightTheme placeholder='请输入工号或集团的关键字检索...' />
        )
    }
}
