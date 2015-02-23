var React = require('react');

export default React.createClass({
  getInitialState() {
    return { url: this.getObjectURL() };
  },

  getObjectURL(): number {
    return URL.createObjectURL(this.props.file);
  },

  render(): any {
    return <li><img src={this.state.url} /></li>;
  }
});
