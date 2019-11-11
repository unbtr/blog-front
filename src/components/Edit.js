import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetch(this.props.match.params.id);
  }

  async fetch(id) {
    const url = `http://localhost:8080/api/v1/posts/${id}`;
    const { data } = await axios.get(url);
    this.setState({
      title: data.title,
      content: data.content,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const id = this.props.match.params.id;
    const url =`http://localhost:8080/api/v1/posts/${id}`;
    const params = new URLSearchParams();
    params.append('title', this.state.title.trim());
    params.append('content', this.state.content.trim());
    
    const { data } = await axios.put(url, params);
    console.log(data);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { title, content } = this.state;
    return (
      <div>
        <h1>Edit Post</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form__row">
            <label
              className="form__label"
              htmlFor="title"
            >Title [required]</label>
            <input
              className="form__input"
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form__row">
            <label
              className="form__label"
              htmlFor="content"
            >Content [required]</label>
            <textarea
              className="form__textarea"
              name="content"
              id="content"
              rows="8"
              value={content}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="form__row">
            <button
              className="form__submit"
              type="submit"
            >Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Edit;