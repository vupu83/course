// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React, {Component} from 'react';
import {AppRegistry, View, TextInput, Alert, Button, Text} from 'react-native';
import { Header, Card, CardSection, CourseList, LoginForm } from './src/components';

// Create a component
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {text: '', loginSuccess: false};
    }

    handlePress = (loginState) => {
        this.setState({loginSuccess: loginState});
    };

    render() {
        if (this.state.loginSuccess) {
            return (
                <View style={{flex: 1}}>
                    <Header headerText={'玄奘大學選課系統'}/>
                    <CourseList />
                </View>
            );
        }
        else {
            return (
                <View>
                    <Header headerText={'玄奘大學選課系統'}/>
                    <LoginForm action={this.handlePress}/>
                </View>
            );
        }
    }
}

// Render it to the device
AppRegistry.registerComponent('course', () => App);
