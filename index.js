/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// + 加入手势支持
import 'react-native-gesture-handler';
AppRegistry.registerComponent(appName, () => App);
