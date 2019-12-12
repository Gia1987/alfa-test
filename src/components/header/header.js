import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import { COMPANY_NAME, LINK_TASKS_INDEX } from '../../constants';
import logo from '../../assets/Alfa_logo.svg';
import { styles } from './styles';

export class Header extends PureComponent {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.header}>
                    <Link data-cy="logo" to={LINK_TASKS_INDEX}>
                        <img src={logo} alt={COMPANY_NAME} style={styles.logo} />
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header;
