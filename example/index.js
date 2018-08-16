/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
var ReactNative = require('react-native')
import {NativeModules} from 'react-native';
module.exports = NativeModules.ToastAndroidTutorial;
//export default NativeModules.ToastAndroidTutorial;


AppRegistry.registerComponent(appName, () => App);

