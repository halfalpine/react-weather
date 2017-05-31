import React from 'react';;
import Display from './Display.jsx';
import Form from './Form.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>React Weather</p>
        <Display/>
        <Form/>
      </div>
    );
  }
};

export default Main;
