import React from 'react';
import { Dropdown, Form, Button,  Message, Popup, Icon } from 'semantic-ui-react';
import WorkoutStore from './store';
import { inject, observer } from 'mobx-react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


@inject('workout')
@observer
export class Filter extends React.Component<{ workout: WorkoutStore }> {
    render() {
        const { exerciseList, handleDate, exerciseDate, handleForm, addWorkout, exercise, handleExerciseList, filterWorkout } = this.props.workout
        return (
            <Message success  >
                <Form >
                    <Form.Group>
                        <Form.Input type={'number'} width='3' label='Tempo' name='time' onChange={handleForm} id='time' />
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
                                name='exerciseDate'
                                required={true}
                                selected={exerciseDate}
                                onChange={handleDate}
                                adjustDateOnChange={true}
                                dateFormat='dd/MM/yyyy'
                                timeCaption='time'
                            />
                        </Form.Field>
                        <Popup  content='O filtro de busca é realizado individualmente por exercicio, tempo ou data'  position='left center' trigger={<Icon style={{ position: 'relative',  left: '10%', top: 0 }} circular={true} name='question circle' />} />
                    </Form.Group>
                </Form>
                <Button size='tiny' color={'blue'} onClick={() => filterWorkout()} >Buscar</Button>
                <Button size='tiny' color={'green'} onClick={() => addWorkout()} >Adicionar</Button>
            </Message>
        )
    }
}
export default Filter;
