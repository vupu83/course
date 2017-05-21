// Index.ios.js - place code in here for IOS!!!!

import React, {Component} from 'react';
import {AppRegistry, View, TextInput, Alert, Button, Text} from 'react-native';
import { Card, CardSection } from './';

// Create a component
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {text: '', loginSuccess: false};
    }

    handlePress()
    {
        if (this.state.text === '12345')
            this.props.action(true);
        else
            Alert.alert("學號輸入錯誤!");
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
                                    secureTextEntry={ true }
                                />
                            </View>
                        </CardSection>
                        <CardSection>
                            <View style={styles.buttonStyle}>
                                <Button
                                    onPress={() => this.handlePress()}
                                    title="登入"
                                />
                            </View>
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

export { LoginForm };
