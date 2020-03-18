import { connect } from 'react-redux';
import Board from './../components/Board';
import { onDragOver, onDrop } from './../actions/board';

const mapDispatchToProps = { onDragOver, onDrop };

export default connect(null, mapDispatchToProps)(Board);