/* eslint radix: ["error", "as-needed"] */
import React, {  PureComponent } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import { Form, TextArea, Button, Image } from 'semantic-ui-react';
import { setItemLS, removeAllLSs, readLS  } from '../../utils';
import noteSvg from '../../assets/note.svg';
import phoneSvg from '../../assets/phone.svg';
import { styles } from './styles';
import Logs from './Logs';

export class LogsContainer extends PureComponent {
    constructor(props) {
        super(props);
        const {logs} = this.props;

        this.state = {
            taskLogs: logs,
            input: '',
            open: false,
            value: 'addNote'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const logs = readLS('logs');
        if(logs){
            this.setState({
                taskLogs: JSON.parse(logs)
            });
        }
    }

    componentWillUnmount(){
        removeAllLSs('logs');
    }

    getDate = () => {
        const date = new Date();
        return `${date.getDate()  }/${  date.getMonth() + 1  }/${  date.getFullYear()}  ${  date.getHours() }:${  date.getMinutes() }`;
    }

    setLocalStorage = (taskLogs) => {
        setItemLS('logs', JSON.stringify(taskLogs));
    }

    add = (e) => {
        e.preventDefault();
        const { input, taskLogs, value  } = this.state;

        const newArray = taskLogs.slice();
        if(input && input.length > 0){
            const newNote = {icon: value === 'addNote'?
                noteSvg : phoneSvg , body: input, date: this.getDate()};
            newArray.push(newNote);
            this.setState({
                taskLogs: newArray,
            });
            this.setLocalStorage(newArray);
            this.onCloseModal();
        }
    }

    handleChange = (e) => {
        this.setState({input: e.target.value});
    }

    onOpenModal = (value) => {
        this.setState({ open: true, value});
    };

    onCloseModal = () => {
        this.setState({ open: false, input: '' });
    };

    render() {
        const {taskLogs, open, input, value } = this.state;
        return (
            <div>
                <Logs data-cy="logs" onOpenModal={this.onOpenModal} addNote={this.addNote} logs={taskLogs}/>
                <Modal data-cy="modal" open={open} showCloseIcon={false} onClose={()=>{}} center>
                    <Form data-cy="form" >
                        <Form.Field data-cy="text-area" control={TextArea} style={styles.textArea} value={input} onChange={this.handleChange} placeholder='type here...'/>
                        <div style={styles.btnContainer}>
                            <div style={styles.btnWrapper}>
                                <Button data-cy="btn-cancel" style={styles.btn} onClick={this.onCloseModal}>CANCEL</Button>
                            </div>
                            <div style={styles.btnWrapper}>
                                <Button data-cy="btn-add" style={styles.btn} onClick={this.add}><Image src={value === 'addNote' ? noteSvg : phoneSvg}/> ADD</Button>
                            </div>
                        </div>
                    </Form>
                </Modal>
            </div>
        );
    }
}

LogsContainer.propTypes = {
    logs: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.shape({}),
        body: PropTypes.string,
        date: PropTypes.string,
    })).isRequired
};

export default LogsContainer;
