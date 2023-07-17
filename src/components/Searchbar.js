import React from 'react';
import logo from '../components/assets/youtube.png';
import '../style/video.css';
 
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
            <div className="container">
                <div className="logo">
                    <h2  style={{height:'100px'}} className=""><img src={logo} style={{width:'150px', height:'100px',justifyContent:'center'}}  alt="youtube logo"></img></h2>
                </div>
                <div className="search-bar">
                    <form onSubmit={this.handleSubmit} className='ui-form'>
                        <input onChange={this.handleChange} className='video-search' type="text" placeholder="Search.."/>
                        <label htmlFor="video-search" class="button">Search</label>
                    </form>
                </div>
            </div>
        )
    }
}
export default Searchbar;
