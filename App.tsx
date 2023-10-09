import 'react-native-gesture-handler';
import React from 'react';
import './setup';
import {
    EpisodeScreen,
    HomeScreen,
    AboutScreen,
} from './screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Screens } from './commonTypes';
import { Colors, Assets } from 'react-native-ui-lib';

const Stack = createNativeStackNavigator();

export default function App() {
    Colors.loadSchemes({
        light: {
            screenBG: Colors.white,
            textColor: Colors.black,
            moonOrSun: Colors.grey80,
            mountainForeground: Colors.violet10,
            mountainBackground: Colors.violet20,
            $backgroundSuccess: Colors.green40,
            $backgroundSuccessLight: Colors.green20,
        },
        dark: {
            // screenBG: Colors.grey10,
            // textColor: Colors.white,
            // moonOrSun: Colors.grey80,
            // mountainForeground: Colors.violet10,
            // mountainBackground: Colors.violet20,
            // $backgroundSuccess: Colors.green40,
            // $backgroundSuccessLight: Colors.green20,
            screenBG: Colors.white,
            textColor: Colors.black,
            moonOrSun: Colors.grey80,
            mountainForeground: Colors.violet10,
            mountainBackground: Colors.violet20,
            $backgroundSuccess: Colors.green40,
            $backgroundSuccessLight: Colors.green20,
        },
    });

    Assets.loadAssetsGroup('icons', {
        // drink: require('./assets/icons/ios-wine-bar-50.png'),
        // back: require('./assets/icons/ios-back-50.png'),
    });

    return (
        <React.StrictMode>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        contentStyle:{
                            backgroundColor:'#FFFFFF'
                        }
                    }}
                >
                    <Stack.Screen name={Screens.HomeScreen} component={HomeScreen} />
                    <Stack.Screen name={Screens.EpisodeScreen} component={EpisodeScreen} />
                    <Stack.Screen name={Screens.AboutScreen} component={AboutScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </React.StrictMode>
    );
}
