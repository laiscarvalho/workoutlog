import React from 'react';
import { Container, Header, Icon, Divider } from 'semantic-ui-react';
import MainMenu from '../../components/mainMenu';
import { ResultTable } from '../../components/resultTable';
import { Filter } from './filter';


export class Workout extends React.Component {
    render() {
        return (
            <>
                <MainMenu />
                <Container>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='trophy' circular />
                        <Header.Content>Workout Log</Header.Content>
                    </Header>
                    <Filter />
                    <Divider />
                    <ResultTable />
                </Container>
            </>
        )
    }
}
export default Workout;
