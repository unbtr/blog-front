import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

import Article from './Article';
import Button from './Button';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      error: false,
      isDelete: false,
    }

    this.renderContent = this.renderContent.bind(this);
    this.delete = this.delete.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  componentDidMount() {
    this.fetch(this.props.match.params.id);
  }

  async fetch(id) {
    const url = `http://localhost:8080/api/v1/posts/${id}`;
    const { data } = await axios.get(url);
    if (data) {
      const createdAt= this.formatDate(data.CreatedAt);
      const updatedAt = this.formatDate(data.UpdatedAt)
      this.setState({
        post: {
          id: data.ID,
          title: data.title,
          content: data.content,
          createdAt,
          updatedAt,
        }
      });
      
    }
  }

  async delete() {
    const id = this.props.match.params.id;
    const url = `http://localhost:8080/api/v1/posts/${id}`;
    const { data } = await axios.delete(url);
    
    if (data) {
      this.setState({ isDelete: true });
    }
  }

  formatDate(date) {
    return moment(date).format('YYYY/MM/DD');
  }

  renderContent() {
    if (this.state.error) {
      return <div>お探しの記事は見つかりませんでした...</div>;
    } else if (this.state.isDelete) {
      return <div>削除済みの記事です。</div>;
    } else {
      return <Article post={this.state.post} />;
    }
  }

  renderButton() {
    if (this.state.error || this.state.isDelete) {
      return;
    }

    return (
      <div>
        <div>
          <Button onClick={this.delete}>Delete Post</Button>
        </div>
        <div>
          <Link to={`/p/${this.state.post.id}/edit`}>Edit Post</Link>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
        {this.renderButton()}
      </div>
    ); 
  }
}

export default Post;