import React from "react";
import PropTypes from "prop-types";
import './NewBookModal.css';

class NewBookModal extends React.Component {
    state = {
        isbn: '',
        title: '',
        authors: [],
        currentAuthor: '',
        targetLibrary: '',
    }

    render() {
        const {closeModal, postBook} = this.props;

        return (
            <div className="modal">
                <div className="form">
                    <input placeholder="Target Library"
                           onChange={event => this.setState({targetLibrary: event.target.value})}/>
                    <input placeholder="ISBN" onChange={event => this.setState({isbn: event.target.value})}/>
                    <input placeholder="Title" onChange={event => this.setState({title: event.target.value})}/>
                    <input placeholder="Author" value={this.state.currentAuthor}
                           onChange={event => this.setState({currentAuthor: event.target.value})}/>
                    <div>Authors:</div>
                    <br/>
                    {this.state.authors.map(author => (
                        <div key={author}>
                            <p>{author}</p>
                            <br/>
                        </div>
                    ))}
                    <button onClick={() => {
                        this.setState(previousState => ({authors: [...previousState.authors, this.state.currentAuthor]}), () => this.setState({currentAuthor: ''}))
                    }}>Add author
                    </button>
                    <br/>
                    <br/>
                    <button className="add-new-button" onClick={() => postBook(this.state)}>Add book</button>
                    <button className="close-modal-button" onClick={closeModal}>Close Modal</button>
                </div>
            </div>
        )
    }
}

NewBookModal.propTypes = {
    closeModal: PropTypes.func,
    postBook: PropTypes.func,
}

export default NewBookModal;

//     state = {
//         isbn: '',
//         title: '',
//         authors: [],
//         currentAuthor: '',
//         targetLibrary: '',
//     }
//
//     render() {
//         return (
//             <div>
//                 <input placeholder="Target Library" onChange={event => this.setState({ targetLibrary: event.target.value })}/>
//                 <input placeholder="ISBN" onChange={event => this.setState({ isbn: event.target.value })}/>
//                 <input placeholder="Title" onChange={event => this.setState({ title: event.target.value })}/>
//                 <input placeholder="Author" value={this.state.currentAuthor} onChange={event => this.setState({ currentAuthor: event.target.value })}/>
//                 <div>Authors:</div><br />
//                 {this.state.authors.map(author => (
//                     <div key={author}>
//                         <p>{author}</p>
//                         <br/>
//                     </div>
//                 ))}
//                 <button onClick={() => {
//                     this.setState(previousState => ({ authors: [...previousState.authors, this.state.currentAuthor] }), () => this.setState({ currentAuthor: '' }))
//                 }}>Add author</button>
//                 <br/>
//                 <br/>
//                 <button onClick={() => this.props.postBook(this.state)}>Add book </button>
//             </div>
//         )
//     }