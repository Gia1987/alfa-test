import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import fast from 'fast.js';
import { Image, Button } from 'semantic-ui-react';
import noteSvg from '../../assets/note.svg';
import phoneSvg from '../../assets/phone.svg';
// import { TASKS_DATA, LINK_TASK_DETAILS } from '../../constants';
import { styles } from './styles';

const Logs = ({logs, onOpenModal}) => {
    return (
        <div style={styles.tasksContainer}>
            <div style={styles.tasksHeader}>
                <div style={styles.title}>Log</div>
                <div style={styles.line}></div>
            </div>
            {fast.map(logs, (log, index )=>{
                const isOdd = index % 2 === 0;
                return <Fragment key={`log-${index}`}>
                    <div style={isOdd ? styles.logSectionOdd : styles.logSectionEven}>
                        <div style={styles.iconAndBody}>
                            <div style={styles.icon}><Image src={log.icon}/></div>
                            <div style={styles.body}>{log.body}</div>
                        </div>
                        <div style={styles.logDate}>{log.date}</div>
                    </div>
                </Fragment>;
            })}
            <div>
                <div style={styles.btnContainer}>
                    <div style={styles.btnWrapper}>
                        <Button
                            data-cy='add-call'
                            style={styles.btn}
                            onClick={() => onOpenModal('addCall')}
                        ><Image src={phoneSvg}/>
                            ADD CALL
                        </Button>
                    </div>
                    <div style={styles.btnWrapper}>
                        <Button
                            data-cy='add-note'
                            style={styles.btn}
                            onClick={() => onOpenModal('addNote')}
                        ><Image src={noteSvg}/>ADD NOTE</Button>
                    </div>
                </div>
            </div>
        </div>

    );
};

Logs.propTypes = {
    logs: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.shape({}),
        body: PropTypes.string,
        date: PropTypes.string,
    })).isRequired,
    onOpenModal:PropTypes.func.isRequired,
};
export default Logs;
