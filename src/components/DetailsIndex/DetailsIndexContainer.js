/* eslint radix: ["error", "as-needed"] */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TASKS_DATA } from '../../constants';
import DetailsIndex from './DetailsIndex';

export class DetailsIndexContainer extends PureComponent {
    render() {
        const { match } = this.props;
        const taskId = parseInt(match.params.id);
        const task = TASKS_DATA.find(item => item.taskId === taskId);
        return (
            <DetailsIndex
                data-cy="details-index"
                date={task.date}
                costumer={task.costumer}
                body={task.body}
                img={task.img}
                logs={task.logs}
            />
        );
    }
}

DetailsIndexContainer.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }).isRequired
};

export default DetailsIndexContainer;
