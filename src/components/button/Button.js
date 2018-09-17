// @flow
import { Component } from '../internal-only';

class Button extends Component {
  constructor() {
    super(document.createElement('button'));
  }
}

export default Button;
