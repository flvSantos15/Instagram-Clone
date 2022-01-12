import React, { useState } from 'react'
import './App.css';
import Post from './components/Post/Post';

function App() {
  const [posts, setPost] = useState([
    {
      userName: 'flvSantos',
      caption: 'Wow it works',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRGnw0WxiaP_pOjrhvhPP8Qvymv6Gzb6EPQ&usqp=CAU'
    },
    {
      userName: 'ssssangha',
      caption: 'This is a fun project',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtCgBTnlIYIdRPQKeuF0iCBemxPZhoXrFdew&usqp=CAU'
    }
  ])

  return (
    <div className="app">
      <div className="app__header">
        <img
          className='app__headerImage'
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt='Instagram-Logo'
        />
      </div>

      <h1>Hello Clever Programmers</h1>

      {
        posts.map(post => (
          <Post
            userName={post.userName}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))
      }

    </div>
  );
}

export default App;
