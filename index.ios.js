// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React, { Component } from 'react';
import { AppRegistry, View, TextInput, Alert, Button } from 'react-native';
import Header from './src/components/header';
import CourseList from './src/components/CourseList';

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
                    <CourseList />
                </View>
            );
        }
        else {
            return (
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'center', flex: 1
                }}>
                    <Header headerText={'玄奘大學選課系統'}/>
                    <View style={ styles.containerStyle }>
                        <TextInput
                            style={[styles.textStyle, styles.buttonStyle]}
                            placeholder="  請輸入學號"
                            onChangeText={(text) => this.setState({text})}
                            autoFocus={ true }
                        />
                        <TextInput
                            style={[styles.textStyle, styles.buttonStyle]}
                            placeholder="  請輸入密碼"
                            secureTextEntry={ true }
                        />
                        <View style={styles.buttonStyle}>
                            <Button
                                onPress={() => this.handlePress()}
                                title="登入"
                            />
                        </View>
                    </View>

                </View>
            );
        }
    }
}

const styles = {
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
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 30
    },
    containerStyle: {
        flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        flex: 1,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom:10,
    }
};

// Render it to the device
AppRegistry.registerComponent('course', () => App);
