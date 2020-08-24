import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'
import { Workout } from './container/workout';
import WorkoutStore from './container/workout/store';
import * as Sentry from "@sentry/react";

Sentry.init({ dsn: "https://0eb756fab1464bfaade4215128da5d7d@o438532.ingest.sentry.io/5403430" });

ReactDOM.render(
  <Sentry.ErrorBoundary fallback={"An error has occured"}>
    <Workout workout={new WorkoutStore()} />
  </Sentry.ErrorBoundary>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
