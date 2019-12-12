import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { LINK_TASKS_INDEX, LINK_TASK_ID, LINK_LOGIN } from './constants';
import Login from './components/Login';
import Header from './components/Header';
import Tasks from './components/TasksIndex';
import Details from './components/DetailsIndex';

ReactDOM.render(
    <HashRouter>
        <Fragment>
            <Header />
            <Switch>
                <Route exact path={LINK_LOGIN} component={Login} />
                <Route exact path={LINK_TASKS_INDEX} component={Tasks} />
                <Route path={`${LINK_TASK_ID}:id`} component={Details} />
            </Switch>
        </Fragment>
    </HashRouter>,
    document.getElementById('root')
);
