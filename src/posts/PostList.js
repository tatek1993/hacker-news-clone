import React, { useState, useEffect } from 'react';
import { Route, Link } from "react-router-dom";
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getPosts = () => {
            axios
                .get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
                .then(res => {
                    setPosts(res.data);//I think that since this is a list of ids, this will need to be changed??
                })
                .catch(err => {
                    console.error('Server Error', err);
                });
        }
        getPosts();
    }, []);

    return (
        <div className='post-list'>
            {posts.map(post => (
                <PostDetails key={post.id} post={post} />
            ))}
        </div>
    );
}

function PostDetails({ post }) {
    const { title, url, by, time, descendants, score } = post;
    return (
        <Link to={`/item/${id}`}>
            <div className='post-card' key={post.id}>
                <div className="title">
                    <a>{title}</a>
                    <span>
                        "("
                        <a href='{url}'>
                            <span>{url}</span>
                        </a>
                        ")"
                    </span>
                </div>
                <div className="post-info">
                    <span>{score}</span>
                    " by "
                    <span>{by}</span>
                    <span>{time}</span>
                    "|"
                    <span>hide</span>
                    "|"
                    <a href="link to comments">{descendants}</a>

                </div>
            </div>
        </Link>
    );
}

export default PostList;