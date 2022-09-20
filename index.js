import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';

// Configure default AWS
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
