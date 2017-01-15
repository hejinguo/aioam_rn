/**
 * Created by hejg on 2017/1/11.
 */

import React, {Component} from 'react';
import {AppRegistry, Navigator} from 'react-native';
import login from './login';

const defaultRoute = {
    component: login
};

class guide extends Component {
    _renderScene(route, navigator) {//指定要导航到的目标Component
        let Component = route.component;
        return (
            <Component {...route.params} navigator={navigator}/>
        );
    }

    render() {
        return (
            <Navigator
                initialRoute={defaultRoute}
                renderScene={this._renderScene}
                configureScene={(route, routeStack) => Navigator.SceneConfigs.PushFromRight}//FloatFromRight,HorizontalSwipeJump
            />
        );
    }
}
AppRegistry.registerComponent('aioam', () => guide);