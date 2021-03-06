import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions';
import {Link} from 'react-router';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };


  onSubmit(props) {
    this.props.createPost(props).then(() => {
      this.context.router.push('/');
    });
  }

  render() {

    const {fields: {title, categories, content}, handleSubmit, createPost} = this.props;

    const formInvalid = title.invalid || categories.invalid || content.invalid;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">{title.touched ? title.error : ''}</div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">{categories.touched ? categories.error : ''}</div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">{content.touched ? content.error : ''}</div>
        </div>

        <button type="submit" className="btn btn-primary" disabled={formInvalid}>Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate({title, categories, content}) {
  const errors = {};

  if(!title) {
    errors.title = 'Enter a title';
  }

  if(!categories) {
    errors.categories = 'Enter the categories';
  }

  if(!content) {
    errors.content = 'Enter a content';
  }

  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, {createPost})(PostsNew);
