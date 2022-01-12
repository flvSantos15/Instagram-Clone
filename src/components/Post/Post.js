import React from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar'

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className='post__avatar'
          alt='Flavio Santos'
          src='/static/images/avatar/1.jpg'
        />
        <h3>Username</h3>
      </div>
      {/* header -> avatar -> username */}

      <img
        className='post__image'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8wh_vrysQFY_0CkcD-e-lYPPHLvsTaXqIGA&usqp=CAU'
        alt='postImg'
      />

      <h4 className='post__text'><strong>flvSantos</strong> Wow day three of live sessions</h4>

    </div>
  )
}

export default Post
