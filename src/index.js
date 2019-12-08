import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { LINK_TASKS_INDEX, LINK_TASK_DETAILS } from './constants';
import Header from './components/header';
import Tasks from './components/TasksIndex';
import Details from './components/DetailsIndex';

ReactDOM.render(
    <HashRouter>
        <Fragment>
            <Header />
            <Switch>
                <Route exact path={LINK_TASKS_INDEX} component={Tasks} />
                <Route path={`${LINK_TASK_DETAILS}:id`} component={Details} />
            </Switch>
        </Fragment>
    </HashRouter>,
    document.getElementById('root')
);
