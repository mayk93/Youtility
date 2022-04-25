import BaseComponent from "../Library";
import {appFixture} from "../../../fixtures";
import {booksSelector} from '../selectors';

const MockWrapper = ({libraryId, ...other}) => <BaseComponent libraryId={libraryId}
                                                              books={booksSelector(appFixture, libraryId)} {...other} />

export default MockWrapper;
