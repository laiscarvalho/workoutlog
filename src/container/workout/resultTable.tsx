import React from 'react';
import { Table, Button, Icon, Label } from 'semantic-ui-react'
import WorkoutStore from './store';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import '../../components/index.scss';

@inject('workout')
@observer
export class ResultTable extends React.Component<{ workout: WorkoutStore }> {
  
  render() {
    const { exerciseListTable, removeWorkout } = this.props.workout
    return (
      <Table color={'green'}  className="table">
        <Table.Header textAlign={'center'}>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Exercicio</Table.HeaderCell>
            <Table.HeaderCell>Tempo</Table.HeaderCell>
            <Table.HeaderCell>Data</Table.HeaderCell>
            <Table.HeaderCell>Remover</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body textAlign={'center'}>
          {exerciseListTable.map((item, index) => (
            <Table.Row key={index} >
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.exercise}</Table.Cell>
              <Table.Cell>{item.time}</Table.Cell>
              <Table.Cell>{moment(item.exerciseDate).format('DD/MM/YYYY')}</Table.Cell>
              <Table.Cell textAlign='center'>
                <Button basic color='red' onClick={() => removeWorkout(item.id)}><Icon fitted={true} name='trash' />
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        
        </Table.Body>
        <Table.Footer fullWidth >
        <Label style={{ position: 'relative', right: 0, left: '403%', top: 0 }} as='a' color='teal' ribbon='right'>tabela vazia</Label>       
        </Table.Footer>
      </Table>
    )
  }
}

export default ResultTable;
