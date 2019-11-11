import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/form.css';

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      error: false,
      isCompleted: false,
      post: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.initForm = this.initForm.bind(this);
    this.renderComplete = this.renderComplete.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const url ='http://localhost:8080/api/v1/posts';
    const params = new URLSearchParams();
    params.append('title', this.state.title.trim());
    params.append('content', this.state.content.trim());
    
    const { data } = await axios.post(url, params);
    console.log(data);

    if (data.Error === null) {
      this.setState({
        isCompleted: true,
        post: data.Value,
      })
    }else {
      this.setState({ error: true });
    }

    this.initForm();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  initForm() {
    const initialState = {
      title: '',
      content: '',
    }
    this.setState({ ...initialState });
  }

  renderComplete() {
    if (!this.state.isCompleted) {
      return;
    }

    return (
      <div>
        <p>記事を作成しました。</p>
        <Link to={`/p/${this.state.post.ID}`}>{this.state.post.title}</Link>
      </div>
    );
  }

  render() {
    const { title, content } = this.state;
    return (
      <div>
        <h1>Create New Post!</h1>
        {this.renderComplete()}
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
            >Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default New;