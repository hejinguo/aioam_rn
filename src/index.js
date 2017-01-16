/**
 * Created by hejg on 2017/1/16.
 */

import {AppRegistry} from 'react-native';
import APP from './App';

if (!__DEV__) {
    global.console = {
        info: () => {},
        log: () => {},
        warn: () => {},
        error: () => {},
    };
}

AppRegistry.registerComponent('aioam', () => APP);