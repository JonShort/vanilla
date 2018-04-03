// @flow
export interface TextBoxInterface {
  changeText: Function,
  text: string,
};

class TextBox {
  changeText: Function;
  text: string;

  constructor() {
    this.text = 'Initial text';
  }

  changeText (text: string) {
    this.text = text;

    return;
  }

  render() {
    return this.text;
  }
}

export default TextBox;
