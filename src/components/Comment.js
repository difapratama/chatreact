import React from 'react';

const Comment = (props) => {
    return (
        <li>
            <h4>{props.author}</h4>
            <p>{props.message}</p>
            <button color="danger" type="button" onClick={props.onDelete}>Hapus</button>
        </li>
    )
}

export default Comment;