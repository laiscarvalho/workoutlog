import React from 'react';
import { MainMenu } from '../components/mainMenu';
import { HeaderWorkout } from '../components/header';
import { Filter } from '../container/workout/filter';
import WorkoutStore from '../container/workout/store';
import ResultTable from '../container/workout/resultTable';
import { shallow } from 'enzyme';
import { Workout } from '../container/workout';



const store = new WorkoutStore()

test('renders main menu', () => {
  const wrapper = shallow(<MainMenu />);
  expect(wrapper).toMatchSnapshot();
});

test('renders header logo', () => {
  const wrapper = shallow(<HeaderWorkout />);
  expect(wrapper).toMatchSnapshot();
});

test('renders filter', () => {
  const wrapper = shallow(<Filter workout={store} />);
  expect(wrapper).toMatchSnapshot();
});

test('renders table', () => {
  const wrapper = shallow(<ResultTable workout={store} />);
  expect(wrapper).toMatchSnapshot();
  
});

test('renders Workout', () => {
  const wrapper = shallow(<Workout workout={store} />);
  expect(wrapper).toMatchSnapshot();
  
});






