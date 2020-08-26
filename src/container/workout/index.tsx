import React from 'react';
import { Container, Divider, Segment } from 'semantic-ui-react';
import MainMenu from '../../components/mainMenu';
import { ResultTable } from './resultTable';
import { Filter } from './filter';
import WorkoutStore from './store';
import { inject, observer } from 'mobx-react';
import { HeaderWorkout } from '../../components/header';
import '../../components/index.scss';


@inject('workout')
@observer
export class Workout extends React.Component<{ workout: WorkoutStore }> {
    render() {
        const { workout } = this.props
        return (
            <>
                <MainMenu />
                <Container >
                    <Segment padded >
                        <div className="background">
                            <HeaderWorkout />
                            <Filter workout={this.props.workout} />
                            <Divider />
                            <ResultTable workout={workout} />
                        </div>
                    </Segment>
                </Container>
            </>
        )
    }
}
export default Workout;
