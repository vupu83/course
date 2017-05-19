import React from 'react';
import { Text, View, Image, Alert, Button } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class AlbumDetail extends React.Component {
    state = { choosed: false };
    title; image; artist; content;
    constructor (props)
    {
        super(props);
        this.title = props.album.title;
        this.image = props.album.thumbnail_image;
        this.artist = props.album.artist;
        this.content = props.album.content;
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
        return (
            <Card>
                <CardSection>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image
                            style={styles.thumbnailStyle}
                            source={{uri: this.image}}
                        />
                    </View>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.headerTextStyle}>{this.title}</Text>
                        <Text>{this.artist}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Text>{this.content}</Text>
                </CardSection>

                <CardSection>
                    <Button
                        style={styles.buttonStyle}
                        onPress={() => this.childAddAction(this.title)} title="加選"
                        disabled={this.state.choosed}
                        />
                    <Button
                        style={styles.buttonStyle}
                        onPress={() => this.childRemoveAction(this.title)} title="退選"
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

export default AlbumDetail;
