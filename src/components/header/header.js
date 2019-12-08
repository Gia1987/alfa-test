import React, { PureComponent } from 'react';
import { COMPANY_SHORT } from '../../constants';
import logo from '../../assets/Alfa_logo.svg';
import { styles } from './styles';

export class Header extends PureComponent {
    render() {
        return (
            <div>
                <div style={styles.header}>
                    <img src={logo} alt={COMPANY_SHORT} style={styles.logo} />
                </div>
            </div>
        );
    }
}

export default Header;
