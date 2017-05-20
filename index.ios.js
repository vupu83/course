// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput, Alert, Button } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
import CardSection from './src/components/CardSection';
import Card from './src/components/Card';

// Create a component
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '', loginSuccess: false };
    }

    handlePress() {
        if (this.state.text === '12345')
            this.setState({ loginSuccess: true });
        else
            Alert.alert("學號輸入錯誤!");
    }

    render() {
        if (this.state.loginSuccess) {
            return (
                <View style={{ flex: 1 }}>
                    <Header headerText={'玄奘大學選課系統'} />
                    <AlbumList />
                </View>
            );
        }
        else {
            return (
                <View style={{ flexDirection: 'column',
                    justifyContent: 'center'}}>
                    <Header headerText={'玄奘大學選課系統'} />
                    <TextInput
                        style={styles.buttonStyle}
                        placeholder="  請輸入學號"
                        onChangeText={(text) => this.setState({ text })}
                        autoFocus={ true }
                    />
                    <Button
                        onPress={() => this.handlePress()}
                        title = "登入"
                        />
                </View>
            );
        }
    }
}

const styles = {
    buttonStyle: {
        height: 40,
        marginTop: 20,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        fontWeight: '600'
    }
};

// Render it to the device
AppRegistry.registerComponent('course', () => App);
