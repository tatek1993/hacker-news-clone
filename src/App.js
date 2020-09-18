import React, { useState } from 'react';
import { Route, Switch, Link, useParams } from "react-router-dom";
import PostList from './posts/PostList';
import PostComments from "./posts/PostComments";
import './App.css';
import logo from './y18.gif';

function App() {
  const { itemID } = useParams();
  return (
    <div className='app-container'>
      <div className='app-body'>
        <div className='header'>
          <img src={logo} />&nbsp;<span id="logo-text">Hacker News </span>&nbsp;<span> new | past | comments | ask | jobs | submit</span>
        </div>
        <Route exact path='/' component={PostList}>
          <PostList />
        </Route>

        <Route exact path='/item/:itemID'>
          <PostComments />
        </Route>
      </div>


    </div>

  );
};

export default App;
