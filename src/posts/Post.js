import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const Post = () => {
    const [post, setPost] = useState();
    const { itemID } = useParams();
    const { title, url, by, time, descendants, score } = post;

    useEffect(() => {
        const id = itemID;

        axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${id}`)
            .then(res => {
                setPost(res.data);
            })
            .catch(err => {
                console.error('There was an error:', error);
            });

    }, [itemID]);

    return (
        <div>
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
    )
}

export default Post;