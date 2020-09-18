import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Post = (props) => {
    const [comment, setComment] = useState({});

    useEffect(() => {


        axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${props.id}.json`)
            .then(res => {
                setComment(res.data);
            })
            .catch(err => {
                console.error('There was an error:', err);
            });

    }, [props.id]);

    return (

        <div className='post-card'>
            <div className="comment-header">
                {comment.by}
                {comment.time}

            </div>
            <div className="comment-body">
                {comment.text}
            </div>
        </div>

    )
}

export default Post;