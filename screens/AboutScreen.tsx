import React from 'react';
import { Text, Image } from 'react-native-ui-lib';
import { Layout } from '../components/Layout';
import { Button, TouchableOpacity } from 'react-native';
import { NavigationProps } from '../commonTypes';
import { Linking} from 'react-native'

const AboutScreen = (props: NavigationProps) => {
    return (
        <Layout style={{margin: 20}}>
            <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                <Image
                    style={{ width: 20, height: 20, margin: 16 }}
                    source={require('../assets/icons/back.png')}
                />
            </TouchableOpacity>
            <Text text60>Is this illegal?</Text>
            <Text>Yes</Text>
            <Text text60>Where is the source code for this amazing project?</Text>
            <Button title='Right here!' onPress={()=>{Linking.openURL('https://github.com/EricNavar/better-watch-saul-mobile')}}/>
        </Layout>
    );
}

export {AboutScreen};
