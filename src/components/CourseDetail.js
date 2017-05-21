import React from 'react';
import { Text, View, Image, Button, Alert } from 'react-native';
import { Card, CardSection } from './';

class CourseDetail extends React.Component {
    state = { choosed: false };
    constructor (props)
    {
        super(props);
    }

    addCourse = (title) => {
        Alert.alert('確認', "您確定要加選" + title + "?",
            [ {text: '是', onPress: () => {
                this.setState({choosed: true});
                this.props.handler(title);
            }},
                {text: '否', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}],
            { cancelable: false }
        );
    };

    removeCourse = (title) => {
        Alert.alert('確認', "您確定要退選" + title + "?",
            [ {text: '是', onPress: () => {
                this.setState({choosed: false});
                this.props.handler(title);
            }},
                {text: '否', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}],
            { cancelable: false }
        );
    };

    render() {
        const { title, artist, thumbnail_image, content } = this.props.album;
        return (
            <Card>
                <CardSection>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image
                            style={styles.thumbnailStyle}
                            source={{uri: thumbnail_image}}
                        />
                    </View>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.headerTextStyle}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Text>{content}</Text>
                </CardSection>

                <CardSection>
                    <View style={styles.buttonStyle}>
                    <Button
                        onPress={() => this.addCourse(title)} title="加選"
                        disabled={this.state.choosed}
                        />
                    </View>
                    <View style={styles.buttonStyle}>
                    <Button
                        style={styles.buttonStyle}
                        onPress={() => this.removeCourse(title)} title="退選"
                        disabled={!this.state.choosed}
                    />
                    </View>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export { CourseDetail };
