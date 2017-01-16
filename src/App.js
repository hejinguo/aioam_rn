/**
 * Created by hejg on 2017/1/11.
 */

import React, {Component} from 'react';
import {StyleSheet, Navigator, View, StatusBar} from 'react-native';
import Guide from './Guide';

const defaultRoute = {
    component: Guide
};

class guide extends Component {
    _renderScene(route, navigator) {//指定要导航到的目标Component
        let TargetComponent = route.component;
        return (
            <TargetComponent {...route.params} navigator={navigator}/>
        );
    }

    render() {
        return (
            <View style={styles.root}>
                <StatusBar backgroundColor="#444353"/>
                <Navigator
                    initialRoute={defaultRoute}
                    renderScene={this._renderScene}
                    configureScene={(route, routeStack) => Navigator.SceneConfigs.PushFromRight}//FloatFromRight,HorizontalSwipeJump
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
});