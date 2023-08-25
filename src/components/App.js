import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { string } from 'prop-types';
import './../style/video.css';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
        country: string
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",response);
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }
    
    render() {
        
        return (
            
            <>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                
                            <VideoDetail video={this.state.selectedVideo}/> 
                        
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        
                
            </>
            
        )
    }
}

export default App;