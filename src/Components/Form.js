import React from 'react';

class Form extends React.Component{

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    state = {
        name: '',
        phone: ''
    }

    onChange(e) {
         this.setState({
            [e.target.name] : e.target.value
         }) 
    }

    onSubmit(e){
        e.preventDefault();
        this.props.addContact({...this.state});
    }
    render(){
        return(
            <div>
                <form className={'Form'} onSubmit={this.onSubmit}>
                    <input 
                        name={'name'} 
                        id={'id'} 
                        value={this.state.name} 
                        onChange={this.onChange} 
                        placeholder={'Enter a Name'}>
                    </input>
                    <input 
                        name={'phone'} 
                        id={'phone'} 
                        value={this.state.phone} 
                        onChange={this.onChange} 
                        placeholder={'Enter a Phone'}></input>
                    <button>Add</button>
                </form>
            </div>
        );
    }

}

export default Form