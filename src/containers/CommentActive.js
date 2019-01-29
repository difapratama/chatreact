import { connect } from 'react-redux'
import { deleteComment } from '../actions'
import Comment from '../components/Comment'

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: () => dispatch(deleteComment(ownProps.id))
})

export default connect(
    null,
    mapDispatchToProps
)(Comment)