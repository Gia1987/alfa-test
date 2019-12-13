import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
// import { TASKS_DATA, LINK_TASK_DETAILS } from '../../constants';
import Logs from '../Logs';
import { styles } from './styles';

const DetailsIndex = ({ body, date, costumer, img, logs }) => {
    return (
        <div style={styles.container}>
            <div style={styles.tasksContainer}>
                <div style={styles.tasksHeader}>
                    <div style={styles.title}>Tasks Information</div>
                    <div style={styles.line}></div>
                </div>
                <div style={styles.tasksInternalContainer}>
                    <div style={styles.profileSection}>
                        <div style={styles.imageAndName}>
                            <Image src={img} size="tiny" circular />
                            <div style={styles.costumer}>{costumer}</div>
                        </div>
                        <div>{date.split(' ')[0]}</div>
                    </div>
                    <div style={styles.body}>{body}</div>
                </div>
            </div>
            <Logs data-cy="logs" logs={logs}/>
        </div>
    );
};

DetailsIndex.propTypes = {
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    costumer: PropTypes.string.isRequired,
    img: PropTypes.shape({}).isRequired,
    logs: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};
export default DetailsIndex;
