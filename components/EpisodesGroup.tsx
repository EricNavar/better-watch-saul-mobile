import React from 'react';
import { View, Text, Picker, PickerFieldTypes, Icon } from 'react-native-ui-lib';
import _ from 'lodash';
import { EpisodeCard } from './EpisodeCard';
import { Episode, NavigationProps } from '../commonTypes';
import { getEpisodesFromSeason } from '../util';
import { Layout } from './Layout';
import { ScrollView } from 'react-native';

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
      <Layout >
        <Picker
          placeholder="Select a season"
          value={season}
          onChange={handleChange}
          selectionLimit={3}
          useSafeArea
          trailingAccessory={<Icon source={dropdown}/>}
        >
          {Array.from(Array(numberOfSeasons).keys()).map((season) =>
            <Picker.Item key={season} value={season+1} label={`Season ${season+1}`}/>
          )}
        </Picker>
        <ScrollView>
          <View >
            {episodes.map((episode, index) =>
              <EpisodeCard episode={episode} key={index} navigation={props.navigation}/>
            )}
          </View>
        </ScrollView>
      </Layout>
    );
  }
  return <Text /*blue20*/>Loading...</Text>;
};

export { EpisodesGroup };
