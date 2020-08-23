import React from 'react';
import {  Dropdown, Form, Button } from 'semantic-ui-react';
import WorkoutStore from './store';
import { inject, observer } from 'mobx-react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



@inject('workout')
@observer
export class Filter extends React.Component<{ workout: WorkoutStore }> {

    render() {
        const { exerciseList, handleDate, exerciseDate } = this.props.workout
        return (
           <>
                <Form >
                    <Form.Group>
                        <Form.Input width='3' label='Tempo' />
                        <Form.Field>
                            <label> Exercicio</label>
                            <Dropdown placeholder='State' search selection options={exerciseList} width={1} />
                        </Form.Field>
                        <Form.Field>
                            <label>Data:</label>
                            <ReactDatePicker
                                id='exerciseDate'
                                required={true}
                                selected={exerciseDate}
                                onChange={handleDate}
                                adjustDateOnChange={true}
                                dateFormat='dd/MM/yyyy'
                                timeCaption='time'
                            />
                        </Form.Field>
                    </Form.Group>
                </Form>
                <Button size='tiny' color={'blue'}>Buscar</Button>
                <Button size='tiny' color={'green'}>Adicionar</Button>
       </>
        )
    }
}
export default Filter;
