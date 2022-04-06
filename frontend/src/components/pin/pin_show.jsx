import React from 'react';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.pin.category}
      </div>
    )
  }
}

export default PinShow;