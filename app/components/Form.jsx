import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' ref='location' placeholder='Enter a place'/>
          <button>Go</button>
        </form>
      </div>
    );
  }
};

export default Form;
