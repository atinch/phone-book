import React from 'react';

import List from './List.js'
import Form from './Form'
import './Contacts.css'
import PropTypes from 'prop-types'

const Contacts = props => 
            <div className='Contacts'>
                <List contacts={props.contacts}/>
                <Form addContact={props.addContact}/>
            </div>;
    
Contacts.propTypes={
    contacts: PropTypes.array,
    addContact : PropTypes.func
}
export default Contacts