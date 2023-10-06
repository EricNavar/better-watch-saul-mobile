export type Episode = {
    _id: string;
    season_number: number;
    episode_number: number;
    description: string;
    title: string;
    src: string;
}

export enum Screens {
    EpisodeScreen = 'EpisodeScreen',
    HomeScreen = 'HomeScreen',
    AboutScreen = 'AboutScreen',
}

export type NavigationProps = {
    navigation: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        navigate: any;
        goBack: any;
    };
};
