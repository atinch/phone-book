import React from 'react';
import './List.css';
import PropTypes from 'prop-types';

class List extends React.Component{
    constructor(props){
        super(props);
        this.onChangeFilteredText = this.onChangeFilteredText.bind(this)
    }
    static propTypes = {
        contacts : PropTypes.array    
    }
    state = {
        filteredText: ''
    }
    onChangeFilteredText(e){
        this.setState({filteredText : e.target.value} )
    }
    render(){
        const filteredArray = this.props.contacts.filter( contact => {
               return( contact.name.toLowerCase().indexOf(this.state.filteredText.toLowerCase()) !== -1)}
        )
        
        return(
            <div className='List'>
               <input 
                    name={'filter'} 
                    id={'filter'} 
                    value={this.state.filteredText}
                    placeholder={'Filter by Name or Phone'}
                    onChange={this.onChangeFilteredText}
                />
                <ul>
                 
               {
                   filteredArray.map(contact => {
                        return(
                            <li key={contact.phone}>
                            <span className={'name'}>{contact.name}</span>
                            <span className={'phone'}>{contact.phone}</span>
                            <span className={'clearfix'}></span>
                        </li>
                        )
                   })
               }
                </ul>
                
            </div>
        );
    }

}

export default List