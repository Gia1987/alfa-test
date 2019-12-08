import React, { Fragment } from 'react';
import fast from 'fast.js';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-collapse';
import { Button, Image } from 'semantic-ui-react';
import { TASKS_DATA, LINK_TASK_DETAILS } from '../../constants';
import { styles } from './styles';

const TasksIndex = ({ toggleCollapse, activeIndex }) => {
    return (
        <div>
            <div style={styles.tasksContainer}>
                <div style={styles.tasksHeader}>
                    <div style={styles.title}>Tasks</div>
                    <div style={styles.line}></div>
                </div>
                <div style={styles.tasksInternalContainer}>
                    <table style={styles.table}>
                        <tr style={styles.tableHeader}>
                            <td style={styles.td}>Task Number</td>
                            <td style={styles.td}>Note</td>
                            <td style={styles.td}>Costumer</td>
                            <td style={styles.td}>Date</td>
                        </tr>
                    </table>
                    {fast.map(TASKS_DATA, (item, index) => {
                        const isOdd = index % 2;
                        return (
                            <Fragment key={`table-${index}`}>
                                <table style={styles.table}>
                                    <tr
                                        style={
                                            isOdd ? styles.trOdd : styles.trEven
                                        }
                                    >
                                        <td style={styles.td}>{item.taskId}</td>
                                        <td style={styles.td}>{item.note}</td>
                                        <td style={styles.td}>
                                            {item.costumer}
                                        </td>
                                        <td style={styles.td}>
                                            {item.date}{' '}
                                            <Button
                                                style={styles.btn}
                                                icon={
                                                    activeIndex === index
                                                        ? `angle up`
                                                        : `angle down`
                                                }
                                                onClick={toggleCollapse}
                                                index={index}
                                            ></Button>
                                        </td>
                                    </tr>
                                </table>
                                <Collapse isOpened={activeIndex === index}>
                                    <div
                                        style={
                                            isOdd
                                                ? styles.bodyOdd
                                                : styles.bodyEven
                                        }
                                    >
                                        {item.body}
                                        <Link
                                            style={styles.viewTask}
                                            to={{
                                                pathname: `${LINK_TASK_DETAILS}${item.taskId}`
                                            }}
                                        >
                                            View Task
                                        </Link>
                                    </div>
                                </Collapse>
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

TasksIndex.propTypes = {
    toggleCollapse: PropTypes.func.isRequired,
    activeIndex: PropTypes.number.isRequired
};
export default TasksIndex;
