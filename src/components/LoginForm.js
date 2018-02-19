import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem, Button, InputField, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends React.Component {

    onEmailChange(text) {
        console.log('onEmailChange ', this.props.emailChanged(text));
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        console.log('onPasswordChange ', this.props.passwordChanged(text));
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        console.log('onButtonPress', this.props.loginUser({ email, password }));
        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyles}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <InputField
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardItem>

                <CardItem>
                    <InputField
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardItem>
                    {this.renderError()}
                <CardItem />

                <CardItem>
                    {this.renderButton()}
                </CardItem>

            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser,
})(LoginForm);

const styles = {
    errorTextStyles: {
        fontSize: 22,
        color: '#FF0000',
        alignSelf: 'center'
    }
};
