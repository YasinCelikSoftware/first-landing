import React, {Component} from 'react';
import {Button} from 'reactstrap';
import './Buttons.css';

export default class SeeMoreButton extends Component {
  render () {
    return (
      <Button
        className="sm-button"
        onClick={this.props.onClick}
        type={this.props.type}
      >
        {this.props.content}
      </Button>
    );
  }
}
