import React, {Component} from 'react';
import {Button} from 'reactstrap';
import './Buttons.css';

export default class KnowMoreButton extends Component {
  render () {
    return (
      <Button className="km-button" onClick={this.props.onClick}>
        {this.props.content}
      </Button>
    );
  }
}
