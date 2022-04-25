import React from "react";
import Library from './components/Libraries';
import NewBookModal from './components/NewBookModal';
import PropTypes from "prop-types";

import './App.css';

class App extends React.Component {
    state = {
        displayNewBookModal: false,
    };

    componentDidMount() {
        const {librariesData, fetchLibraryData} = this.props;

        Object.keys(librariesData).map(libraryId => fetchLibraryData({libraryId, libraryResource: 'books'}));
    }

    render() {
        const {displayNewBookModal} = this.state;
        const {postLibraries} = this.props;
        const libraries = Object.keys(this.props.librariesData);

        return (
            <div className="App">
                {displayNewBookModal ?
                    <NewBookModal closeModal={() => this.setState({displayNewBookModal: false})}/> : null}
                {libraries.map(library => <Library key={library} libraryId={library}/>)}
                <br/>
                <button className="add-new-button" onClick={() => postLibraries()}>Create a new library</button>
                <button className="add-new-button" onClick={() => this.setState({displayNewBookModal: true})}>Add Book
                    to Library
                </button>
            </div>
        );
    }
}

Library.propTypes = {
    librariesData: PropTypes.object,
    fetchLibraryData: PropTypes.func,
    postLibraries: PropTypes.func,
};

export default App;
