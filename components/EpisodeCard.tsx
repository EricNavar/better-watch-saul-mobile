import React from 'react';
import { Episode, NavigationProps, Screens } from '../commonTypes';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { View, Image, TouchableOpacity } from 'react-native-ui-lib';

const VideoLink = styled(View)`
  overflow: hidden;
  display: inline-block;
  text-decoration: none;
  color: black;
  padding: 6px;
  border-radius: 8px;
`;

export const EpisodeCard = (props: {episode: Episode} & NavigationProps) => {
  const episode = props.episode;
  const onPress = () => {
    props.navigation.navigate(Screens.EpisodeScreen, {
      trackId: episode._id
    });
  };

  

  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={{uri:`https://d34lypc6o619vf.cloudfront.net/${episode.season_number}.${episode.episode_number}.jpg`}}
        style={{ width:341, height: 192 }}
      />
      <Text>
        Episode {episode.episode_number}: {episode.title}
      </Text>
    </TouchableOpacity>
  );
}
