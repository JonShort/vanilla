// @flow
import {
  Button,
  TextBox,
} from './components';

const postDOM: Function = () => {
  const TextButton = new Button();
  TextButton.text = 'Click me please!';
  TextButton.onClick = () => console.log('Button clicked');
  TextButton.classes = ['button-primary'];

  TextButton.create();
}

export default postDOM;
