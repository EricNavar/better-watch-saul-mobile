import React from 'react';
import { EpisodesGroup } from '../components/EpisodesGroup';
import { Episode, NavigationProps } from '../commonTypes';
import { getEpisode } from '../util';
import { Text, Image } from 'react-native-ui-lib';
import { VideoPlayer } from '../components/VideoPlayer';
import { Layout } from '../components/Layout';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';

type EpisodeScreenProps = any & NavigationProps;

const EpisodeScreen = (props: EpisodeScreenProps) => {
    const [episode, setEpisode] = React.useState<Episode | null>(null);

    React.useEffect(() => {
        const fetchEpisodes = async () => {
            let response;
            response = await getEpisode(props.route.params.trackId);
            if (response && response.data && response.data.episode)
                setEpisode(response.data.episode);
        };
        fetchEpisodes();
    }, [props]);

    if (episode === null || !episode.season_number) {
        return <Text>Loading...</Text>
    }

    return (
        <Layout>
            <ScrollView>
                <GestureHandlerRootView>
                    <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                        <Image
                            style={{ width: 20, height: 20, margin: 16 }}
                            source={require('../assets/icons/back.png')}
                        />
                    </TouchableOpacity>
                    <VideoPlayer
                        thumbnail={`https://d34lypc6o619vf.cloudfront.net/${episode.season_number}.${episode.episode_number}.jpg`}
                        source={episode.src}
                    />
                    <Text style={{ fontSize: 20, marginBottom: 8 }}>
                        Season {episode.season_number} Episode {episode.episode_number}
                    </Text>
                    <Text style={{ marginBottom: 40 }}>
                        {episode.description}
                    </Text>
                    <Text style={{ marginBottom: 16, fontSize: 20 }}>
                        More episodes
                    </Text>
                    <EpisodesGroup defaultSeason={episode.season_number} navigation={props.navigation} />
                </GestureHandlerRootView>
            </ScrollView>
        </Layout>
    );
}

export { EpisodeScreen };
