import { connect } from 'react-redux';
import Note from './../components/Note';
import { add, save, remove, previous, next } from './../actions/note';

const mapStateToProps = ({ note }) => ({ note });

const mapDispatchToProps = { add, save, remove, previous, next };

export default connect(mapStateToProps, mapDispatchToProps)(Note);