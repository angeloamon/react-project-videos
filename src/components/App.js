import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../api/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term: [], selectedVideo: null };
    }

    componentDidMount() {
        this.onSearchSubmit('music');
    }

    onSearchSubmit = async (term) => {
        const response = await Youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ 
            term: response.data.items,
            selectedVideo: response.data.items[0] 
        });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmitTerm={this.onSearchSubmit} />
                <div className="ui segment">
                    <div className="ui row">
                        <div className="ui grid">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedVideo} />
                            </div>
                            <div className="four wide column">
                                <VideoList onVideoSelect={this.onVideoSelect} onList={this.state.term} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;