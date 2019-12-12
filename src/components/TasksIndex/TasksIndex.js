import React, { Fragment } from 'react';
import fast from 'fast.js';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-collapse';
import { Button} from 'semantic-ui-react';
import { TASKS_DATA, LINK_TASK_ID } from '../../constants';
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
                    <div style={ styles.taskWrapper}>
                        <div style={styles.task}>
                            <div style={styles.taskId}>Task Number</div>
                            <div style={styles.noteTitle}>Note</div>
                        </div>
                        <div style={styles.task}>
                            <div>Costumer</div>
                            <div style={styles.dateTitle}>Date
                            </div>
                        </div>
                    </div>
                    {fast.map(TASKS_DATA, (item, index) => {
                        const isOdd = index % 2 === 0;
                        return (
                            <Fragment key={`task-${index}`}>
                                <div style={isOdd ? styles.containerOdd : styles.containerEven}>
                                    <div style={ styles.taskWrapper}>
                                        <div style={styles.task}>
                                            <div>{item.taskId}</div>
                                            <div style={styles.note}>{item.note}</div>
                                        </div>
                                        <div style={styles.task}>
                                            <div>{item.costumer}</div>
                                            <div style={styles.date}>{item.date}{' '}
                                                <Button
                                                    data-cy={`btn-${index}`}
                                                    style={styles.btn}
                                                    icon={ activeIndex === index ? `angle up`: `angle down`}
                                                    onClick={toggleCollapse}
                                                    index={index}
                                                ></Button></div>
                                        </div>
                                    </div>
                                </div>
                                <Collapse data-cy={`collapse-${index}`} isOpened={activeIndex === index}>
                                    <div style={isOdd? styles.bodyOdd: styles.bodyEven}>
                                        <div style={styles.body}>{item.body}</div>
                                        <Link data-cy={`link-${index}`} style={styles.viewTask} to={`${LINK_TASK_ID}${item.taskId}`}>
                                          VIEW TASK
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
