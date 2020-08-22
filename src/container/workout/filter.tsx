import React from 'react';
import { Message, Dropdown, Form, Button } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';

export class Filter extends React.Component {
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
        )
    }
}
export default Filter;
