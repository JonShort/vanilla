// @flow
type UpdateOptions = {
  classes?: Array<string>,
  onClick?: Function,
  text?: string,
};

type AllOptions = {
  ...UpdateOptions,
  parent: HTMLElement,
};

interface I {
  +create: (opts: AllOptions) => void;
  +destroy: () => void;
}

class Component implements I {
  classes: Array<string>;
  dom: HTMLElement;
  onClick: ?Function;
  parent: HTMLElement | null;
  text: ?string;

  constructor(dom: HTMLElement) {
    this.dom = dom;
    this.classes = [];
    this.parent = null;
    this.onClick = null;
    this.text = null;
  }

  handleClick = (event: Event) => {
    if (this.onClick) {
      this.onClick(event);
    }
  };

  setText = (text: string) => {
    if (this.dom != null) {
      this.dom.innerHTML = text;
    }
  };

  update = ({ classes, onClick, text }: UpdateOptions) => {
    // Set options provided to create
    if (classes != null) {
      this.dom.classList.add(...classes);
    }

    if (text != null) {
      this.setText(text);
    }

    if (onClick != null) {
      this.onClick = onClick;
    }
  };

  create = ({ parent, ...rest }: AllOptions) => {
    // Set parent and dom to be rendered
    this.parent = parent;
    if (!this.parent) {
      throw new Error('Cannot render Component when no parent provided!');
    }

    this.update(rest);

    // Render dom & add listener
    if (this.parent && this.dom) {
      this.parent.appendChild(this.dom);
      this.dom.addEventListener('click', this.handleClick);
    }
  };

  destroy = () => {
    if (this.parent && this.dom) {
      this.parent.removeChild(this.dom);
    }
  };
}

export default Component;
