import React from 'react';
import { Episode, NavigationProps, Screens } from '../commonTypes';
import { Text, Image, TouchableOpacity } from 'react-native-ui-lib';

export const EpisodeCard = (props: {episode: Episode} & NavigationProps) => {
  const episode = props.episode;
  const onPress = () => {
    props.navigation.navigate(Screens.EpisodeScreen, {
      trackId: episode._id
    });
  };

  return (
    <TouchableOpacity onPress={onPress} style={{marginTop:16}}>
      <Image
        source={{uri:`https://d34lypc6o619vf.cloudfront.net/${episode.season_number}.${episode.episode_number}.jpg`}}
        style={{ width:341, height: 192, borderRadius: 4 }}
      />
      <Text style={{fontSize:16, marginTop: 4}}>
        Episode {episode.episode_number}: {episode.title}
      </Text>
    </TouchableOpacity>
  );
}
