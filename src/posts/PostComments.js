import React, { useState, useEffect } from 'react';
import { Route, Link, useParams } from "react-router-dom";
import PostComment from './PostComment';
import axios from 'axios';

const PostComments = () => {
    const { itemID } = useParams();

    const [comments, setComments] = useState([]);


    useEffect(() => {
        const getComments = () => {
            axios
                .get(`https://hacker-news.firebaseio.com/v0/item/${itemID}.json`)
                .then(res => {
                    setComments(res.data.kids);//I think that since this is a list of ids, this will need to be changed??
                    console.log('data', res.data);
                })
                .catch(err => {
                    console.error('Server Error', err);
                });
        }
        getComments();
    }, [itemID]);

    return (
        <div className='post-list'>
            {comments.map(id => (
                <PostComment key={id} id={id} />
            ))}
        </div>
    );
}

export default PostComments;