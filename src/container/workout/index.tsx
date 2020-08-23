import React from 'react';
import { Container, Header, Icon, Divider } from 'semantic-ui-react';
import MainMenu from '../../components/mainMenu';
import { ResultTable } from '../../components/resultTable';
import { Filter } from './filter';
import WorkoutStore from './store';
import { inject, observer } from 'mobx-react';

@inject('workout')
@observer
export class Workout extends React.Component <{ workout: WorkoutStore }> {
    render() {
        return (
            <>
                <MainMenu />
                <Container>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='trophy' circular />
                        <Header.Content>Workout Log</Header.Content>
                    </Header>
                    <Filter workout={this.props.workout} />
                    <Divider />
                    <ResultTable />
                </Container>
            </>
        )
    }
}
export default Workout;
