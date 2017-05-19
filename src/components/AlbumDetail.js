import React from 'react';
import { Text, View, Image, Linking, Alert } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class AlbumDetail extends React.Component {
    constructor (album)
    {
        super(album);
        const { title, artist, thumbnail_image, image, url, content } = album;
        const {
            thumbnailStyle,
            headerContentStyle,
            thumbnailContainerStyle,
            headerTextStyle,
            imageStyle
        } = styles;

    }

    pickCourse(title)
    {
        Alert.alert(title);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <View style={thumbnailContainerStyle}>
                        <Image
                            style={thumbnailStyle}
                            source={{uri: thumbnail_image}}
                        />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Text>{content}</Text>
                </CardSection>

                <CardSection>
                    <Button onPress={ () => this.pickCourse({title})}>
                        選修這門課
                    </Button>
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
  }
};

export default AlbumDetail;
