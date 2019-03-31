import React, { Component } from 'react';
import '../App.css';

import Contacts from './Contacts.js'

class App extends Component {
  constructor(props){
    super(props);
    this.addContact = this.addContact.bind(this)
  }
  state= {
    contacts:[{
        name: 'atinc',
        phone: '11111111'
    },{
        name: 'cemil',
        phone: '2222222'
    }
    ]
}
addContact(contact){
  const contacts = this.state.contacts
  console.log('contacts :', contacts);
  contacts.push(contact);
  this.setState({contacts : contacts});
}
  render() {
    return (
      <div className="App">
        <Contacts contacts={this.state.contacts} addContact={this.addContact}/>
      </div>
    );
  }
}

export default App;
