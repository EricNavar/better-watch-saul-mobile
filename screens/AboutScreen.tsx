import React from 'react';
import { View, Text } from 'react-native-ui-lib';

const AboutScreen = () => {
    return (
        <View style={{padding: 20}}>
            <Text><b>Is this illegal?</b></Text>
            <Text>Yes</Text>
            <Text><b>Where is the source code for this amazing project?</b></Text>
            {/* <Link target='_blank' variant='body1' href='https://github.com/EricNavar/better-watch-saul'>https://github.com/EricNavar/better-watch-saul</Link> */}
        </View>
    );
}

export {AboutScreen};
