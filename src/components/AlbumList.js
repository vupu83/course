import React, { Component } from 'react';
import { ScrollView, Alert } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [], course: [] };

    constructor(props) {
        super(props);

        this.handler = this.handler.bind(this);
    }

  componentWillMount() {
    axios.get('https://api.myjson.com/bins/1djxv9')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} action={this.handler}/>
    );
  }

  handler = (title) => {
      let courseArray = this.state.course;
      if (!courseArray.includes(title))
          courseArray.push(title);
      else
          courseArray.splice(courseArray.indexOf(title), 1);

      let coursePrint = "";
      if (courseArray.length > 0) {
          courseArray.forEach(function (element) {
              if (element != undefined)
                  coursePrint += (element + "\r\n");
          });

          Alert.alert("您目前已有選修\r\n" + coursePrint);
      }
      else
      {
          Alert.alert("您尚未選修任何課程");
      }

      this.setState({course: courseArray});
  };

  render() {
    // console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
