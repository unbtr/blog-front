import React, { Component } from 'react';
import axios from 'axios';

import PostList from './PostList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    const url = 'http://localhost:8080/api/v1/posts';
    const { data } = await axios.get(url); 

    console.log(data);

    if (data) {
      this.setState({ posts: data.Value });
    }
  }

  render() {
    return (
      <div>
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

export default Home;