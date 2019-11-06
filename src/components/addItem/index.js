import React, { Component, Fragment } from 'react';
import './addItem.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class addItem extends Component {
  render() {
        let line = this.props.post.link ? (
            <a href={this.props.post.link}>{this.props.post.title}</a>
        ) : (
            <span>{this.props.post.title}</span>
        );
        return (
            <Fragment>
                <span className="additem">
                    {line}
                </span>
                <p className="shortdescription">{this.props.post.shortdescription}</p>
                <p className="carbrand">{this.props.post.carbrand}</p>
                <p className="author">{this.props.post.author}</p>
            </Fragment>
        );
    }
} 