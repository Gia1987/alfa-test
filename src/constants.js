import costumer1 from './assets/costumer1.png';
import costumer2 from './assets/costumer2.png';
import noteSvg from './assets/note.svg';
import phoneSvg from './assets/phone.svg';

export const LINK_TASKS_INDEX = '/';
export const LINK_TASK_ID = '/task/';
export const LINK_TASKS_DETAILS = '/details';
export const COMPANY_NAME = 'Alfa Systems';

export const TASKS_DATA = [
    {
        taskId: 38263,
        img: costumer1,
        date: '19/09/2017 13:41',
        costumer: 'Frank Bentley',
        note: 'Lorem Ispum',
        checked: false,
        body:
            'This customers agreement is in arrears. Contact her by calling +44000000000 in order to arrange payment plan.',
        logs:[
            {icon: noteSvg , body: 'Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. ', date: '19/09/2017 13:41'},
            {icon: noteSvg , body: 'Is so moments on chamber pressed to. Doubtful yet way properly answered humanity its desirous. Minuter believe service arrived civilly add all. Acuteness allowance an at eagerness favourite in extensive exquisite ye.  ', date: '19/09/2017 13:41'},
            {icon: phoneSvg , body: 'Boy possible blessing sensible set but margaret interest. Off tears are day blind smile alone had. ', date: '19/09/2017 13:41'}
        ]
    },
    {
        taskId: 38264,
        img: costumer2,
        date: '12/09/2017 09:10',
        note: 'Lorem Ispum',
        checked: false,
        costumer: 'Ken Dreiling',
        body:
            'This customers rental agreement is approaching its end. Contact them on +44111111111 in order to ascertain if they would like to extend their retnal.',
        logs:[
            {icon: phoneSvg , body: 'Spot of come to ever hand as lady meet on. Delicate contempt received two yet advanced. Gentleman as belonging he commanded believing dejection in by. ', date: '12/09/2017 09:10'},
            {icon: noteSvg , body: 'Is so moments on chamber pressed to. Doubtful yet way properly answered humanity its desirous. Minuter believe service arrived civilly add all. Acuteness allowance an at eagerness favourite in extensive exquisite ye.  ', date: '12/09/2017 09:10'},
            {icon: phoneSvg , body: 'Forfeited you engrossed but gay sometimes explained. Another as studied it to evident. Merry sense given he be arise. Conduct at an replied removal an amongst. Remaining determine few her two cordially admitting old. Sometimes strangers his ourselves her depending you boy. ', date: '12/09/2017 09:10'}
        ]
    },
    {
        taskId: 38265,
        img: costumer2,
        date: '10/09/2017 16:54',
        note: 'Lorem Ispum',
        checked: false,
        costumer: 'Madison Burrage',
        body:
            'The customers asset has been destroyed. Make arrangements to terminate the contract on madison.b@notreal.com and record the outcome.',
        logs:[
            {icon: phoneSvg , body: 'Spot of come to ever hand as lady meet on. Delicate contempt received two yet advanced. Gentleman as belonging he commanded believing dejection in by. ', date: '10/09/2017 16:54'},
            {icon: noteSvg , body: 'Is so moments on chamber pressed to. Doubtful yet way properly answered humanity its desirous. Minuter believe service arrived civilly add all. Acuteness allowance an at eagerness favourite in extensive exquisite ye.  ', date: '10/09/2017 16:54'},
            {icon: phoneSvg , body: 'Forfeited you engrossed but gay sometimes explained. Another as studied it to evident. Merry sense given he be arise. Conduct at an replied removal an amongst. Remaining determine few her two cordially admitting old. Sometimes strangers his ourselves her depending you boy. ', date: '10/09/2017 16:54'},
            {icon: phoneSvg , body: 'Forfeited you engrossed but gay sometimes explained. Another as studied it to evident. Merry sense given he be arise. Conduct at an replied removal an amongst. Remaining determine few her two cordially admitting old. Sometimes strangers his ourselves her depending you boy. ', date: '12/09/2017 09:10'},{icon: phoneSvg , body: 'Forfeited you engrossed but gay sometimes explained. Another as studied it to evident. Merry sense given he be arise. Conduct at an replied removal an amongst. Remaining determine few her two cordially admitting old. Sometimes strangers his ourselves her depending you boy. ', date: '10/09/2017 16:54'}
        ]
    }
];
