import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Post = (props) => {
    const [post, setPost] = useState({});

    // const { title, url, by, time, descendants, score } = post;

    useEffect(() => {
        // const id = itemID;
        console.log('props.postId', props.postId)
        axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${props.postId}.json`)
            .then(res => {
                console.log('post data', res.data)

                setPost(res.data);

            })
            .catch(err => {
                console.error('There was an error:', err);
            });

    }, [props.postId]);

    // if (!post) {
    //     return <div>Loading post information...</div>;
    // }

    return (

        <div className='post-card'>
            <div className="title">
                <span className='rank'>{props.rank + 1}.</span>&nbsp;<span className="upvote">▲ </span><a href={post.url}>{post.title} </a>
                <span>
                    (
                    <a href={post.url}>
                        {post.url ? new URL(post.url).hostname : 'link'}
                    </a>
                    )
                </span>
            </div>
            <div className="post-info">
                <span>{post.score} points</span>
                <span> by </span>
                <span>{post.by}</span>
                <span> {post.time} </span>
                |
                <span> hide </span>
                |
                <Link to={`/item/${props.postId}`}>
                    {` ${post.descendants} comments`}
                </Link>
            </div>
        </div>

    )
}

export default Post;