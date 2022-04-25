import {connect} from "react-redux";
import {fetchLibraryData, postLibraries} from './components/Libraries/actions';

import Component from "./App";

const mapStateToProps = state => ({
    librariesData: state.librariesData,
});
const mapDispatchToProps = dispatch => ({
    fetchLibraryData: payload => dispatch(fetchLibraryData(payload)),
    postLibraries: payload => dispatch(postLibraries(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
