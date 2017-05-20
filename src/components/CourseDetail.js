import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class CourseDetail extends React.Component {
    state = { choosed: false };
    constructor (props)
    {
        super(props);
    }

    childAddAction = (title) => {
        this.setState({choosed: true});
        this.props.action(title);
    };
    childRemoveAction = (title) => {
        this.setState({choosed: false});
        this.props.action(title);
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
                    <Button
                        style={styles.buttonStyle}
                        onPress={() => this.childAddAction(title)} title="加選"
                        disabled={this.state.choosed}
                        />
                    <Button
                        style={styles.buttonStyle}
                        onPress={() => this.childRemoveAction(title)} title="退選"
                        disabled={!this.state.choosed}
                    />
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
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export default CourseDetail;
