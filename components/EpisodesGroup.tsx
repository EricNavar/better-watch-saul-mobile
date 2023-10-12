import React from 'react';
import { View, Text, Picker, Icon, Colors } from 'react-native-ui-lib';
import { EpisodeCard } from './EpisodeCard';
import { Episode, NavigationProps } from '../commonTypes';
import { getEpisodesFromSeason } from '../util';

const dropdown = require('../assets/icons/chevron-down.png');

const EpisodesGroup = (props: { defaultSeason: number } & NavigationProps) => {
  const [season, setSeason] = React.useState<number>(props.defaultSeason);
  const [episodes, setEpisodes] = React.useState<Episode[]>([]);

  React.useEffect(() => {
    const fetchEpisodes = async () => {
      let response;
      response = await getEpisodesFromSeason(season)
        .catch(e => {
          console.log(e);
        });
      if (response && response.episodes) {
        setEpisodes(response.episodes);
      }
    };
    fetchEpisodes();
  }, [season]);

  const handleChange = (item: any) => {
    if (item) {
      setSeason(Number(item));
    }
  };

  const numberOfSeasons = 6;

  if (season) {
    return (
      <View>
        <Picker
          placeholder="Select a season"
          value={season}
          onChange={handleChange}
          selectionLimit={3}
          useSafeArea
          trailingAccessory={<Icon style={{ height: 16, width: 16 }} source={dropdown} tintColor={Colors.textColor} />}
          fieldType={Picker.fieldTypes.filter}
          useWheelPicker
        >
          {Array.from(Array(numberOfSeasons).keys()).map((season) =>
            <Picker.Item key={season} value={season + 1} label={`Season ${season + 1}`} />
          )}
        </Picker>
        <View >
          {episodes.map((episode, index) =>
            <EpisodeCard episode={episode} key={index} navigation={props.navigation} />
          )}
          <View style={{ height: 60 }} />
        </View>
      </View>
    );
  }
  return <Text>Loading...</Text>;
};

export { EpisodesGroup };
