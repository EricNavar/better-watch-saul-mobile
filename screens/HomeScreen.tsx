import React from 'react';
import { EpisodesGroup } from '../components/EpisodesGroup';
import { Button, Colors, Image, View } from 'react-native-ui-lib';
import { Layout } from '../components/Layout';
import { NavigationProps, Screens } from '../commonTypes';
import { ScrollView } from 'react-native';

const HomeScreen = (props: NavigationProps) => {
    console.log(Colors.screenBG);

    return (
        <Layout style={{ marginHorizontal: 16 }}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                <Image
                    style={{ width: 150, height: 72.25, marginBottom: 12 }}
                    source={require('../assets/better-watch-saul-logo.png')}
                />
                <Button
                    style={{ width: 80, justifyContent: 'flex-start', marginLeft: 10 }}
                    label='About'
                    onPress={() => props.navigation.navigate(Screens.AboutScreen)}
                />
            </View>
            <ScrollView>
                <EpisodesGroup defaultSeason={1} navigation={props.navigation} />
            </ScrollView>
        </Layout>
    );
};

export { HomeScreen };

//https://d34lypc6o619vf.cloudfront.net/bcs%205-1.mp4