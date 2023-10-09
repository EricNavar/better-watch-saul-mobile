import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const StyledView = styled(SafeAreaView)`
    height: 100%;
    background-color: white;
`;

export const Layout = (props: {children:JSX.Element | JSX.Element[], style?: any}) => {
    return (
        <StyledView style={props.style}>
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
            />
            {props.children}
        </StyledView>
    )
};
