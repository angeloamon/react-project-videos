import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { text: '' };
    }

    onTextSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmitTerm(this.state.text);
    }

    onInputChange = (event) => {
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <div style={{marginTop: "20px", fontSize: "20px"}}>
                <form onSubmit={this.onTextSubmit}>
                    <div className="ui icon input fluid">
                        <input type="text" placeholder="Search videos . . ." value={this.state.text} onChange={this.onInputChange} />
                        <i className="search icon" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;