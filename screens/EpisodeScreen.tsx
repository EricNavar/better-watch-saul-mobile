import React from 'react';
import styled from 'styled-components/native';
import { EpisodesGroup } from '../components/EpisodesGroup';
import { Episode, NavigationProps } from '../commonTypes';
import { getEpisode } from '../util';
import { View, Text, Image } from 'react-native-ui-lib';
import { VideoPlayer } from '../components/VideoPlayer';

// const VideoPlayer = styled('video')`
//     width: 800px;
//     height: 450px;
//     max-width: 100%;
// `;

type EpisodeScreenProps = any & NavigationProps;

const EpisodeScreen = (props: EpisodeScreenProps) => {
    console.log(props);
    const [episode, setEpisode] = React.useState<Episode | null>(null);

    React.useEffect(() => {
        const fetchEpisodes = async () => {
            let response;
            response = await getEpisode(props.route.params.trackId);
            console.log(response.data);
            if (response && response.data && response.data.episode)
                setEpisode(response.data.episode);
        };
        fetchEpisodes();
    }, [props]);

    if (episode === null || !episode.season_number) {
        return <Text>Loading...</Text>
    }

    return (
        <View style={{ padding: 20 }}>
            <a href='/'>
                <Image
                    source={{ uri: '../assets/better-watch-saul-logo.png' }}
                />
            </a>
            <VideoPlayer
                // width="800px"
                // height="450px"
                // controls
                thumbnail={`https://d34lypc6o619vf.cloudfront.net/${episode.season_number}.${episode.episode_number}.jpg`}
                source={episode.src}
            />
            <Text color="textPrimary" style={{ fontSize: 18, marginBottom: 8 }}>
                Season {episode.season_number} Episode {episode.episode_number}
            </Text>
            <Text color="textPrimary">
                {episode.description}
            </Text>
            <EpisodesGroup defaultSeason={episode.season_number} navigation={props.navigation}/>
        </View>
    );
}

export { EpisodeScreen };
