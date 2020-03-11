import { connect } from 'react-redux';
import Board from './../components/Board';
import { onDragOver, onDrop } from './../actions/board';

const mapStateToProps = ({ board }) => ({ board });

const mapDispatchToProps = { onDragOver, onDrop };

export default connect(mapStateToProps, mapDispatchToProps)(Board);