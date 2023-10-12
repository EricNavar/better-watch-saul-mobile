import 'react-native-gesture-handler';
import React from 'react';
import Config from 'react-native-ui-lib/config';
// require('react-native-ui-lib/config').setConfig({ appScheme: 'dark' });
import {
    EpisodeScreen,
    HomeScreen,
    AboutScreen,
} from './screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Screens } from './commonTypes';
import { Colors } from 'react-native-ui-lib';

const Stack = createNativeStackNavigator();

export default function App() {
    Config.setConfig({ appScheme: 'dark' });

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
            screenBG: Colors.black,
            textColor: Colors.white,
            moonOrSun: Colors.grey80,
            mountainForeground: Colors.violet10,
            mountainBackground: Colors.violet20,
            $backgroundSuccess: Colors.green40,
            $backgroundSuccessLight: Colors.green20,
        },
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
