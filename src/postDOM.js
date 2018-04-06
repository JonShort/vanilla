// @flow
import { Button, TextBox } from './components';

const postDOM: Function = () => {
  const TextButton = new Button();

  TextButton.create({
    classes: ['button-primary'],
    onClick: () => console.log('Button clicked'),
    parent: document.body,
    text: 'Click me please!',
  });
  setTimeout(
    () => TextButton.update({ text: 'This button was updated by setTimeout' }),
    1000
  );
};

export default postDOM;
