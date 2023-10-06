import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

type VideoPlayerProps = {
  thumbnail: string,
  source: string,
}

export const VideoPlayer = (props: VideoPlayerProps) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({isPlaying:false});
  return (
    <View
      // style={styles.container}
    >
      <Video
        ref={video}
        // style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        // onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View
        // style={styles.buttons}
      >
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          // onPress={() =>
          //   status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          // }
        />
      </View>
    </View>
  );
}
