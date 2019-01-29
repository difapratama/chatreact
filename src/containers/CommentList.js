import React from 'react';
import Comment from './CommentActive';
import { connect } from 'react-redux';

const CommentList = (props) => {
    let nodes = props.comments.map((item, index) => {
        return (
            <Comment
                key={index}
                author={item.author}
                message={item.message}
                id={index} />)
    })

    return (
        <ul>
            {nodes}
        </ul>
    )
}

const mapStateToProps = (state) => ({
    comments: state.comments
})

export default connect(
    mapStateToProps
)(CommentList)