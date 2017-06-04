import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
};

class Loading extends Component {
  constructor(props) {
    super(props);

    this.originalText = props.text;
    this.state = {
      text: this.originalText
    };
  }
  
  componentDidMount() {
    const stopper = this.originalText + '...';

    this.interval = setInterval(() => {
      if (this.state.text === stopper) {
        this.setState(() => {
          return {
            text: this.originalText
          };
        });
      } else {
        this.setState((prevState) => {
          return {
            text: prevState.text + '.'
          };
        });
      }
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    );
  }
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number
};

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
};

export default Loading; 