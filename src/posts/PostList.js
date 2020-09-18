import React, { useState, useEffect } from 'react';
import { Route, Link } from "react-router-dom";
import Post from './Post';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getPosts = () => {
            axios
                .get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
                .then(res => {
                    setPosts(res.data.slice(0, 24));//I think that since this is a list of ids, this will need to be changed??
                    console.log('data', res.data);
                })
                .catch(err => {
                    console.error('Server Error', err);
                });
        }
        getPosts();
    }, []);

    return (

        <div className='post-list'>

            {posts.map(postId => (
                <Post key={postId} postId={postId} />
            ))}
        </div>
    );
}

export default PostList;