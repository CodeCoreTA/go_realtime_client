import React, { Component } from 'react';

class ChannelForm extends Component {
  handleSubmit(event) {
    event.preventDefault();

    // Get value from input
    const node = this.refs.channel;

    // Add Channel to List
    const channelName = node.value;
    this.props.addChannel(channelName);

    // Clear form
    node.value = '';
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit.bind(this) }>
        <div className='form-group'>
          <input
            className='form-control'
            placeholder='Add Channel'
            type='text'
            ref='channel'
          />
        </div>
      </form>
    )
  }
}

ChannelForm.propTypes = {
  addChannel: React.PropTypes.func.isRequired
}

export default ChannelForm
