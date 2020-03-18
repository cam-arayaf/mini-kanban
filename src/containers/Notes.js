import { connect } from 'react-redux';
import Notes from './../components/Notes';

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);