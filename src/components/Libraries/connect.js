import {connect} from "react-redux";
import {fetchLibraryData} from './actions';
import {booksSelector} from "./selectors";
import Component from "./Library";

const mapStateToProps = (state, ownProps) => ({
    books: booksSelector(state, ownProps.libraryId),
});
const mapDispatchToProps = dispatch => ({
    fetchLibraryData: payload => dispatch(fetchLibraryData(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
