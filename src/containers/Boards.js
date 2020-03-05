import { connect } from 'react-redux';
import Boards from './../components/Boards';

const mapStateToProps = ({ boards }) => ({ boards });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Boards);