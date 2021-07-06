import React, { Component } from 'react';
import ContactForm from './components/ContactForm/Form.jsx';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    return (
      <div>
        <ContactForm />
      </div>
    );
  }
}

export default App;
