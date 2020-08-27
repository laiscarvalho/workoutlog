import React from 'react';
import {  Header, Icon } from 'semantic-ui-react';
import './index.scss';

export class HeaderWorkout extends React.Component {
    render() {
        return (
            <Header  as='h2' icon={true} textAlign='center'>
                <Icon name='trophy' circular={true} />
                <Header.Content  className='App'>Workout Log</Header.Content>
            </Header>
        );
    }
}

export default HeaderWorkout;
