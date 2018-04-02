// @flow
const postDOM: Function = () => {
  const theText: string = 'some text here';
  const textBox: ?HTMLElement = document.getElementById('textbox');
  const setTextBox = () => {
    if (textBox) {
      textBox.innerHTML = theText;
    }
  };

  setTimeout(setTextBox, 1500);

  return;
}

export default postDOM;
