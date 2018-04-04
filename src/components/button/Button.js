// @flow
interface I {
  create: Function;
  classes: Array<string>;
  onClick: ?Function;
  text: ?string;
}

class Button implements I {
  classes = [];
  onClick = null;
  text = null;

  handleClick = (event: Event) => {
    if (this.onClick) {
      this.onClick(event);
    }
  };

  // allow this create function to accept an object with the options in it?
  create = () => {
    const body = document.body;
    if (!body) {
      throw new Error('Cannot render Button when no document body exists!');
    }

    // Set dom values
    const dom = document.createElement('button');
    if (this.text) {
      dom.innerHTML = this.text;
    }
    dom.classList.add('button', ...this.classes);

    // Render dom & add listener
    body.appendChild(dom);
    dom.addEventListener('click', this.handleClick);
  };
}

export default Button;
