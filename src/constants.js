import costumer1 from './assets/costumer1.png';
import costumer2 from './assets/costumer2.png';

export const LINK_TASKS_INDEX = '/';
export const LINK_TASK_DETAILS = '/task/';
export const LINK_TASKS_DETAILS = '/details';
export const COMPANY_SHORT = 'Alfa Systems';
export const TASKS_DATA = [
    {
        taskId: 38263,
        img: costumer1,
        date: '19/09/2017 13:41',
        costumer: 'Frank Bentley',
        note: 'Lorem Ispum',
        checked: false,
        body:
            'This customers agreement is in arrears. Contact her by calling +44000000000 in order to arrange payment plan.'
    },
    {
        taskId: 38264,
        img: costumer2,
        date: '12/09/2017 09:10',
        note: 'Lorem Ispum',
        checked: false,
        costumer: 'Ken Dreiling',
        body:
            'This customers rental agreement is approaching its end. Contact them on +44111111111 in order to ascertain if they would like to extend their retnal.'
    },
    {
        taskId: 38265,
        img: costumer2,
        date: '10/09/2017 16:54',
        note: 'Lorem Ispum',
        checked: false,
        costumer: 'Madison Burrage',
        body:
            'The customers asset has been destroyed. Make arrangements to terminate the contract on madison.b@notreal.com and record the outcome.'
    }
];
