import {connect} from "react-redux";
import {postBook} from '../Libraries/actions';
import Component from "./NewBookModal";

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
    postBook: payload => dispatch(postBook(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
