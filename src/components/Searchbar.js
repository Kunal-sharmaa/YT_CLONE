import React from 'react';
import logo from '../components/assets/youtube.png';
import '../style/app.css';
import { Button } from '@mui/base/Button';
class Searchbar extends React.Component {
    //search element is here in term.
    handleChange = (event) => { //getting the event
        this.setState({
            term: event.target.value
        });
    
    };
    //submitting 
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }
    

    render() {
        
        return (
            <nav className="container">
                <div>
                    <img src={logo} style={{width:'120px', height:'80px',justifyContent:'center'}}  alt="youtube logo"></img>
                </div>
                <div className="search-bar">
                    <form onSubmit={this.handleSubmit} className='ui-form'>
                        <input onChange={this.handleChange} className='search' type="text" placeholder="Search.."/>
                        <Button className='btn'><i class="bi bi-search"></i></Button>
                    </form>
                </div>
            </nav>
        )
    }
}
export default Searchbar;
