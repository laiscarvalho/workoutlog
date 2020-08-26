import React from 'react';
import {  Header, Icon } from 'semantic-ui-react'
import './index.scss';

export class HeaderWorkout extends React.Component {
    render() {
        return (
            <Header  as='h2' icon textAlign='center'>
                <Icon name='trophy' circular />
                <Header.Content  className="App">Workout Log</Header.Content>
            </Header>
        )
    }
}

export default HeaderWorkout;
