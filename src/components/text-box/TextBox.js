// @flow
interface I {
  +dom: ?HTMLElement,
  +setText: Function,
  text: string,
}

class TextBox implements I {
  dom = document.getElementById('textbox');
  text = 'Initial value';

  setText = (text: string) => this.text = text;
}

export default TextBox;
