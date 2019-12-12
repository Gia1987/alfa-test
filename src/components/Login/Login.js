import React from 'react';
import {
    Segment,
    Input,
    Button
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const Login = ({
    notification,
    isAuthorised,
    email,
    password,
    updateEmail,
    updatePassword,
    checkAuth
}) => {
    return (
        <div style={styles.loginWrapper}>
            <div style={styles.loginInternalWrapper}>
                <Input
                    data-cy="email"
                    value={email}
                    type="email"
                    style={styles.loginInput}
                    placeholder='email'
                    onChange={updateEmail}
                />
                <Input
                    data-cy="password"
                    type="password"
                    value={password}
                    style={styles.loginInput}
                    placeholder='password'
                    onChange={updatePassword}
                />
                <Button
                    onClick={checkAuth}
                    data-cy="check-auth"
                    style={styles.btn}
                >
                    Login
                </Button>
                {!isAuthorised
        && (
            <Segment
                data-cy="notification"
                inverted
                color="red"
                style={styles.loginNotification}
            >
                {notification}
            </Segment>
        )
                }
            </div>
        </div>
    );
};

Login.propTypes = {
    checkAuth: PropTypes.func.isRequired,
    notification: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    updateEmail: PropTypes.func.isRequired,
    updatePassword: PropTypes.func.isRequired,
    isAuthorised:PropTypes.bool.isRequired
};

export default Login;
