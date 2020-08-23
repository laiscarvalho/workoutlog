import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'
import { Workout } from './container/workout';
import WorkoutStore from './container/workout/store';


ReactDOM.render(
  <React.StrictMode>
    <Workout workout={new WorkoutStore()} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
