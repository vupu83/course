// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import {Header, CourseList, LoginForm} from './src/components';

// Create a component
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {text: '', loginSuccess: false};
    }

    getLoginState = (loginState) => {
        this.setState({loginSuccess: loginState});
    };

    renderMainComponent() {
        if (this.state.loginSuccess) {
            return (<CourseList />);
        }
        else {
            return (<LoginForm handler={this.getLoginState}/>);
        }
    }

    render() {
        return (
            <View>
                <Header headerText={'玄奘大學選課系統'}/>
                { this.renderMainComponent() }
            </View>
        );
    }
}

// Render it to the device
AppRegistry.registerComponent('course', () => App);
