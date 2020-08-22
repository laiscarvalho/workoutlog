import React from 'react';
import { Container, Header, Icon, Message, Dropdown, Form, Button, Divider } from 'semantic-ui-react';
import MainMenu from '../../components/mainMenu';
import DatePicker from 'react-datepicker';
import { TableList } from '../../components/tableList';


export class Workout extends React.Component {
    state = {
        startDate: new Date()
    };

    handleChange = (date: any) => {
        this.setState({
            startDate: date
        });
    };

    render() {
        const serviceTypeOptions = [
            { key: 0, text: 'Todos', value: undefined },
            { key: 1, text: 'Entrega', value: '1' },
            { key: 2, text: 'Coleta de Venda', value: '3' }
        ];
        return (
            <>
                <MainMenu />
                <Container>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='trophy' circular />
                        <Header.Content>Workout Log</Header.Content>
                    </Header>
                    <Message info>
                        <Form >
                            <Form.Group>
                                <Form.Input width='3' label='Tempo' />
                                <Form.Field>
                                    <label> Exercicio</label>
                                    <Dropdown placeholder='State' search selection options={serviceTypeOptions} width={1} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Data:</label>
                                    <DatePicker
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
                                    />
                                </Form.Field>
                            </Form.Group>
                        </Form>
                        <Button size='tiny' color={'blue'}>Buscar</Button>
                        <Button size='tiny' color={'green'}>Adicionar</Button>
                    </Message>
                    <Divider />
                    <TableList />
                </Container>
            </>
        )
    }
}
export default Workout;
