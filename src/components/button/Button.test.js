import Button from './Button';

describe('Button', () => {
  describe('create method', () => {
    it('should not render a button when no method executed', () => {
      const base = new Button();

      expect(document.querySelector('button')).toBeNull();
    });

    it('should render a button when method executed', () => {
      const base = new Button();
      base.create();
      const buttons = document.querySelectorAll('button');

      expect(buttons.length).toBe(1);
    });
  });
});
