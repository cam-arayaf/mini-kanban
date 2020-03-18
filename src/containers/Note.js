import { connect } from 'react-redux';
import Note from './../components/Note';
import { add, save, remove, onDragStart } from './../actions/note';

const mapDispatchToProps = { add, save, remove, onDragStart };

export default connect(null, mapDispatchToProps)(Note);