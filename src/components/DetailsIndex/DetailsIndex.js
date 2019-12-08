import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
// import { TASKS_DATA, LINK_TASK_DETAILS } from '../../constants';
import { styles } from './styles';

const DetailsIndex = ({ body, date, costumer, img }) => {
    return (
        <div>
            <div style={styles.tasksContainer}>
                <div style={styles.tasksHeader}>
                    <div style={styles.title}>Tasks Information</div>
                    <div style={styles.line}></div>
                </div>

                <div style={styles.tasksInternalContainer}>
                    <div style={styles.profileSection}>
                        <div style={styles.img}>
                            <Image src={img} size="tiny" circular />
                        </div>
                        <div style={styles.costumer}>{costumer}</div>
                        <div style={styles.date}>{date.split(' ')[0]}</div>
                    </div>
                    <div style={styles.body}>{body}</div>
                </div>
            </div>
        </div>
    );
};

DetailsIndex.propTypes = {
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    costumer: PropTypes.string.isRequired
};
export default DetailsIndex;
