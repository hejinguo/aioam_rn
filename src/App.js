/**
 * Created by hejg on 2017/1/11.
 */

import React, {Component} from 'react';
import {StyleSheet, Navigator, View, StatusBar, BackAndroid, Platform} from 'react-native';
import Guide from './Guide';

const defaultRoute = {
    component: Guide
};

export default class APP extends Component {
    componentWillMount() {
        if (Platform.OS === 'android') {//__ANDROID__
            BackAndroid.addEventListener('hardwareBackPress', this._onBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {//__ANDROID__
            BackAndroid.removeEventListener('hardwareBackPress', this._onBackAndroid);
        }
    }

    _onBackAndroid = () => {
        const nav = this.navigator;
        const routers = nav.getCurrentRoutes();
        if (routers.length > 1) {
            nav.pop();
            return true;
        }
        return false;
    };

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
                    ref={(ref) => this.navigator = ref}
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