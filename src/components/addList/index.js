import React, { Component, Fragment } from 'react';
import AddItem from '../addItem/';

export default class AddList extends Component {
    render() {
      let items = this.props.posts.map((post, index) => (
      <AddItem
          key={post.id}
          post={post}
      />
      ));
      return <Fragment>{items}</Fragment>;
    }
  }