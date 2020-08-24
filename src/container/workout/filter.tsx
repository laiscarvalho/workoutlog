import React from 'react';
import { Dropdown, Form, Button, Message } from 'semantic-ui-react';
import WorkoutStore from './store';
import { inject, observer } from 'mobx-react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

@inject('workout')
@observer
export class Filter extends React.Component<{ workout: WorkoutStore }> {

    render() {
        const { exerciseList, handleDate, exerciseDate, handleForm, AddWorkout, exercise, handleExerciseList, filterWorkout } = this.props.workout
        return (
            <Message info>
                <Form >
                    <Form.Group>
                        <Form.Input width='3' label='Tempo' name='time' onChange={handleForm} id='time' />
                        <Form.Field>
                            <label>Exercicio</label>
                            <Dropdown placeholder='Selecione...'
                                search={true}
                                selection={true}
                                label='Exercicio:'
                                required={true}
                                onChange={handleExerciseList}
                                options={exerciseList}
                                value={exercise}
                                name='exerciseList'
                                id='exerciseList'
                            />

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
                <Button size='tiny' color={'blue'} onClick={() => filterWorkout()} >Buscar</Button>
                <Button size='tiny' color={'green'} onClick={() => AddWorkout()} >Adicionar</Button>
            </Message>
        )
    }
}
export default Filter;
