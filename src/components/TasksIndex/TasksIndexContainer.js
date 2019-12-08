import React, { PureComponent } from 'react';
import TasksIndex from './TasksIndex';

export class TasksIndexContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { activeIndex: -1 };
    }

    toggleCollapse = (e, tasksProps) => {
        const { index } = tasksProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({ activeIndex: newIndex });
    };

    render() {
        const { activeIndex } = this.state;
        const { toggleCollapse } = this;
        return (
            <TasksIndex
                toggleCollapse={toggleCollapse}
                activeIndex={activeIndex}
            />
        );
    }
}

export default TasksIndexContainer;
