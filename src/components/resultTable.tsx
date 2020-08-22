import React from 'react';
import {  Table } from 'semantic-ui-react'


export class ResultTable extends React.Component {
    render() {
        return (
            <Table color={'teal'} >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Exercicio</Table.HeaderCell>
                <Table.HeaderCell>Tempo</Table.HeaderCell>
                <Table.HeaderCell>Data</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
          </Table>
        )
    }
}

export default ResultTable;
