import { connect } from 'react-redux';
import Notes from './../components/Notes';

const mapStateToProps = ({ notes }) => ({ notes });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);