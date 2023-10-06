import React from 'react';
import { EpisodesGroup } from '../components/EpisodesGroup';
import { Image } from 'react-native-ui-lib';
import { Layout } from '../components/Layout';
import { NavigationProps } from '../commonTypes';

const HomeScreen = (props: NavigationProps) => {
    return (
        <Layout>
            <Image style={{width: 150, height: 72.25}} source={require('../assets/better-watch-saul-logo.png')} />
            <EpisodesGroup defaultSeason={1} navigation={props.navigation}/>
        </Layout>
    );
}

export {HomeScreen};

//https://d34lypc6o619vf.cloudfront.net/bcs%205-1.mp4