// @flow
import TextBox, { TextBoxInterface } from "./components/textbox/TextBox"

const postDOM: Function = () => {
  const theText: string = 'some text here';
  const textBox: ?HTMLElement = document.getElementById('textbox');
  const setTextBox = () => {
    if (textBox) {
      textBox.innerHTML = theText;
    }
  };

  setTimeout(setTextBox, 1500);

  const theTextBox: TextBoxInterface = new TextBox;

  console.log(theTextBox.text);

  theTextBox.changeText('This text has changed');

  console.log(theTextBox.text);

  return;
}

export default postDOM;
