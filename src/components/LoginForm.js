// Index.ios.js - place code in here for IOS!!!!

import React, {Component} from 'react';
import {AppRegistry, View, TextInput, Alert, Button, Text, ActivityIndicator} from 'react-native';
import {Card, CardSection} from './';

// Create a component
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {text: '', password: '', loginSuccess: false, loading: false};
    }

    checkAuth() {
        this.setState({loading: true});

        setTimeout(() => {
            if (this.state.text === '12345' && this.state.password === '12345') {
                this.props.handler(true);
            }
            else {
                Alert.alert("登入失敗! 請檢查學號密碼");
                this.setState({loading: false});
            }
        }, 1000);
    }

    renderButton() {
        if (this.state.loading) {
            return (
                <ActivityIndicator
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1,
                        margin: 20
                    }}
                    animating={true}
                    size="small"
                />
            );
        }
        else {
            return (
                <View style={styles.buttonStyle}>
                    <Button
                        onPress={() => this.checkAuth()}
                        title="登入"
                    />
                </View>
            );
        }

    }

    render() {
        return (
            <Card>
                <CardSection>
                    <View style={ styles.viewStyle }>
                        <Text style={ styles.labelStyle }>學號</Text>
                        <TextInput
                            style={[styles.inputStyle]}
                            placeholder="  請輸入學號"
                            onChangeText={(text) => this.setState({text})}
                            autoFocus={ true }
                        />
                    </View>
                </CardSection>
                <CardSection>
                    <View style={ styles.viewStyle }>
                        <Text style={ styles.labelStyle }>密碼</Text>
                        <TextInput
                            style={ styles.inputStyle }
                            placeholder="  請輸入密碼"
                            onChangeText={(password) => this.setState({password})}
                            secureTextEntry={ true }
                        />
                    </View>
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    viewStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        fontWeight: '600'
    },
    buttonStyle: {
        height: 40,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        margin: 20,
        flex: 2
    }
};

export {LoginForm};
