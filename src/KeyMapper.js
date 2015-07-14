import { Component } from 'react';
import normalize from './normalize';

export default class KeyMapper extends Component {
  constructor(props) {
    super(props);

    this.show = props.show.map(normalize);
    this.hide = props.hide.map(normalize);

    this.state = { triggered: false };
  }

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      const show = this.show.every((f) => f(e));
      const hide = this.hide.every((f) => f(e));

      if (show) {
        this.setState({ triggered: true });
      }

      if (hide) {
        this.setState({ triggered: false });
      }
    });
  }

  render() {
    return this.state.triggered ? this.props.children() : null;
  }
}

export { ALT, CTRL, SHIFT } from './constants';
