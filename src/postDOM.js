// @flow
import { Button, TextBox } from './components';

const postDOM = (): void => {
  const buttonOptions = (text: string) => ({
    classes: ['button-primary'],
    onClick: () => console.log('Button clicked'),
    parent: document.querySelector('#app'),
    text,
  });

  const TextButton = new Button();
  const TextButton2 = new Button();
  const TextButton3 = new Button();
  const TextButton4 = new Button();

  TextButton.create(buttonOptions('here is button 1'));
  TextButton2.create(buttonOptions('here is button 2'));
  TextButton3.create(buttonOptions('here is button 3'));
  TextButton4.create(buttonOptions('here is button 4'));

  setTimeout(
    () => TextButton.update({ text: 'This button was updated by setTimeout' }),
    2000
  );

  setTimeout(() => TextButton.destroy(), 6000);
};

export default postDOM;
